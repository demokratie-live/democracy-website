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
 * JsonResult Class provided by System to return Data as JSON or MSGPACK.
 */
class JsonResult{
    /**
     * Retun JsonResult with data given by array
     *
     * @param array $json_array Data which should be included in the JSOn Result.
     * @param bool $status true or false depending on success
     * @param int $start_time To calculate Querytime - if Null System time is used.
     * @return string Returns json string.
     */
    public static function toString($json_array, $status = true, $start_time = NULL){
        if($start_time == NULL){
            $start_time = \SYSTEM\time::getStartTime();}
        
        $json = array();        
        $json['querytime']  = round(microtime(true) - $start_time,5);
        $json['status']     = $status;
        $json['result']     = $json_array;
        
        if(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT) == \SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT_MSGPACK){
            //send Header
            \SYSTEM\HEADER::JSON();
            
            if($json = msgpack_pack($json)){
                return $json;}
            throw new \SYSTEM\LOG\ERROR('MSGPack could not be encoded');
        } else {
            //send Header
            \SYSTEM\HEADER::JSON();
            
            if($json = json_encode($json)){
                return $json;}
            throw new \SYSTEM\LOG\ERROR('JSON could not be encoded');
        }
    }

    /**
     * Retun JsonResult for given Exception
     *
     * @param \Exception $e Exception to be convered.
     * @return string Returns json string.
     */
    public static function error(\Exception $e){        
        $error = array();        
	$error['class']     = get_class($e);
	$error['message']   = $e->getMessage();
	$error['code']      = $e->getCode();
	$error['file']      = $e->getFile();
	$error['line']      = $e->getLine();
	$error['trace']     = array_slice(explode('#', $e->getTraceAsString()), 1, -1);
        return self::toString($error, false);
    }

    /**
     * Retun JsonResult with success status
     *
     * @return string Returns json string.
     */
    public static function ok(){
        return self::toString(NULL);}
        
    /**
     * Retun JsonResult with failure status
     *
     * @return string Returns json string.
     */
    public static function fail(){
        return self::toString(NULL,false);}
}