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
 * Cache Class provided by System for caching in the Database.
 */
class cache {
    /**
     * Get Data from Cache
     *
     * @param int $cache Cache Group to query
     * @param sha1 $ident String Identifier for the cached Content
     * @param bool $header Send Header
     * @return mixed Returns the requested Cache Content or NULL
     */
    public static function get($cache, $ident,$header = false){
        $result = \SYSTEM\SQL\SYS_CACHE_CHECK::Q1(array($cache,$ident));
        if(!$result){
            return NULL;}
        if(!file_exists($result['data'])){
            return NULL;}    
        
        if($header){
            if(\SYSTEM\HEADER::available($result['type'])){
                call_user_func('\SYSTEM\HEADER::'.$result['type']);
            }else{
                \SYSTEM\HEADER::FILE($ident);}
            header("Last-Modified: " . gmdate('D, d M Y H:i:s \G\M\T', filemtime($result['data'])));
        }
        return \file_get_contents($result['data']);
    }
    
    /**
     * Put Data into the Cache
     *
     * @param int $cache Cache Group to put Data to
     * @param sha1 $ident String Identifier for the Content
     * @param string $type String representing the Header-Type which will be sent with the content eg. JS for javascript
     * @param string $data Content to be cached
     * @param bool $fail_on_exist Fail on existing record
     * @return mixed Returns the cached Content or NULL
     */
    public static function put($cache, $ident, $type, $data, $fail_on_exist = false){        
        if(($fail_on_exist && self::get($cache,$ident) != NULL)){
            return NULL;}
        
        $path = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_CACHE).$ident;
            
        $file = \fopen($path, "w");
        \fwrite($file, $data);
        \fclose($file);    
        
        $result = \SYSTEM\SQL\SYS_CACHE_PUT::Q1(array($cache,$ident, $type, $path));                
        return $result ? $data : NULL;
    }
    
    /**
     * Delete Data from Cache
     *
     * @param int $cache Cache Group to delete Data from
     * @param sha1 $ident String Identifier for the Content
     * @return bool Returns boolean if successful or not
     */
    public static function del($cache, $ident){
        $result = \SYSTEM\SQL\SYS_CACHE_DELETE::Q1(array($cache,$ident));                
        return $result ? true : false;}
}