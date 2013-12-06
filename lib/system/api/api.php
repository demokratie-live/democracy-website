<?php
namespace SYSTEM\API;

class api {
    const ROOT_PARENTID     = -1;
    const DEFAULT_GROUP     = 0;
    const DEFAULT_STRICT    = true;
    const DEFAULT_DEFAULT   = false;    
        
    public static function run( $verifyclassname,$apiclassname,
                                $params,$group = self::DEFAULT_GROUP,
                                $strict = self::DEFAULT_STRICT,$default = self::DEFAULT_DEFAULT){
        //Verify Class
        if(!class_exists($verifyclassname)){
            throw new \SYSTEM\LOG\ERROR("Verify Class given to the api does not exist: '".$verifyclassname."'");}
        
        //API Class
        if(!class_exists($apiclassname)){
            throw new \SYSTEM\LOG\ERROR("API Class given to the api does not exist: '".$apiclassname."'");}
            
        //check parameters
        if( !isset($params) || !is_array($params) || count($params) <= 0){
            return self::do_default($default, $apiclassname);} //throws    
            
        //Get the Databasetree
        $tree = self::getApiTree($group); //throws                 
            
        //Commands
        $commands = self::do_commands($params, $tree);          
        if(count($commands) <= 0){            
            return self::do_default($default, $apiclassname);} //throws
            
        //Parameters        
        $parentid = $commands[count($commands)-1][0];
        $parentid = $parentid[\SYSTEM\DBD\APITable::FIELD_ID];
        $parameters = self::do_parameters($params, $tree, $parentid, $commands[count($commands)-1][1],$verifyclassname); //throws
        
        //Opt Parameters        
        $parentid = $commands[count($commands)-1][0];
        $parentid = $parentid[\SYSTEM\DBD\APITable::FIELD_ID];
        $parameters_opt = self::do_parameters_opt($params, $tree, $parentid, $commands[count($commands)-1][1],$verifyclassname); //throws                      
        
        //strict check
        self::do_strict($strict, $params, $parameters, $commands, $parameters_opt); //throws

        //Function Name
        $call_funcname = self::do_func_name($commands); //throws

        //Function Parameters
        $call_funcparam = self::do_func_params($parameters, $parameters_opt);

        //Does function exist?
        if(!\method_exists($apiclassname, $call_funcname)){
            return self::do_default($default, $apiclassname, $call_funcname);} //throws

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

        if(!isset($result) || !is_array($result) || count($result) <= 0){
            throw new \SYSTEM\LOG\ERROR("Database Tree for Api empty - cannot proced! GROUP: ".$group);}
            
        return $result;
    }
    
    private static function do_default($default, $apiclassname, $call_funcname = null){
        if($default){ //should we call the default function or throw an error?
            return \call_user_func(array($apiclassname,'default_page'));}        
        if($call_funcname == null){
            throw new \SYSTEM\LOG\ERROR("No call given for the api");}            
        throw new \SYSTEM\LOG\ERROR("API call is not implemented in API: ".$call_funcname);
    }
    
    private static function do_strict($strict, $params, $parameters, $commands, $parameters_opt){
        if( $strict &&
            count($params) != (count($parameters) + count($commands) + count($parameters_opt)) ){
            throw new \SYSTEM\LOG\ERROR(    'Unhandled or misshandled parameters - api query is invalid'.
                                            '; given: '.count($params).
                                            '; req_command: '.count($commands).
                                            '; req_param: '.count($parameters).                                            
                                            '; opt_param: '.count($parameters_opt).
                                            '; url: ' .$_SERVER["REQUEST_URI"]);}
    }
    
    private static function do_commands($params,$tree){
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
            
        return $commands;
    }
    
    private static function do_parameters($params,$tree,$parentid,$lastcommandvalue,$verifyclassname){
        $parameters = array();        
        foreach($tree as $item){
            if( intval($item[\SYSTEM\DBD\APITable::FIELD_TYPE]) == \SYSTEM\DBD\APITable::VALUE_TYPE_PARAM &&
                intval($item[\SYSTEM\DBD\APITable::FIELD_PARENTID]) == $parentid){
                
                //check parent value
                if( isset($item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $lastcommandvalue != $item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]){
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
        
        return $parameters;
    }
    
    private static function do_parameters_opt($params,$tree,$parentid,$lastcommandvalue,$verifyclassname){
        $parameters_opt = array();
        foreach($tree as $item){
            if( intval($item[\SYSTEM\DBD\APITable::FIELD_TYPE]) == \SYSTEM\DBD\APITable::VALUE_TYPE_PARAM_OPT &&
                intval($item[\SYSTEM\DBD\APITable::FIELD_PARENTID]) == $parentid){
                
                //check parent value
                if( isset($item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]) &&
                    $lastcommandvalue != $item[\SYSTEM\DBD\APITable::FIELD_PARENTVALUE]){
                    continue;}

                //all parameters are NOT required - just continue
                if(!isset($params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    continue;}

                //verify parameter
                if( !method_exists($verifyclassname, $item[\SYSTEM\DBD\APITable::FIELD_VERIFY]) ||                    
                    !call_user_func(array($verifyclassname,$item[\SYSTEM\DBD\APITable::FIELD_VERIFY]),$params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\DBD\APITable::FIELD_NAME].' Verifier: '.$item[\SYSTEM\DBD\APITable::FIELD_VERIFY]);}

                $parameters_opt[] = array($item, $params[$item[\SYSTEM\DBD\APITable::FIELD_NAME]]);
            }
        }
        
        return $parameters_opt;
    }
    
    private static function do_func_name($commands){
        $call_funcname = '';       
        foreach($commands as $com){                        
            if(!\preg_match('^[0-9A-Za-z_]+$^', $com[1])){                
                throw new \SYSTEM\LOG\ERROR('Call Command can only have letters! command: '.$com[0]['name'].'; value: '.$com[1]);}

            if($com[0][\SYSTEM\DBD\APITable::FIELD_TYPE] == \SYSTEM\DBD\APITable::VALUE_TYPE_COMMAND_FLAG){
                $call_funcname .= '_flag_'.$com[0][\SYSTEM\DBD\APITable::FIELD_NAME];
            } else {
                $call_funcname .= '_'.$com[0][\SYSTEM\DBD\APITable::FIELD_NAME].'_'.\strtolower($com[1]);}
        }
        $call_funcname = substr($call_funcname, 1); //strip leading _
        
        return $call_funcname;
    }
    
    private static function do_func_params($parameters,$parameters_opt){
        $call_funcparam = array();
        foreach($parameters as $param){
            $call_funcparam[] = $param[1];}
            
        //Optional Function Parameters        
        foreach($parameters_opt as $param){
            $call_funcparam[] = $param[1];}
            
        return $call_funcparam;
    }
}