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

    public function __construct($DBInfo,\SYSTEM\verifyclass $VerifyClass, \SYSTEM\API\apiclass $ApiClass){
        $this->m_dbinfo = $DBInfo;
        $this->m_verifyclass = $VerifyClass;
        $this->m_apiclass = $ApiClass;
    }

    // $call = post + get params
    // returns resultstring
    public function CALL($call = array()){

        if( !isset($call) ||
            !is_array($call) ||
            count($call) <= 0){
            throw new \Exception("No call given for the api");
            return null;}

        //Get the Databasetree
        $tree = array();
        if($this->m_dbinfo instanceof \SYSTEM\DB\DBInfo){
            $tree = self::getApiTree();}
        else {
            if(!is_array($this->m_dbinfo)){
                throw new Exception('No Connectioninfo and no call table given to the api');}
            $tree = $this->m_dbinfo;
        }

        //print_r($tree);
        if(!is_array($tree)){
            throw new \Exception("Database Tree for Api empty - cannot proced!");}

        //Commands
        $commands = array();
        $parentid = -1;
        foreach($tree as $item){                
            if( $item[\DBD\APITable::FIELD_FLAG] == \DBD\APITable::VALUE_FLAG_COMMAND &&
                $item[\DBD\APITable::FIELD_PARENTID] == $parentid &&
                isset($call[$item[\DBD\APITable::FIELD_NAME]])){

                if( isset($item[\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;}
                $commands[] = array($item,$call[$item[\DBD\APITable::FIELD_NAME]]);
                $parentid = $item[\DBD\APITable::FIELD_ID];                
            }
        }

        //Parameters
        $parameters = array();
        $lastCommand = $commands[count($commands)-1][0];
        foreach($tree as $item){
            if( $item[\DBD\APITable::FIELD_FLAG] == \DBD\APITable::VALUE_FLAG_PARAM &&
                $item[\DBD\APITable::FIELD_PARENTID] == $lastCommand[\DBD\APITable::FIELD_ID]){
                
                if( isset($item[\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;}

                if(!isset($call[$item[\DBD\APITable::FIELD_NAME]])){
                    throw new \Exception('Parameter missing: '.$item[\DBD\APITable::FIELD_NAME]);}


                if( !method_exists($this->m_verifyclass, $item[\DBD\APITable::FIELD_ALLOWEDVALUES]) ||
                    !$this->m_verifyclass->$item[\DBD\APITable::FIELD_ALLOWEDVALUES]($call[$item[\DBD\APITable::FIELD_NAME]])){
                    throw new \Exception('Parameter type missmacht or Missing Verifier. Param: '.$item[\DBD\APITable::FIELD_NAME].' Verifier: '.$item[\DBD\APITable::FIELD_ALLOWEDVALUES]);}

                $parameters[] = array($item, $call[$item[\DBD\APITable::FIELD_NAME]]);
            }
        }

        //Check
        /*echo "<pre>";
        print_r($commands);
        echo "</pre>";
        echo "</br>---</br>";
        print_r($parameters);
        echo "</br>---</br>";
        print_r($call);
        echo "</br>---</br>";
        echo count($call).'-'.count($parameters).'-'.count($commands);*/
        if(count($call) != count($parameters) + count($commands)){
            throw new \Exception("Unhandled or misshandled parameters - api query is invalid");}

        //Function Name
        $command_call = "";       
        foreach($commands as $com){                        
            if(!\preg_match('^[0-9A-Za-z_]+$^', $com[1])){
                throw new \Exception("Call Command can only have letters!");}

            if($com[0][\DBD\APITable::FIELD_ALLOWEDVALUES] == 'FLAG'){
                $command_call .= '_flag_'.$com[0][\DBD\APITable::FIELD_NAME];
            } else {
                $command_call .= '_'.$com[0][\DBD\APITable::FIELD_NAME].'_'.\strtolower($com[1]);}
        }
        $command_call = substr($command_call, 1);

        //Function parameters
        $parameter_call = array();
        foreach($parameters as $param){
            $parameter_call[] = $param[1];}        

        if(!\method_exists($this->m_apiclass, $command_call)){
            throw new \Exception("API call is not implemented in API: ".$command_call);}

        //Call Function            
        return \call_user_func_array(array($this->m_apiclass,$command_call),$parameter_call);
    }
    
    private function getApiTree(){

        $con = new \SYSTEM\DB\Connection($this->m_dbinfo);
        $res = $con->query("SELECT * FROM ".\DBD\APITable::NAME." ORDER BY ".\DBD\APITable::FIELD_ID);
        unset($con);

        if(!$res){
            throw new \Exception("Sql Error ".mysqli_error());}

        $result = array();        
        while($row = $res->next()){
            $result[] = $row;}        

        return $result;
    }
}