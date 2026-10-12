<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     LIB
 */
namespace LIB;

/**
 * lib_system Class provided by System to serve system.js and system.css library.
 */
class lib_system extends \LIB\lib_jscss{
    /**
     * Get Classname of the Library
     * 
     * @return string Returns classname
     */
    public static function get_class(){
        return self::class;}
        
    /**
     * Returns a Systempath Object to the js ressource of the Library
     * 
     * @return object Returns path object
     */
    public static function js_path(){
        return new \SYSTEM\PLIB('/system/lib/system.js');}
        
    /**
     * Returns a Systempath Object to the css ressource of the Library
     * 
     * @return object Returns path object
     */
    public static function css_path(){
        return new \SYSTEM\PLIB('/system/lib/system.css');}
        
    /**
     * Returns version string of the library
     * 
     * @return string Returns version string/html
     */
    public static function version(){
        return 'pre alpha';}
}