<?php
namespace SYSTEM\LOG;

//ini_set('error_prepend_string', '{querytime: 0.0, status: false, result: { class: "FatalError",message: "');
//ini_set('error_append_string', '", code: 1, file: "unknown", line: 0, trace: }}');

class log {
    const HANDLER_FUNC_MASK = 'MASK';
    const HANDLER_FUNC_CALL = 'CALL';
    
    private static $handlers  = array();
    
    //$handler = string with classname
    public static function registerHandler($handler){       
        if( !class_exists($handler) ||
            !\method_exists($handler,self::HANDLER_FUNC_MASK) ||
            !\method_exists($handler,self::HANDLER_FUNC_CALL)){            
             die("You registered an invalid Errorhandler!");}        
        self::$handlers[] = $handler;
        
        set_error_handler('\SYSTEM\LOG\log::__error_handler');
        set_exception_handler('\SYSTEM\LOG\log::__exception_handler');
        register_shutdown_function( '\SYSTEM\LOG\log::__shutdown_handler' );
        
        ini_set('error_prepend_string', '<phpfatalerror>');
        ini_set('error_append_string', '</phpfatalerror>');
        ob_start('\SYSTEM\LOG\log::__fatal_error_handler');
    }
    
    private static function call_handlers(\Exception $E, $thrown = true){                  
        foreach(self::$handlers as $handler){            
            if( ((\call_user_func(array($handler,self::HANDLER_FUNC_MASK)) & $E->getCode())) &&
                \call_user_func_array(array($handler,self::HANDLER_FUNC_CALL),array($E, $thrown))){                                
                return true;}            
        }                    
        return false;        
    }    
    
    public static function __exception_handler(\Exception $E, $thrown = true){        
        return self::call_handlers($E, $thrown) && $thrown;}
    
    public static function __error_handler($code, $message, $file, $line, $thrown = true){        
        return self::call_handlers(new \SYSTEM\LOG\ErrorException($message, 1, $code, $file, $line) ,$thrown);}

    public static function __shutdown_handler($thrown = true) {                        
        if( ($error = error_get_last()) !== NULL && !$error['type'] === E_DEPRECATED) { //http://www.dreamincode.net/forums/topic/284506-having-trouble-supressing-magic-quotes-gpc-fatal-errors/
          return self::call_handlers(new \SYSTEM\LOG\ShutdownException($error["message"], 1, $error["type"],$error["file"],$error["line"]) ,$thrown);}
    }
    
    public static function __fatal_error_handler($bufferContent, $thrown = true){
        $errors    = array();        
        if ( preg_match('|<phpfatalerror>.*</phpfatalerror>|s', $bufferContent, &$errors) ){
            $error = strip_tags($errors[0]);
            $error = substr($error,1,strlen($error)-2);            
            $file = substr($error,strpos($error,' in ')+5,strpos($error,' on ')-5-strpos($error,' in '));
            $line = intval(substr($error,strpos($error,' line ')+6));
            $error = substr($error,0,strpos($error,' in '));                    
            return \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\ShutdownException($error,1,1,$file,$line));}
        return $bufferContent;
    }        
}

