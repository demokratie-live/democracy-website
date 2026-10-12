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
 * Error handler Class provided by System to log to the database.
 * Register this before every other handler, cuz this will need to handle every single error.
 */
class error_handler_dbwriter implements \SYSTEM\LOG\error_handler {
    /**
     * Call function to handle exceptions
     *
     * @param \Exception $E Thrown Execption to be handled
     * @param bool $thrown Was the Exception thrown?
     * @return bool Returns true or false.
     */
    public static function CALL($E, $thrown){
        try{
            $result = \SYSTEM\SQL\SYS_LOG_INSERT::QI(array(
                                                    get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                    getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),
                                                    $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                    array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                    array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                    ($user = \SYSTEM\SECURITY\security::getUser()) ? $user->id : null,$thrown ? 1 : 0));
            if(!\property_exists(get_class($E), 'do_not_todo_log')){
                self::todo_exception($E,false);}
        } catch (\Exception $E){
            return false;} //Error -> Ignore
        
        return false; //We just log and do not handle the error!
    }
    
    /**
     * Save a Exception as ToDo in the Database
     * This is used as Errorhandler in some form.
     * 
     * @param \Exception $E Exception to be saved
     * @param bool $thrown Was the Exception thrown?
     * @param int $type Type of the Todo(Exception)
     * @return bool Returns false
     */
    public static function todo_exception($E, $thrown, $type = \SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION){
        try{
            if(\property_exists(get_class($E), 'todo_logged') && $E->todo_logged){                
                return false;} //alrdy logged(this prevents proper thrown value for every system exception)
            \SYSTEM\SQL\SYS_LOG_TODO_INSERT::Q1(array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                        getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),date('Y-m-d H:i:s', microtime(true)),
                                                        $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                        array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                        array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                        ($user = \SYSTEM\SECURITY\security::getUser()) ? $user->id : null,$thrown ? 1 : 0,$E->getMessage(),$type));
            if(\property_exists(get_class($E), 'logged')){
                $E->todo_logged = true;} //we just did log
        } catch (\Exception $E){return false;} //Error -> Ignore
        return false; //We just log and do not handle the error!
    }
}