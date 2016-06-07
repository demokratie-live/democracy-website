<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\CACHE
 */
namespace SYSTEM\CACHE;

/**
 * SCSS Cache Class provided by System for compiling and caching SCSS in the Database.
 */
class cache_scss {
    /** int Cache ID for SCSS cache */
    const CACHE_SCSS = 1;
    
    /**
     * Put Data into the Cache
     *
     * @param sha1 $file Filepath of the Content
     * @param int $data Data to cache
     * @return mixed Returns the cached Cache Content or NULL
     */
    public static function put($file,$data){
        return \SYSTEM\CACHE\cache::put(self::CACHE_SCSS, self::ident($file), 'CSS', $data);}
        
    /**
     * Get Data from Cache
     *
     * @param sha1 $file Filepath for the cached Content
     * @param bool $header Send Header
     * @return mixed Returns the requested Cache Content or NULL
     */
    public static function get($file,$header = false){
        return \SYSTEM\CACHE\cache::get(self::CACHE_SCSS,  self::ident($file),$header);}
    /**
     * Calculate Ident for a File
     *
     * @param string $file Filepath to be cached
     * @return sha1 Returns the requested Ident
     */
    public static function ident($file){
        return sha1($file.';'.filemtime($file));}
        
    /**
     * Calculate URL for a File
     *
     * @param array $file Filepath to be cached
     * @return url Returns the requested Cache-URL
     */
    public static function url($file){
        if(!\SYSTEM\CACHE\cache_scss::get($file->SERVERPATH())){
            \LIB\lib_scssphp::php();
            \SYSTEM\CACHE\cache_scss::put($file->SERVERPATH(), (new \Leafo\ScssPhp\Compiler())->compile(file_get_contents($file->SERVERPATH())));}
        return './api.php?call=cache&id='.self::CACHE_SCSS.'&ident='.self::ident($file->SERVERPATH());
    }
}