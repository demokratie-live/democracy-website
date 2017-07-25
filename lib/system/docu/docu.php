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
 * Docu Class provided by System to register docu_packages.
 */
class docu {
    /** array Variable to store all registred docu_package classes */
    private static $docu_packages = array();
    
    /**
     * Register a docu package
     *
     * @param string $docu_package Classname of Docu Package to be registered
     * @return null Returns null.
     */
    public static function register($docu_package){
        array_push(self::$docu_packages,$docu_package);}
        
    /**
     * Get all registered docu packages
     *
     * @return array Returns array with all registered docu package class names.
     */
    public static function getAll(){
        return self::$docu_packages;}
    
    /**
     * Get a specific docu package by classname
     *
     * @param string $id Class name of the package to be found
     * @return array Returns the specific config or throws an Error.
     */
    public static function get($id){
        foreach(self::$docu_packages as $package){
            if($package == $id){
                return \call_user_func($package.'::get_config');}}
        throw new \SYSTEM\LOG\ERROR('Docu Package with classname "'.$id.'" not found.');
    }
    
    /**
     * Generate HTML Docu by docu classname
     *
     * @param string $id Classname of Docu Package to generated
     * @return array Returns array with logs.
     */
    public static function generate($id){
        \LIB\lib_phpdocumentor::php();
        $config = \SYSTEM\DOCU\docu::get($id);
        return \phpdocumentor::run( $config['inpath'],
                                    $config['outpath'],
                                    $config['cachepath'],
                                    $config['ignore'],
                                    $config['title'],
                                    $config['sourcecode'],
                                    $config['parseprivate']);
    }
    
    /**
     * Generate Markdown Docu by docu classname
     *
     * @param string $id Classname of Docu Package to generated
     * @return array Returns array with logs.
     */
    public static function generate_md($id){
        \LIB\lib_phpdoc_md::php();
        $config = \SYSTEM\DOCU\docu::get($id);
        \phpdoc_md::run(    $config['inpath_md'],
                            $config['outpath_md']);
    }
}