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
 * File Cache Class provided by System for hiding Filepaths on the Server.
 */
class cache_filemask {
    /** int Cache ID for Filemask cache */
    const CACHE_FILEMASK = 12;
    
    /**
     * Put Data into the Cache
     * Remark: Saves only the path into the Cache, not the File itself
     *
     * @param sha1 $file String Filepath of Content
     * @return mixed Returns the cached Cache Content or NULL
     */
    public static function put($file){
        $ext = pathinfo($file);
        $ext = strtoupper(array_key_exists('extension', $ext) ? $ext['extension'] : '');
        return \SYSTEM\CACHE\cache::put(self::CACHE_FILEMASK, self::ident($file), $ext ,file_get_contents($file));}
        
    /**
     * Get Data from Cache
     *
     * @param sha1 $ident String Identifier for the cached Content
     * @param bool $header Send Header
     * @return mixed Returns the requested Cache Content or NULL
     */
    public static function get($ident,$header = false){
        return \SYSTEM\CACHE\cache::get(self::CACHE_FILEMASK, $ident,$header);}
        
    /**
     * Calculate Ident for a File
     *
     * @param array $file Filepath to be cached
     * @return sha1 Returns the requested Ident
     */
    public static function ident($file){
        return sha1($file);}
}