<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     system_api
 */
namespace SYSTEM\API;

/**
 * API default verify Class for Parameter validation
 */
class verify {
    /**
     * Verify All - everything is allowed
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function ALL      ($param)    {return true;}
    
    /**
     * Verify UINT - Positive Integer excluding 0
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function UINT     ($param)    {return \is_numeric($param) ? ((int)$param > 0 ? true : false) : false;}
    
    /**
     * Verify UINT0 - Positive Integer including 0
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function UINT0    ($param)    {return \is_numeric($param) ? ((int)$param >= 0 ? true : false) : false;}
    
    /**
     * Verify INT - all integers
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function INT      ($param)    {return \is_numeric($param);}
    
    /**
     * Verify TIMEUNIX - unixtimestamp number
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function TIMEUNIX ($param)    {return \is_numeric($param) ? ((int)$param > 0 ? true : false) : false;}
    
    /**
     * Verify DATE - string parseable as date
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function DATE     ($param)    {return \strtotime($param);}
    
    /**
     * Verify STRING - allow every string - thats all
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function STRING   ($param)    {return \is_string($param);}
    
    /**
     * Verify BOOL - allow booleans
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function BOOL     ($param)    {return \is_bool($param) || $param == '0' || $param == '1';}
    
    /**
     * Verify FLOAT - every float value
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function FLOAT    ($param)    {return \is_float(\floatval($param));}
    
    /**
     * Verify JSON - JSON format check
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function JSON     ($param)    {return (self::ARY($param) || \json_decode(\stripslashes($param))) ? true : false;} //ary cuz when sent via direct json, all json is alrdy converted to an array.
    
    /**
     * Verify ARY - array check
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function ARY      ($param)    {return \is_array($param);}
    
    /**
     * Verify LANG - verify supported languages
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function LANG     ($param)    {return \SYSTEM\locale::isLang($param);}
    
    /**
     * Verify RESULT - verify possible resulttypes
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function RESULT   ($param)    {return ($param == 'json' || $param == 'msgpack');}
    
    /**
     * Verify EMAIL - verify email
     *
     * @param mixed $param Input Paramter
     * @return bool Returns boolean if the Value matches the type
     */
    public static function EMAIL    ($param)    {return filter_var($param, FILTER_VALIDATE_EMAIL);}
}