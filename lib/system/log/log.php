<?php
namespace SYSTEM\LOG;

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
        register_shutdown_function( "\SYSTEM\LOG\log::__shutdown_handler" );
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
        return self::call_handlers(new \ErrorException($message, 1, $code, $file, $line) ,$thrown);}

    public static function __shutdown_handler($thrown = true) {                
        if( ($error = error_get_last()) !== NULL && !$error['type'] === E_DEPRECATED) { //http://www.dreamincode.net/forums/topic/284506-having-trouble-supressing-magic-quotes-gpc-fatal-errors/
          return self::call_handlers(new \ErrorException($error["message"], 1, $error["type"],$error["file"],$error["line"]) ,$thrown);}                 
    }
}

