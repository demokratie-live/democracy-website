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

    public function __construct(\SYSTEM\verifyclass $VerifyClass, \SYSTEM\PAGE\PageClass $PageClass,$DBInfo = null){
        $this->m_dbinfo = $DBInfo == null ? \SYSTEM\system::getSystemDBInfo() : $DBInfo;
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
                throw new \SYSTEM\LOG\ERROR('No Connectioninfo and no call table given to the api');}
            $tree = $this->m_dbinfo;
        }

        //Commands
        $commands = array();
        $parentid = -1;
        foreach($tree as $item){
            if( $item[\SYSTEM\DBD\PAGETable::FIELD_FLAG] == \SYSTEM\DBD\PAGETable::VALUE_FLAG_COMMAND &&
                $item[\SYSTEM\DBD\PAGETable::FIELD_PARENTID] == $parentid &&
                isset($call[$item[\SYSTEM\DBD\PAGETable::FIELD_NAME]])){

                if( isset($item[\SYSTEM\DBD\PAGETable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\SYSTEM\DBD\PAGETable::FIELD_PARENTVALUE]){
                    continue;}
                $commands[] = array($item,$call[$item[\SYSTEM\DBD\PAGETable::FIELD_NAME]]);
                $parentid = $item[\SYSTEM\DBD\PAGETable::FIELD_ID];
            }
        }

        //Parameters
        $command_call = '';
        $parameters = array();
        if(count($commands) > 0){            
            $lastCommand = $commands[count($commands) -1 ][0];
            foreach($tree as $item){
                if( $item[\SYSTEM\DBD\PAGETable::FIELD_FLAG] == \SYSTEM\DBD\PAGETable::VALUE_FLAG_PARAM &&
                    $item[\SYSTEM\DBD\PAGETable::FIELD_PARENTID] == $lastCommand[\SYSTEM\DBD\PAGETable::FIELD_ID]){

                    if( isset($item[\SYSTEM\DBD\PAGETable::FIELD_PARENTVALUE]) &&
                        $commands[count($commands)-1][1] != $item[\SYSTEM\DBD\PAGETable::FIELD_PARENTVALUE]){
                        continue;}

                    if(!isset($call[$item[\SYSTEM\DBD\PAGETable::FIELD_NAME]])){
                        throw new \SYSTEM\LOG\ERROR('Parameter missing: '.$item[\SYSTEM\DBD\PAGETable::FIELD_NAME]);}


                    if( !method_exists($this->m_verifyclass, $item[\SYSTEM\DBD\PAGETable::FIELD_ALLOWEDVALUES]) ||
                        !$this->m_verifyclass->$item[\SYSTEM\DBD\PAGETable::FIELD_ALLOWEDVALUES]($call[$item[\SYSTEM\DBD\PAGETable::FIELD_NAME]])){
                        throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\DBD\PAGETable::FIELD_NAME].' Verifier: '.$item[\SYSTEM\DBD\PAGETable::FIELD_ALLOWEDVALUES]);}

                    $parameters[] = array($item, $call[$item[\SYSTEM\DBD\PAGETable::FIELD_NAME]]);
                }
            }        

            //Function Name            
            foreach($commands as $com){
                if(!\preg_match('^[0-9A-Za-z_]+$^', $com[1])){
                    throw new \SYSTEM\LOG\ERROR("Call Command can only have letters!");}

                if($com[0][\SYSTEM\DBD\PAGETable::FIELD_ALLOWEDVALUES] == 'FLAG'){
                    $command_call .= '_flag_'.$com[0][\SYSTEM\DBD\PAGETable::FIELD_NAME];
                } else {
                    $command_call .= '_'.$com[0][\SYSTEM\DBD\PAGETable::FIELD_NAME].'_'.\strtolower($com[1]);}
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
            throw new \SYSTEM\LOG\ERROR("Page call is not implemented in PageApi: ".$command_call);}

        //Call Function
        return \call_user_func_array(array($this->m_pageclass,$command_call),$parameter_call);
    }

    private function getPageTree(){

        $con = new \SYSTEM\DB\Connection($this->m_dbinfo);
        $res = $con->query('SELECT * FROM '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\PAGETable::NAME_PG : \SYSTEM\DBD\PAGETable::NAME_MYS).' ORDER BY "'.\SYSTEM\DBD\PAGETable::FIELD_ID.'"');

        if(!$res){
            throw new \SYSTEM\LOG\ERROR("Database Error ".  pg_last_error());}

        $result = array();
        while($row = $res->next()){
            $result[] = $row;}

        return $result;                
    }
}