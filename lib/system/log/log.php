<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\LOG
 */
namespace SYSTEM\LOG;

/**
 * Log Class provided by System to manage log handlers.
 */
class log {
    /** string Variable to store hander function call name */
    const HANDLER_FUNC_CALL = 'CALL';
    
    /** array Variable to store all registred log handlers */
    private static $handlers  = array();
    
    /**
     * Register a Log Handler
     *
     * @param class $handler Classname of the handler to be registered
     * @return null Returns null.
     */
    public static function registerHandler($handler){       
        if( !class_exists($handler) ||
            !\method_exists($handler,self::HANDLER_FUNC_CALL)){            
             die("You registered an invalid Errorhandler!");}        
        self::$handlers[] = $handler;
        
        set_error_handler           ('\SYSTEM\LOG\log::__error_handler');
        set_exception_handler       ('\SYSTEM\LOG\log::__exception_handler');
        register_shutdown_function  ('\SYSTEM\LOG\log::__shutdown_handler' );                
        //ob_start                    ('\SYSTEM\LOG\log::__fatal_error_handler');
    }
    
    /**
     * Call handlers function upon error
     *
     * @param \Exception $E Thrown Execption to be handled
     * @param bool $thrown Was the Exception thrown?
     * @return bool Returns true or false.
     */
    private static function call_handlers($E, $thrown = true){                  
        foreach(self::$handlers as $handler){                        
            if( \call_user_func_array(array($handler,self::HANDLER_FUNC_CALL),array($E, $thrown))){                
                return true;}}                    
        return false;}    
    
    /**
     * Exception Handler for System-log handling
     *
     * @param \Exception $E Thrown Execption to be handled
     * @param bool $thrown Was the Exception thrown?
     * @return bool Returns true or false depending on thrown
     */
    public static function __exception_handler($E, $thrown = true){        
        return self::call_handlers($E, $thrown) && $thrown;}
    
    /**
     * Error Handler for System-log handling
     *
     * @param int $code Errorcode
     * @param string $message Error Message
     * @param string $file Error File
     * @param string $line Error File-Line
     * @param bool $thrown Was the Error thrown?
     * @return bool Returns true or false
     */
    public static function __error_handler($code, $message, $file, $line, $thrown = true){        
        return self::call_handlers(new \SYSTEM\LOG\ERROR_EXCEPTION($message, 1, $code, $file, $line) ,$thrown);}

    /**
     * Shutdown Handler for System-log handling
     *
     * @param bool $thrown Was the Error thrown?
     * @return bool Returns true or false
     */
    public static function __shutdown_handler($thrown = true) {                        
        if( ($error = error_get_last()) !== NULL && !$error['type'] === E_DEPRECATED) { //http://www.dreamincode.net/forums/topic/284506-having-trouble-supressing-magic-quotes-gpc-fatal-errors/
          return self::call_handlers(new \SYSTEM\LOG\SHUTDOWN_EXCEPTION($error["message"], 1, $error["type"],$error["file"],$error["line"]) ,$thrown);}}
    
    /**
     * Fatal Error Handler for System-log handling
     * (unused - experimental)
     *
     * @param string $bufferContent Website contens before sent to user
     * @param bool $thrown Was the Error thrown?
     * @return string Returns the buffercontent or an json error.
     */
    public static function __fatal_error_handler($bufferContent, $thrown = true){        
        if( ($error = error_get_last()) !== NULL && !$error['type'] === E_DEPRECATED){ //seams like we cannot call anything but core stuff
            $result = array('querytime' => 0, 'status' => false, 'result' => $error);
            header('Access-Control-Allow-Origin: *');//allow cross domain calls
            header('content-type: application/json');            
            return json_encode($result);}
        return $bufferContent;
    }        
}