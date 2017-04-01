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
 * JS Cache Class provided by System for caching JS in the Database.
 */
class cache_js {
    /** int Cache ID for JS cache */
    const CACHE_JS = 11;
    
    /**
     * Put Data into the Cache
     *
     * @param sha1 $ident String Identifier for the cached Content
     * @param int $data Data to cache
     * @return mixed Returns the cached Cache Content or NULL
     */
    public static function put($ident,$data){
        return \SYSTEM\CACHE\cache::put(self::CACHE_JS, $ident, 'JS', $data);}
        
    /**
     * Get Data from Cache
     *
     * @param sha1 $ident String Identifier for the cached Content
     * @param bool $header Send Header
     * @return mixed Returns the requested Cache Content or NULL
     */
    public static function get($ident,$header = false){
        return \SYSTEM\CACHE\cache::get(self::CACHE_JS, $ident,$header);}
        
    /**
     * Calculate Ident for a list of Files
     *
     * @param array $files List of Files to be cached into one Cacheentry
     * @return sha1 Returns the requested Ident
     */
    public static function ident($files){
        $ident = '';
        foreach($files as $f){
            $ident .= $f->SERVERPATH().';';}
        return sha1($ident);
    }
    
    /**
     * Calculate URL for a list of Files
     *
     * @param array $files List of Files to be cached into one Cacheentry
     * @return url Returns the requested Cache-URL
     */
    /*public static function url($files){
        $ident = self::ident($files);
        if(!\SYSTEM\CACHE\cache_js::get($ident)){
            \LIB\lib_minify::php();
            $minifier = new \MatthiasMullie\Minify\JS();
            foreach($files as $f){
                $minifier->add($f->SERVERPATH());}
            \SYSTEM\CACHE\cache_js::put($ident, $minifier->minify());}
        return './api.php?call=cache&id='.self::CACHE_JS.'&ident='.$ident;
    }*/
    
    /**
     * Minify JS files and calculate URL for it
     *
     * @param array $files List of Files to be cached into one Cacheentry
     * @return url Returns the requested Cache-URL
     */
    public static function minify($files){
        $ident = self::ident($files);
        if(!\SYSTEM\CACHE\cache_js::get($ident)){
            \LIB\lib_minify::php();
            $minifier = new \MatthiasMullie\Minify\JS();
            foreach($files as $f){
                $minifier->add($f->SERVERPATH());}
            \SYSTEM\CACHE\cache_js::put($ident, $minifier->minify());}
        return './cache/'.self::CACHE_JS.'/'.$ident;
    }
}