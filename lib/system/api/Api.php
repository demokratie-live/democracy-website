<?php
/*
API CALL:
COMMANDS OPTIONS PARAMETERS via post/get

COMMANDS:
Handled by the Api, verified and processed via database table
COMMAND(ID,VALUE)

PARAMS:
Verified and typechecked by the api
PARAM(ID,VALUE)
 */

// $api = new \API\API(..);
// return $api->CALL($call);

/*
     * Table:
     * ID   FLAG    C/P            PARENTCOMMANDID  ISCHACHED   ALLOWEDVALUES (cache only for commands, null on command = dont care)
     * 0    C       'CALL'          -1              null        null (calculated by the api for commands)
     * 1    C       'ALGO'          0               true        null
     * 2    P       'x'             1               null        GOOGLEMAPXY (function in MYVERIFY::func)
     * 3    P       'y'             1               null        GOOGLEMAPXY
     * 4    P       'zoom'          1               null        GOOGLEMAPZOOM
     * 5    P       'from'          1               null        TIMEWIERDFORMAT
     * 6    P       'to'            1               null        TIMEWIERDFORMAT
     * 7    P       'type'          1               null        SENSORTYPE
     * 8    P       'provider'      1               null        SENSORPROVIDER
     * 9    P       'visibility'    1               null        SENSORVISIBILITY
     * 10   C       'markers'       1               null        BOOL
     *
     * MYAPI::map_heatmap($PARAMS,$OPTIONS)
     * MYAPI::map_heatmap_key
     */

namespace SYSTEM\API;

class Api {

    private $m_dbinfo = null;
    private $m_verifyclass = null;
    private $m_apiclass = null;

    public function __construct(\SYSTEM\verifyclass $VerifyClass, \SYSTEM\API\apiclass $ApiClass,$DBInfo = null){
        $this->m_dbinfo = $DBInfo == null ? \SYSTEM\system::getSystemDBInfo() : $DBInfo;
        $this->m_verifyclass = $VerifyClass;
        $this->m_apiclass = $ApiClass;
    }

    // $call = post + get params
    // returns resultstring
    public function CALL($call = array()){

        if( !isset($call) || !is_array($call) || count($call) <= 0){
            throw new \SYSTEM\LOG\ERROR("No call given for the api");}

        //Get the Databasetree
        $tree = array();
        if($this->m_dbinfo instanceof \SYSTEM\DB\DBInfo){
            $tree = self::getApiTree();
            if(!is_array($tree)){
                throw new \SYSTEM\LOG\ERROR("Database Tree for Api empty - cannot proced!");}
        } else {
            if(!is_array($this->m_dbinfo)){
                throw new \SYSTEM\LOG\ERROR('No Connectioninfo and no call table given to the api');}
            $tree = $this->m_dbinfo;
        }        

        //Commands
        $commands = array();
        $parentid = -1;
        
        foreach($tree as $item){ 
            if( intval($item[\SYSTEM\DBD\APITable::FIELD_FLAG]) == \SYSTEM\DBD\APITable::VALUE_FLAG_COMMAND &&
                intval($item[\SYSTEM\DBD\APITable::FIELD_PARENTID]) == $parentid &&
                isset($call[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                
                if( isset($item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;
                }
                
                $commands[] = array($item,$call[$item[\SYSTEM\DBD\APITable::FIELD_NAME]]);
                $parentid = intval($item[\SYSTEM\DBD\APITable::FIELD_ID]);                
            }
        }
        
        //Parameters
        $parameters = array();
        $lastCommand = $commands[count($commands)-1][0];
        foreach($tree as $item){
            if( intval($item[\SYSTEM\DBD\APITable::FIELD_FLAG]) == \SYSTEM\DBD\APITable::VALUE_FLAG_PARAM &&
                intval($item[\SYSTEM\DBD\APITable::FIELD_PARENTID]) == $lastCommand[\SYSTEM\DBD\APITable::FIELD_ID]){
                
                if( isset($item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;}

                if(!isset($call[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter missing: '.$item[\SYSTEM\DBD\APITable::FIELD_NAME]);}


                if( !method_exists($this->m_verifyclass, $item[\SYSTEM\DBD\APITable::FIELD_ALLOWEDVALUES]) ||
                    !$this->m_verifyclass->$item[\SYSTEM\DBD\APITable::FIELD_ALLOWEDVALUES]($call[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\DBD\APITable::FIELD_NAME].' Verifier: '.$item[\SYSTEM\DBD\APITable::FIELD_ALLOWEDVALUES]);}

                $parameters[] = array($item, $call[$item[\SYSTEM\DBD\APITable::FIELD_NAME]]);
            }
        }        
        if(count($call) != (count($parameters) + count($commands)) ){
            throw new \SYSTEM\LOG\ERROR('Unhandled or misshandled parameters - api query is invalid');}

        //Function Name
        $command_call = "";       
        foreach($commands as $com){                        
            if(!\preg_match('^[0-9A-Za-z_]+$^', $com[1])){
                throw new \SYSTEM\LOG\ERROR('Call Command can only have letters!');}

            if($com[0][\SYSTEM\DBD\APITable::FIELD_ALLOWEDVALUES] == 'FLAG'){
                $command_call .= '_flag_'.$com[0][\SYSTEM\DBD\APITable::FIELD_NAME];
            } else {
                $command_call .= '_'.$com[0][\SYSTEM\DBD\APITable::FIELD_NAME].'_'.\strtolower($com[1]);}
        }
        $command_call = substr($command_call, 1);

        //Function parameters
        $parameter_call = array();
        foreach($parameters as $param){
            $parameter_call[] = $param[1];}        

        if(!\method_exists($this->m_apiclass, $command_call)){
            throw new \SYSTEM\LOG\ERROR("API call is not implemented in API: ".$command_call);}

        //Call Function            
        return \call_user_func_array(array($this->m_apiclass,$command_call),$parameter_call);
    }
    
    private function getApiTree(){

        $con = new \SYSTEM\DB\Connection($this->m_dbinfo);
        $res = $con->query('SELECT * FROM '.\SYSTEM\DBD\APITable::NAME.' ORDER BY "'.\SYSTEM\DBD\APITable::FIELD_ID.'"');
        unset($con);

        if(!$res){
            throw new \SYSTEM\LOG\ERROR('Database Error '.pg_last_error($con));}

        $result = array();        
        while($row = $res->next()){
            $result[] = $row;}        

        return $result;
    }
}