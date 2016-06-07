<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\DOCU
 */
namespace SYSTEM\DOCU;

/**
 * Docu Class provided by System to register phpdocumentor configs.
 */
class docu {
    /** array Variable to store all registred phpdocconfigs */
    private static $phpdocconfigs = array();
    
    /**
     * Register a phpdocconfig
     *
     * @param array $phpdocconfig Config to be registered
     * @return null Returns null.
     */
    public static function register($phpdocconfig){
        array_push(self::$phpdocconfigs,$phpdocconfig);}
        
    /**
     * Get all registered phpdocconfigs
     *
     * @return array Returns array with all registered phpdocconfigs.
     */
    public static function getAll(){
        return self::$phpdocconfigs;}
    
    /**
     * Get a specific phpdocconfig by id
     *
     * @param string $id Phpdocconfig id to be found
     * @return array Returns the specific config or throws an Error.
     */
    public static function get($id){
        foreach(self::$phpdocconfigs as $config){
            if($config['id'] == $id){
                return $config;}}
        throw new ERROR('PhpDocConfig for id '.$id.' not found.');
    }
}