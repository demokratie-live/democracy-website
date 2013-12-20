<?php

namespace SYSTEM\LOG;

class JsonResult extends \SYSTEM\LOG\AbstractResult {

    const JSONRESULT_OK     = true;
    const JSONRESULT_ERROR  = false;
	
    public static function toString($json_array, $status = self::JSONRESULT_OK, $start_time = NULL){        

        if($start_time == NULL){
            $start_time = \SYSTEM\time::getStartTime();}
        
        $json = array();        
        $json['querytime']  = round(microtime(true) - $start_time,5);
        $json['status']     = $status;
        $json['result']     = $json_array;
        
        if(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT) == \SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT_MSGPACK){
            //send Header
            \SYSTEM\HEADER::JSON();
            
            return msgpack_pack($json);            
        } else {
            //send Header
            \SYSTEM\HEADER::JSON();

            return json_encode($json);
        }
    }

    //Return Exception as string
    public static function error(\Exception $e){        
        $error = array();        
        
	$error['class']     = get_class($e);
	$error['message']   = $e->getMessage();
	$error['code']      = $e->getCode();
	$error['file']      = $e->getFile();
	$error['line']      = $e->getLine();
	$error['trace']     = array_slice(explode('#', $e->getTraceAsString()), 1, -1);;        

        return self::toString($error, self::JSONRESULT_ERROR);
    }

    //Returns OK status
    public static function ok(){
        return self::toString(array());}
}