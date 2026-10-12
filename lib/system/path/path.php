<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\PATH
 */
namespace SYSTEM;

/**
 * Path Class provided by System to provide a unified path approach.
 */
class PATH {
    /** array Variable to store the base path object of the path object */
    private $basepath = NULL;
    /** array Variable to store the path of the path object */
    private $path = NULL;
    /** array Variable to store the sub path of the path object */
    private $subpath = NULL;
    
    /**
     * Construct the path with given basepath, path and subpath
     *
     * @param \SYSTEM\PATH $basepath Basepath
     * @param string $path Path
     * @param string $subpath Subpath
     */
    public function __construct(\SYSTEM\PATH $basepath, $path, $subpath = '') {
        $this->basepath = $basepath;
        $this->path = $path;
        $this->subpath = $subpath;
    }
    
    /**
     * Calculate Serverpath of the given pathobject
     *
     * @return string Serverpath of the given pathobject
     */
    public function SERVERPATH(){
        return $this->basepath->SERVERPATH().$this->path.$this->subpath;}
        
    /**
     * Calculate Webpath of the given pathobject
     *
     * @param bool $mask Mask the path using System cache functionality
     * @return string Webpath of the given pathobject
     */
    function WEBPATH($mask = true){
        if($mask){
            $path = $this->basepath->SERVERPATH().$this->path.$this->subpath;
            \SYSTEM\CACHE\cache_filemask::put($path);
            return './api.php?call=cache&id='.\SYSTEM\CACHE\cache_filemask::CACHE_FILEMASK.'&ident='.\SYSTEM\CACHE\cache_filemask::ident($path);
        } else {
            return $this->basepath->WEBPATH($mask).$this->path.$this->subpath;
        }
    }
}

/**
 * Root Path Class provided by System.
 */
class PROOT extends PATH {
    /**
     * Construct the path with given subpath
     *
     * @param string $subpath Subpath
     */
    public function __construct($subpath = '') {
        $this->subpath = $subpath;}
        
    /**
     * Calculate Serverpath of the root path object
     *
     * @return string Serverpath of the given pathobject
     */
    public function SERVERPATH(){
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH).$this->subpath;}
        
    /**
     * Calculate Webpath of the root path object
     *
     * @param bool $mask Mask the path using System cache functionality
     * @return string Webpath of the given pathobject
     */
    function WEBPATH($mask = true){
        if($mask){
            $path = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL).$this->subpath;
            \SYSTEM\CACHE\cache_filemask::put($path);
            return  './api.php?call=cache&id='.\SYSTEM\CACHE\cache_filemask::CACHE_FILEMASK.'&ident='.\SYSTEM\CACHE\cache_filemask::ident($path);
        } else {
            return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL).$this->subpath;
        }
    }
}

/**
 * System Path Class provided by System.
 */
class PSYSTEM extends PATH {
    /**
     * Construct the path with given subpath
     *
     * @param string $subpath Subpath
     */
    public function __construct($subpath = '') {
        parent::__construct(new \SYSTEM\PROOT(), \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL), $subpath);}
}

/**
 * System SAI Path Class provided by System.
 */
class PSAI extends PATH {
    /**
     * Construct the path with given subpath
     *
     * @param string $subpath Subpath
     */
    public function __construct($subpath = '') {
        parent::__construct(new \SYSTEM\PSYSTEM(), 'sai/', $subpath);}
}

/**
 * System Lib Path Class provided by System.
 */
class PLIB extends PATH {
    /**
     * Construct the path with given subpath
     *
     * @param string $subpath Subpath
     */
    public function __construct($subpath = '') {
        parent::__construct(new \SYSTEM\PSYSTEM(), 'lib/', $subpath);}
}

/**
 * System SQL Path Class provided by System.
 */
class PSQL extends PATH {
    /**
     * Construct the path with given subpath
     *
     * @param string $subpath Subpath
     */
    public function __construct($subpath = '') {
        parent::__construct(new \SYSTEM\PSYSTEM(), 'sql/', $subpath);}
}