<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM
 */
namespace SYSTEM;

/**
 * autoload Class provided by System to Autoload Classes
 */
class autoload {
    /** array Registered Files Format array(class, namespace, file) */
    private static $files = array();
    /** array Registered Folders Format array(class, namespace, folder) */
    private static $folders = array();   
    /** string Registered Func Format array(namespace, func) */
    private static $func = array();

    /**
     * Get the Classname of a File by removing its extension and containing folders.
     *
     * @param string $file Filepath to be reduced to classname
     * @return string Returns classname
     */
    private static function getClassFromFile($file){
        $path_info = \pathinfo($file);
        return $path_info['filename'];}

    /**
     * Seperates Class and Namespace of a combined string.
     *
     * @param string $class Class including possible Namespaces
     * @return array Returns array(class,namespace).
     */
    private static function getClassNamespaceFromClass($class){
        $path_info = \pathinfo($class);
        $lastslash = \strrpos($class, '\\');
        //No Namespace found
        if(!$lastslash){
            return array($class, '');}

        //Namespace found
        return array(   \substr($class, $lastslash +1),
                        \substr($class, 0, $lastslash));
    }

    /**
     * The autoload Feature. Searches within all registered file, folders and
     * functions if a matching class can be found, respecting namespaces in the
     * process.
     *
     * @param string $class Class to be autoloaded
     * @param string $namespace Namespace of the Request
     * @return bool Returns true or false.
     */
    private static function autoload_($class, $namespace = ''){        
        foreach(self::$files as $file){
            if(strtolower($file[0]) == strtolower($class) &&
               strtolower($file[1]) == strtolower($namespace)){
                require_once $file[2];
                return true;}
        }        
        foreach(self::$folders as $folder){            
            if(strtolower($folder[0]) == strtolower($namespace) &&               
               is_file($folder[1].'/'.$class.'.php')){                
                require_once $folder[1].'/'.$class.'.php';
                return true;}
        }
        foreach(self::$func as $func){            
            if(strtolower($func[0]) == strtolower($namespace) && call_user_func($func[1],$class)){
                return true;}}
        return false;
    }

    /**
     * Registers a file to the autoload feature
     * The file has to be named class.php
     *
     * @param string $file Filepath to be autoloaded from
     * @param string $namespace Namespace of the File
     * @return null Returns null.
     */
    public static function registerFile($file, $namespace = ''){
        if(!is_file($file)){
            throw new \SYSTEM\LOG\ERROR('File not found on registerFile for Autoload: '.$file);}
        self::$files[] = array(self::getClassFromFile($file), $namespace, $file);
    }

    /**
     * Registers a folder to the autoload feature
     * All Classes within that Folder can  be loaded if
     * the file is named: class.php
     *
     * @param string $folder Folderpath to be autoloaded from
     * @param string $namespace Namespace of the Folder
     * @return null Returns null.
     */
    public static function registerFolder($folder, $namespace = ''){        
        if(!is_dir($folder)){
            throw new \SYSTEM\LOG\ERROR('Folder not found on registerFolder for Autoload: '.$folder);}
        self::$folders[] = array($namespace, $folder);
    }
    
    /**
     * Registers a function to the autoload feature
     * @todo Does this work? Is it useful?
     *
     * @param string $func Function to be "autoloaded"
     * @param string $namespace Namespace of the Function
     * @return null Returns null.
     */
    public static function registerFunc($func, $namespace = ''){        
        /*if(!_exists($func)){
            throw new \SYSTEM\LOG\ERROR('Function not found on registerFunc for Autoload: '.$func);}*/
        self::$func[] = array($namespace, $func);
    }
    
    /**
     * Registers the Autoload Handler against the PHP Environment
     *
     * @return null Returns null
     */
    public static function register_autoload(){
        spl_autoload_register('\SYSTEM\autoload::autoload');}

    /**
     * Autoloads a class. This function is registered against the PHP Environment.
     * It is called from PHP if a new class is required.
     *
     * @param string $class Class to be autoloaded
     * @return bool Returns true if successfull.
     */
    public static function autoload($class){        
        $classns = self::getClassNamespaceFromClass($class);
        if(!self::autoload_($classns[0],$classns[1]) || (!class_exists($class) && !interface_exists($class))){
            throw new \SYSTEM\LOG\ERROR("Class not found: ".$class);}
        return true;
    }
}