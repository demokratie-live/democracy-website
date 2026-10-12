<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\API
 */
namespace SYSTEM\API;

/**
 * API Class provided by System for Smart API's.
 */
class api {
    /** int Root Node ID */
    const ROOT_PARENTID     = -1;
    /** int Default API Group */
    const DEFAULT_GROUP     = 0;
    /** bool Default parse strict setting */
    const DEFAULT_STRICT    = true;
    /** bool Default parse to default setting */
    const DEFAULT_DEFAULT   = false;    
    
    /**
     * Run the API Mechanism with your Data.
     *
     * @param string $verifyclassname Your class on which the parameter restriction is parsed upon
     * @param string $apiclassname Your class which provides your API
     * @param array $params Parameters given to the API
     * @param int $group API Group to be used to parse Call
     * @param bool $strict Parse the API in a strict way
     * @param bool $default Defaulting to default_page setting
     * @return mixed Returns your API result or an JSON Error
     */
    public static function run( $verifyclassname,$apiclassname,
                                $params,$group = self::DEFAULT_GROUP,
                                $strict = self::DEFAULT_STRICT,$default = self::DEFAULT_DEFAULT){
        //Verify Class
        if(!\class_exists($verifyclassname)){
            throw new \SYSTEM\LOG\ERROR("Verify Class given to the api does not exist: '".$verifyclassname."'");}
        
        //API Class
        if(!\class_exists($apiclassname)){
            throw new \SYSTEM\LOG\ERROR("API Class given to the api does not exist: '".$apiclassname."'");}
            
        //check parameters
        if( !isset($params) || !is_array($params) || count($params) <= 0){
            return self::do_default($default, $apiclassname);} //throws    
            
        //Get the Databasetree
        $tree = self::getApiTree($group); //throws
        
        $statics = self::do_statics($params, $tree, $apiclassname, $verifyclassname, $default); //throws
            
        //Commands
        $commands = self::do_commands($params, $tree);          
        if(count($commands) <= 0){      
            return self::do_default($default, $apiclassname);} //throws
            
        //Parameters        
        $parentid = $commands[count($commands)-1][0];
        $parentid = $parentid[\SYSTEM\SQL\system_api::FIELD_ID];
        $parameters = self::do_parameters($params, $tree, $parentid, $commands[count($commands)-1][1],$verifyclassname); //throws
        
        //Opt Parameters        
        $parentid = $commands[count($commands)-1][0];
        $parentid = $parentid[\SYSTEM\SQL\system_api::FIELD_ID];
        $parameters_opt = self::do_parameters_opt($params, $tree, $parentid, $commands[count($commands)-1][1],$verifyclassname); //throws                      
        
        //strict check
        self::do_strict($strict, $params, $statics, $commands, $parameters, $parameters_opt); //throws        

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
    
    /**
     * Internal API function to retrive the Databasetree for requested API
     *
     * @param int $group API Group to be read
     * @return array Array of API rules
     */
    private static function getApiTree($group){        
        $result = \SYSTEM\SQL\SYS_API_TREE::QA(array($group));
        if(!isset($result) || !is_array($result) || count($result) <= 0){
            throw new \SYSTEM\LOG\ERROR("Database Tree for Api empty - cannot proced! GROUP: ".$group);}
        return $result;
    }
    
    /**
     * Internal API function to parse statics for requested API
     *
     * @param array $params Array of Params given to the API
     * @param array $tree Array of Rules for given API
     * @param string $apiclassname Classname of the users API class
     * @param string $verifyclassname Classname of the users Verify Class
     * @param bool $default Defaulting to default_page setting
     * @return array Array of static API rules
     */
    private static function do_statics($params,$tree,$apiclassname,$verifyclassname,$default){
        $statics = array();
        $parentid = self::ROOT_PARENTID;        
        foreach($tree as $item){
            if( intval($item[\SYSTEM\SQL\system_api::FIELD_TYPE]) == \SYSTEM\SQL\system_api::VALUE_TYPE_STATIC &&
                intval($item[\SYSTEM\SQL\system_api::FIELD_PARENTID]) == $parentid &&
                isset($params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]])){
                
                $statics[] = array($item,$params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]]);
                $call_funcname = 'static_'.$item[\SYSTEM\SQL\system_api::FIELD_NAME];                
                
