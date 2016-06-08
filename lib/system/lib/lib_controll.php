<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\LIB
 */
namespace LIB;

/**
 * lib_controll Class provided by System to register libs.
 */
class lib_controll {
    /** array Variable to store all registred libs*/
    private static $libs = array();
    
    /**
     * Check if given class is a valid lib
     *
     * @param string $lib Lib Class
     * @return bool Returns true or false.
     */
    private static function check_lib($lib){
        if( !\class_exists($lib) ||
            !\is_array($parents = \class_parents($lib)) ||
            !\array_search('LIB\lib', $parents)){
            return false;}
        return true;}
    
    /**
     * Register given class as lib
     *
     * @param string $classname Lib Class
     * @return null Returns null.
     */
    public static function register($classname){
        if(!self::check_lib($classname)){
            throw new \SYSTEM\LOG\ERROR('Problem with your lib class: '.$classname.'; it might not be available or inherits from the wrong class!');}
        array_push(self::$libs,$classname);}
    
    /**
     * Get all registered libs available
     *
     * @return array Returns array with lib classes.
     */
    public static function all(){
        return self::$libs;}
}