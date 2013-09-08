<?php
namespace SYSTEM\API;

class api {
    const ROOT_PARENTID = -1;
    const DEFAULT_GROUP = 0;
    public static function run($verifyclassname,$apiclassname,$params,$group = self::DEFAULT_GROUP,$strict = true,$default = false){
        //Verify Class
        if(!class_exists($verifyclassname)){
            throw new \SYSTEM\LOG\ERROR("Verify Class given to the api does not exist.");}
        
        //API Class
        if(!class_exists($apiclassname)){
            throw new \SYSTEM\LOG\ERROR("API Class given to the api does not exist.");}
            
        //check parameters
        if( !isset($params) || !is_array($params) || count($params) <= 0){
            if($default){                
                return \call_user_func(array($apiclassname,'default_page'));}            
            throw new \SYSTEM\LOG\ERROR("No call given for the api");}                
            
        //Get the Databasetree
        $tree = self::getApiTree($group);
        if(!isset($tree) || !is_array($tree) || count($tree) <= 0){
            throw new \SYSTEM\LOG\ERROR("Database Tree for Api empty - cannot proced! GROUP: ".$group);}                
            
        //Commands
        $commands = array();
        $parentid = self::ROOT_PARENTID;        
        foreach($tree as $item){             
            if( (intval($item[\SYSTEM\DBD\APITable::FIELD_TYPE]) == \SYSTEM\DBD\APITable::VALUE_TYPE_COMMAND ||
                 intval($item[\SYSTEM\DBD\APITable::FIELD_TYPE]) == \SYSTEM\DBD\APITable::VALUE_TYPE_COMMAND_FLAG) &&
                intval($item[\SYSTEM\DBD\APITable::FIELD_PARENTID]) == $parentid &&
                isset($params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                                
                //check parent value
                if( isset($item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;}
                
                $commands[] = array($item,$params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]]);
                $parentid = intval($item[\SYSTEM\DBD\APITable::FIELD_ID]);                
            }
        }                
        if(count($commands) <= 0){
            return \call_user_func(array($apiclassname,'default_page'));}
            
        //Parameters        
        $parameters = array();
        $parentid = $commands[count($commands)-1][0];
        $parentid = $parentid[\SYSTEM\DBD\APITable::FIELD_ID];
        foreach($tree as $item){
            if( intval($item[\SYSTEM\DBD\APITable::FIELD_TYPE]) == \SYSTEM\DBD\APITable::VALUE_TYPE_PARAM &&
                intval($item[\SYSTEM\DBD\APITable::FIELD_PARENTID]) == $parentid){
                
                //check parent value
                if( isset($item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;}

                //all parameters are required
                if(!isset($params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter missing: '.$item[\SYSTEM\DBD\APITable::FIELD_NAME]);}

                //verify parameter
                if( !method_exists($verifyclassname, $item[\SYSTEM\DBD\APITable::FIELD_VERIFY]) ||
                    !call_user_func(array($verifyclassname,$item[\SYSTEM\DBD\APITable::FIELD_VERIFY]),$params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\DBD\APITable::FIELD_NAME].' Verifier: '.$item[\SYSTEM\DBD\APITable::FIELD_VERIFY]);}

                $parameters[] = array($item, $params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]]);
            }
        }
        
        //Opt Parameters
        $parameters_opt = array();
        $parentid = $commands[count($commands)-1][0];
        $parentid = $parentid[\SYSTEM\DBD\APITable::FIELD_ID];
        foreach($tree as $item){
            if( intval($item[\SYSTEM\DBD\APITable::FIELD_TYPE]) == \SYSTEM\DBD\APITable::VALUE_TYPE_PARAM_OPT &&
                intval($item[\SYSTEM\DBD\APITable::FIELD_PARENTID]) == $parentid){
                
                //check parent value
                if( isset($item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;}

                //all parameters are required
                if(!isset($params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter missing: '.$item[\SYSTEM\DBD\APITable::FIELD_NAME]);}

                //verify parameter
                if( !method_exists($verifyclassname, $item[\SYSTEM\DBD\APITable::FIELD_VERIFY]) ||
                    !$verifyclassname->$item[\SYSTEM\DBD\APITable::FIELD_VERIFY]($params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\DBD\APITable::FIELD_NAME].' Verifier: '.$item[\SYSTEM\DBD\APITable::FIELD_VERIFY]);}

                $parameters_opt[] = array($item, $params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]]);
            }
        }
        
        //strict check
        if( $strict &&
            count($params) != (count($parameters) + count($commands)) ){
            throw new \SYSTEM\LOG\ERROR('Unhandled or misshandled parameters - api query is invalid');}

        //Function Name
        $call_funcname = "";       
        foreach($commands as $com){                        
            if(!\preg_match('^[0-9A-Za-z_]+$^', $com[1])){
                throw new \SYSTEM\LOG\ERROR('Call Command can only have letters!');}

            if($com[0][\SYSTEM\DBD\APITable::FIELD_TYPE] == \SYSTEM\DBD\APITable::VALUE_TYPE_COMMAND_FLAG){
                $call_funcname .= '_flag_'.$com[0][\SYSTEM\DBD\APITable::FIELD_NAME];
            } else {
                $call_funcname .= '_'.$com[0][\SYSTEM\DBD\APITable::FIELD_NAME].'_'.\strtolower($com[1]);}
        }
        $call_funcname = substr($call_funcname, 1); //strip leading _

        //Function parameters
        $call_funcparam = array();
        foreach($parameters as $param){
            $call_funcparam[] = $param[1];}
            
        //Optional Function Parameters        
        foreach($parameters_opt as $param){
            $call_funcparam[] = $param[1];}

        //Does function exist
        if(!\method_exists($apiclassname, $call_funcname)){
            if($default){                
                return \call_user_func(array($apiclassname,'default_page'));}
            throw new \SYSTEM\LOG\ERROR("API call is not implemented in API: ".$call_funcname);}

        //Call Function            
        return \call_user_func_array(array($apiclassname,$call_funcname),$call_funcparam);
    }
    
    private static function getApiTree($group){        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){            
            $res = $con->query('SELECT * FROM '.\SYSTEM\DBD\APITable::NAME_PG .' WHERE "'.\SYSTEM\DBD\APITable::FIELD_GROUP.'" = '.$group.' ORDER BY "'.\SYSTEM\DBD\APITable::FIELD_ID.'"');
        } else {            
            $res = $con->query('SELECT * FROM '.\SYSTEM\DBD\APITable::NAME_MYS.' WHERE `'.\SYSTEM\DBD\APITable::FIELD_GROUP.'` = '.$group.' ORDER BY '.\SYSTEM\DBD\APITable::FIELD_ID);            
        }        

        if(!$res){
            throw new \SYSTEM\LOG\ERROR('Database Error '.pg_last_error($con));}

        $result = array();        
        while($row = $res->next()){
            $result[] = $row;}        

        return $result;
    }
}