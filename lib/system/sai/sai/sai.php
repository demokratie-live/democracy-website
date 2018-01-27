<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * sai Class provided by System to register and manage saimods
 */
class sai {
    /** string Classname of the Module which should be loaded at start */
    private static $module_start = '\SYSTEM\SAI\saistart_sys_sai';
    /** array Classnames of all registered Sai user Modules */
    private static $modules = array(); //only strings! 

    /**
     * Check if a given SaiModuleClass is valid
     *
     * @param string $module Classname of the Module to be checked
     * @return bool Returns true or false.
     */
    private static function check_module($module){
        if( !\class_exists($module) ||
            !\is_array($parents = \class_parents($module)) ||
            !\array_search('SYSTEM\SAI\sai_module', $parents)){
            return false;}
        return true;}    
    
    /**
     * Sets the Sai Startmodule
     *
     * @param string $module Classname of the Module to be Startmodule
     * @return null Returns null.
     */
    public static function register_start($module){
        if(!self::check_module($module)){
            throw new \SYSTEM\LOG\ERROR('Problem with your Sysmodule class: '.$module.'; it might not be available or inherits from the wrong class!');}
        self::$module_start = $module;}
    
    /**
     * Register a Sai Module
     *
     * @param string $module Classname of the Module
     * @return null Returns null.
     */
    public static function register($module){
        if(!self::check_module($module)){
            throw new \SYSTEM\LOG\ERROR('Problem with your Sysmodule class: '.$module.'; it might not be available or inherits from the wrong class!');}
        array_push(self::$modules,$module);}

    /**
     * Get the classname of the Startmodule
     *
     * @return string Returns classname of the Startmodule.
     */
    public static function getStartModule(){
        return self::$module_start;}
        
    /**
     * Get all classnames of the registered user saimods
     *
     * @return array Returns array with classname of the registered Modules.
     */
    public static function getModules(){
        return self::$modules;}
                
    /**
     * Get all classnames of all the registered saimods
     *
     * @return array Returns array with classname of all the registered Modules.
     */
    public static function getAllModules(){
        return array_merge(self::$modules,array(self::$module_start));}
}