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
    public static function CALL(\Exception $E, $thrown){
        try{
            if(\property_exists(get_class($E), 'logged') && $E->logged){                
                return false;} //alrdy logged(this prevents proper thrown value for every system exception)
            $result = \SYSTEM\SQL\SYS_LOG_INSERT::QI(array(
                                                    get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                    getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),
                                                    $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                    array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                    array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                    ($user = \SYSTEM\SECURITY\security::getUser()) ? $user->id : null,$thrown ? 1 : 0));
            
            if(\property_exists(get_class($E), 'logged')){
                $E->logged = true;} //we just did log
        } catch (\Exception $E){
            //Dump the Error
            echo \SYSTEM\LOG\JsonResult::toString((array)$E);
            return false;} //Error -> Ignore
        
        return false; //We just log and do not handle the error!
    }    
}