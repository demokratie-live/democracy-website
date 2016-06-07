<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\CONFIG
 */
namespace SYSTEM\CONFIG;

/**
 * Config Class provided by System for configuration of the System Environment.
 */
class config {
    /** array Holding all the Config Data */
    private static $config;
    
    /**
     * Get Config Setting
     *
     * @param int $config_id Config ID to be retrieved
     * @return mixed Returns the requested Config Content or NULL
     */
    public static function get($config_id){
        if( !isset(self::$config) ||
            !is_array(self::$config) ||
            !array_key_exists($config_id, self::$config)){
            return NULL;}
        return self::$config[$config_id];
    }
    
    /**
     * Set Config Setting
     *
     * @param int $config_id Config ID to be written
     * @param mixed $value Config Value to be written
     * @return NULL Returns NULL
     */
    public static function set($config_id, $value){
        if( !isset(self::$config) ||
            !is_array(self::$config)){
            self::$config = array();}
        self::$config[$config_id] = $value;}
    
    /**
     * Set Array of Config Settings
     *
     * @param array $id_value_array Array containing Config IDs as Key and Value as Value to that Key. array( array(ID, VALUE), array(ID, VALUE))
     * @return NULL Returns NULL
     */
    public static function setArray($id_value_array){
        foreach($id_value_array as $v){
            self::set($v[0], $v[1]);}}
}