                //verify func
                if(!\method_exists($apiclassname, $call_funcname)){
                    return self::do_default($default, $apiclassname, $call_funcname);} //throws
                    
                //verify parameter
                if( !method_exists($verifyclassname, $item[\SYSTEM\SQL\system_api::FIELD_VERIFY]) ||
                    !call_user_func(array($verifyclassname,$item[\SYSTEM\SQL\system_api::FIELD_VERIFY]),$params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\SQL\system_api::FIELD_NAME].' Verifier: '.$item[\SYSTEM\SQL\system_api::FIELD_VERIFY]);}                        
                //throw new \SYSTEM\LOG\ERROR("yo ".$call_funcname.' '.$apiclassname);    
                \call_user_func_array(array($apiclassname,$call_funcname),array($params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]]));
            }
        }                        
            
        return $statics;
    }
    
    /**
     * Internal API function to parse default redirect for requested API
     *
     * @param bool $default Defaulting to default_page setting
     * @param string $apiclassname Classname of the users API class
     * @param string $call_funcname Functionname which was called
     * @return array Array of static API rules
     */
    private static function do_default($default, $apiclassname, $call_funcname = null){
        if($default){ //should we call the default function or throw an error?
            return \call_user_func(array($apiclassname,'default_page'));}        
        if($call_funcname == null){
            throw new \SYSTEM\LOG\ERROR("No call given for the api");}            
        throw new \SYSTEM\LOG\ERROR("API call is not implemented in API: ".$call_funcname);
    }
    
    /**
     * Internal API function to strict parse the API 
     *
     * @param bool $strict Strict settings
     * @param array $params Parameters given to the API
     * @param array $statics Array with API statics
     * @param array $commands Array with API commands
     * @param array $parameters Array with API parameters
     * @param array $parameters_opt Array with API optional parameters
     * @return null Returns nothing or throws an Strict Error
     */
    private static function do_strict($strict, $params, $statics, $commands, $parameters, $parameters_opt){
        if( $strict &&
            count($params) != (count($statics) + count($parameters) + count($commands) + count($parameters_opt))){            
            throw new \SYSTEM\LOG\ERROR(    'Unhandled or misshandled parameters - api query is invalid'.
                                            '; given: '.count($params).
                                            '; statics: '.count($statics).
                                            '; req_command: '.count($commands).
                                            '; req_param: '.count($parameters).                                            
                                            '; opt_param: '.count($parameters_opt).
                                            '; url: ' .$_SERVER["REQUEST_URI"]);}
    }
    
    /**
     * Internal API function to parse commands for requested API
     *
     * @param array $params Parameters given to the API
     * @param array $tree Array with API rules
     * @return array Returns array with parsed Commands
     */
    private static function do_commands($params,$tree){
        $commands = array();
        $parentid = self::ROOT_PARENTID;        
        foreach($tree as $item){             
            if( (intval($item[\SYSTEM\SQL\system_api::FIELD_TYPE]) == \SYSTEM\SQL\system_api::VALUE_TYPE_COMMAND ||
                 intval($item[\SYSTEM\SQL\system_api::FIELD_TYPE]) == \SYSTEM\SQL\system_api::VALUE_TYPE_COMMAND_FLAG) &&
                intval($item[\SYSTEM\SQL\system_api::FIELD_PARENTID]) == $parentid &&
                isset($params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]])){
                                
                //check parent value
                if( isset($item[\SYSTEM\SQL\system_api::FIELD_PARENTVALUE]) &&
                    $commands[count($commands)-1][1] != $item[\SYSTEM\SQL\system_api::FIELD_PARENTVALUE]){
                    continue;}
                
                $commands[] = array($item,$params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]]);
                $parentid = intval($item[\SYSTEM\SQL\system_api::FIELD_ID]);                
            }
        }                        
            
        return $commands;
    }
    
    /**
     * Internal API function to parse parameters for requested API
     *
     * @param array $params Parameters given to the API
     * @param array $tree Array with API rules
     * @param int $parentid Parentid of last Tree Element
     * @param string $lastcommandvalue Last value of last Command
     * @param string $verifyclassname Verify Class given to the API
     * @return array Returns array with parsed Parameters
     */
    private static function do_parameters($params,$tree,$parentid,$lastcommandvalue,$verifyclassname){
        $parameters = array();        
        foreach($tree as $item){
            if( intval($item[\SYSTEM\SQL\system_api::FIELD_TYPE]) == \SYSTEM\SQL\system_api::VALUE_TYPE_PARAM &&
                intval($item[\SYSTEM\SQL\system_api::FIELD_PARENTID]) == $parentid){
                
                //check parent value
                if( isset($item[\SYSTEM\SQL\system_api::FIELD_PARENTVALUE]) &&
                    $lastcommandvalue != $item[\SYSTEM\SQL\system_api::FIELD_PARENTVALUE]){
                    continue;}

                //all parameters are required
                if(!isset($params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter missing: '.$item[\SYSTEM\SQL\system_api::FIELD_NAME]);}

                //verify parameter
                if( !method_exists($verifyclassname, $item[\SYSTEM\SQL\system_api::FIELD_VERIFY]) ||
                    !call_user_func(array($verifyclassname,$item[\SYSTEM\SQL\system_api::FIELD_VERIFY]),$params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\SQL\system_api::FIELD_NAME].' Verifier: '.$item[\SYSTEM\SQL\system_api::FIELD_VERIFY]);}

                $parameters[] = array($item, $params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]]);
            }
        }
        
        return $parameters;
    }
    
    /**
     * Internal API function to parse optional parameters for requested API
     *
     * @param array $params Parameters given to the API
     * @param array $tree Array with API rules
     * @param int $parentid Parentid of last Tree Element
     * @param string $lastcommandvalue Last value of last Command
     * @param string $verifyclassname Verify Class given to the API
     * @return array Returns array with parsed optional Parameters
     */
    private static function do_parameters_opt($params,$tree,$parentid,$lastcommandvalue,$verifyclassname){
        $parameters_opt = array();
        foreach($tree as $item){
            if( intval($item[\SYSTEM\SQL\system_api::FIELD_TYPE]) == \SYSTEM\SQL\system_api::VALUE_TYPE_PARAM_OPT &&
                intval($item[\SYSTEM\SQL\system_api::FIELD_PARENTID]) == $parentid){
                
                //check parent value
                if( isset($item[\SYSTEM\SQL\system_api::FIELD_PARENTVALUE]) &&
                    $lastcommandvalue != $item[\SYSTEM\SQL\system_api::FIELD_PARENTVALUE]){
                    continue;}

                //all parameters are NOT required - just continue
                if(!isset($params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]])){
                    continue;}

                //verify parameter
                if( !method_exists($verifyclassname, $item[\SYSTEM\SQL\system_api::FIELD_VERIFY]) ||                    
                    !call_user_func(array($verifyclassname,$item[\SYSTEM\SQL\system_api::FIELD_VERIFY]),$params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]])){
                    throw new \SYSTEM\LOG\ERROR('Parameter type missmacht or Missing Verifier. Param: '.$item[\SYSTEM\SQL\system_api::FIELD_NAME].' Verifier: '.$item[\SYSTEM\SQL\system_api::FIELD_VERIFY]);}

                $parameters_opt[] = array($item, $params[$item[\SYSTEM\SQL\system_api::FIELD_NAME]]);
            }
        }
        
        return $parameters_opt;
    }
    
    /**
     * Internal API function to build function name for requested API
     *
     * @param array $commands Array of all Commands for the given API call
     * @return string Returns Function name
     */
    private static function do_func_name($commands){
        $call_funcname = '';       
        foreach($commands as $com){                        
            if(!\preg_match('^[0-9A-Za-z_]+$^', $com[1])){                
                throw new \SYSTEM\LOG\ERROR('Call Command can only have letters! command: '.$com[0]['name'].'; value: '.$com[1]);}

            if($com[0][\SYSTEM\SQL\system_api::FIELD_TYPE] == \SYSTEM\SQL\system_api::VALUE_TYPE_COMMAND_FLAG){
                $call_funcname .= '_flag_'.$com[0][\SYSTEM\SQL\system_api::FIELD_NAME];
            } else {
                $call_funcname .= '_'.$com[0][\SYSTEM\SQL\system_api::FIELD_NAME].'_'.\strtolower($com[1]);}
        }
        $call_funcname = substr($call_funcname, 1); //strip leading _
        
        return $call_funcname;
    }
    
    /**
     * Internal API function to build function paramters for requested API
     *
     * @param array $parameters Array of all Paramters for the given API call
     * @param array $parameters_opt Array of all optional Paramters for the given API call
     * @return array Returns array with Paramters
     */
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