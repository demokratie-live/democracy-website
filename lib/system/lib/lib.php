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
 * Lib Class provided by System to define API to load libs.
 * @todo better abstraction model
 */
abstract class lib {
    /**
     * Call php lib include
     *
     * @return bool Returns true or false depending if lib could be loaded.
     */
    public static function php(){
        if(!\method_exists(static::get_class(), 'php_autoload')){
            throw new \SYSTEM\LOG\ERROR('Function php_autoload not implemented in '.static::get_class());}
        return static::php_autoload();}
    
    /**
     * Call css lib include
     *
     * @return string Returns path of the css lib to be included.
     */
    public static function css(){
         if(!\method_exists(static::get_class(), 'css_path')){
            throw new \SYSTEM\LOG\ERROR('Function css_path not implemented in '.static::get_class());}
        return static::css_path();}
        
    /**
     * Call js lib include
     *
     * @return string Returns path of the js lib to be included.
     */
    public static function js(){
         if(!\method_exists(static::get_class(), 'js_path')){
            throw new \SYSTEM\LOG\ERROR('Function js_path not implemented in '.static::get_class());}
        return static::js_path();}
        
    /**
     * Default Version for every lib if not overritten by derived class
     *
     * @return string Returns version string of the library.
     */
    public static function version(){
        return 'The library '.static::get_class().' did not specify a version';}
}