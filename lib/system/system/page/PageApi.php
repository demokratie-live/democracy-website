<?php

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

namespace SYSTEM\PAGE;

class PageApi {

    private $m_dbinfo = null;
    private $m_verifyclass = null;
    private $m_pageclass = null;

    public function __construct($DBInfo,\SYSTEM\verifyclass $VerifyClass, \SYSTEM\PAGE\PageClass $PageClass){
        $this->m_dbinfo = $DBInfo;
        $this->m_verifyclass = $VerifyClass;
        $this->m_pageclass = $PageClass;
    }

    // $call = post + get params
    // returns resultstring
    public function CALL($call = array()){ 
        //Get the Databasetree
        $tree = array();
        if($this->m_dbinfo instanceof \SYSTEM\DB\DBInfo){
            $tree = self::getPageTree();}
        else {
            if(!is_array($this->m_dbinfo)){
                throw new Exception('No Connectioninfo and no call table given to the api');}
            $tree = $this->m_dbinfo;
        }

        //Commands
        $commands = array();
        $parentid = -1;
        foreach($tree as $item){
            if( $item[\DBD\PAGETable::FIELD_FLAG] == \DBD\PAGETable::VALUE_FLAG_COMMAND &&
                $item[\DBD\PAGETable::FIELD_PARENTID] == $parentid &&
                isset($call[$item[\DBD\PAGETable::FIELD_NAME]])){

                if( isset($item[\DBD\PAGETable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\DBD\PAGETable::FIELD_PARENTVALUE]){
                    continue;}
                $commands[] = array($item,$call[$item[\DBD\PAGETable::FIELD_NAME]]);
                $parentid = $item[\DBD\PAGETable::FIELD_ID];
            }
        }

        //Parameters
        $command_call = '';
        $parameters = array();
        if(count($commands) > 0){            
            $lastCommand = $commands[count($commands) -1 ][0];
            foreach($tree as $item){
                if( $item[\DBD\PAGETable::FIELD_FLAG] == \DBD\PAGETable::VALUE_FLAG_PARAM &&
                    $item[\DBD\PAGETable::FIELD_PARENTID] == $lastCommand[\DBD\PAGETable::FIELD_ID]){

                    if( isset($item[\DBD\PAGETable::FIELD_PARENTVALUE]) &&
                        $commands[count($commands)-1][1] != $item[\DBD\PAGETable::FIELD_PARENTVALUE]){
                        continue;}

                    if(!isset($call[$item[\DBD\PAGETable::FIELD_NAME]])){
                        throw new \Exception('Parameter missing: '.$item[\DBD\PAGETable::FIELD_NAME]);}


                    if( !method_exists($this->m_verifyclass, $item[\DBD\PAGETable::FIELD_ALLOWEDVALUES]) ||
                        !$this->m_verifyclass->$item[\DBD\PAGETable::FIELD_ALLOWEDVALUES]($call[$item[\DBD\PAGETable::FIELD_NAME]])){
                        throw new \Exception('Parameter type missmacht or Missing Verifier. Param: '.$item[\DBD\PAGETable::FIELD_NAME].' Verifier: '.$item[\DBD\PAGETable::FIELD_ALLOWEDVALUES]);}

                    $parameters[] = array($item, $call[$item[\DBD\PAGETable::FIELD_NAME]]);
                }
            }        

            //Function Name            
            foreach($commands as $com){
                if(!\preg_match('^[0-9A-Za-z_]+$^', $com[1])){
                    throw new \Exception("Call Command can only have letters!");}

                if($com[0][\DBD\PAGETable::FIELD_ALLOWEDVALUES] == 'FLAG'){
                    $command_call .= '_flag_'.$com[0][\DBD\PAGETable::FIELD_NAME];
                } else {
                    $command_call .= '_'.$com[0][\DBD\PAGETable::FIELD_NAME].'_'.\strtolower($com[1]);}
            }
            $command_call = substr($command_call, 1);
        }

        $command_call = $command_call == '' ? 'default_page': $command_call;

        //Function parameters
        $parameter_call = array();
        if(count($parameters) > 0){            
            foreach($parameters as $param){
                $parameter_call[] = $param[1];}
        }

        if(!\method_exists($this->m_pageclass, $command_call)){
            throw new \Exception("Page call is not implemented in PageApi: ".$command_call);}        

        //Call Function
        return \call_user_func_array(array($this->m_pageclass,$command_call),$parameter_call);
    }

    private function getPageTree(){

        $con = new \SYSTEM\DB\Connection($this->m_dbinfo);
        $res = $con->query("SELECT * FROM ".\DBD\PAGETable::NAME." ORDER BY ".\DBD\PAGETable::FIELD_ID);

        if(!$res){
            throw new \Exception("Sql Error ".mysqli_error());}

        $result = array();
        while($row = $res->next()){
            $result[] = $row;}

        return $result;                
    }
}