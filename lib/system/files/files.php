<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\FILES
 */
namespace SYSTEM\FILES;

/**
 * Files Class provided by System to register folders and serve files.
 */
class files {
    /** array Variable to store all registred file folders*/
    private static $folders = array(); //only strings!   array(catname => path)

    /**
     * Register a filefolder
     *
     * @param string $path Path of the Folder
     * @param string $cat Category to register that folder to
     * @return null Returns null.
     */
    public static function registerFolder($path, $cat) {
        self::$folders[$cat] = $path;}

    /**
     * Retrieve a File
     *
     * @param string $cat Category to query or null
     * @param string $id File to query or null
     * @param bool $returnasjson Determines if you recieve Arrays or JSON results
     * @return mixed Returns List of Folders if cat is null, List of Files of id is null or Streams the requested File.
     */
    public static function get($cat = null, $id = null, $returnasjson = false) {
        if (!$cat) {
            return $returnasjson ? \SYSTEM\LOG\JsonResult::toString(self::$folders) : self::$folders;}
            
        if (!array_key_exists($cat, self::$folders)) {
            throw new \SYSTEM\LOG\ERROR("No matching Cat '" . $cat . "' found.");}

        $folder = self::getFolder(self::$folders[$cat]);
        if ($id == null) {
            return $returnasjson ? \SYSTEM\LOG\JsonResult::toString($folder) : $folder;}

        if (!in_array($id, $folder)) {
            throw new \SYSTEM\LOG\ERROR("No matching ID '" . $id . "' found.");}

        $ext = pathinfo(self::$folders[$cat].$id);
        $ext = strtoupper(array_key_exists('extension', $ext) ? $ext['extension'] : '');
        if(\SYSTEM\HEADER::available($ext)){
            call_user_func('\SYSTEM\HEADER::'.$ext);
        }else{
            \SYSTEM\HEADER::FILE($id);}
        \session_cache_limiter('private_no_expire');
        header("Last-Modified: " . gmdate('D, d M Y H:i:s \G\M\T', filemtime(self::$folders[$cat].$id)));
            
        //Allow Caching for all files
        header('Cache-Control: public;');
        
        if(!self::file_get_contents_chunked(self::$folders[$cat].$id,4096,function($chunk,&$handle,$iteration){echo $chunk;})){
            throw new \SYSTEM\LOG\ERROR("Could not transfere File.");}
        return;
    }
    
    /**
     * Move a uploaded File into a Directtory
     *
     * @param string $cat Category for the File
     * @param string $id ID for the File
     * @param ressource $contents Uploaded File Ressource
     * @return bool Returns true or false or throws an Error.
     */
    public static function put($cat, $id, $contents) {
        if (!array_key_exists($cat, self::$folders)) {
            throw new \SYSTEM\LOG\ERROR("No matching Cat '" . $cat . "' found.");}        
        return move_uploaded_file($contents, self::$folders[$cat].$id);        
    }
    
    /**
     * Delete a File
     *
     * @param string $cat Category of the File
     * @param string $id ID of the File
     * @return bool Returns true or false or throws an Error.
     */
    public static function delete($cat, $id) {        
        if (!array_key_exists($cat, self::$folders)) {
            throw new \SYSTEM\LOG\ERROR("No matching Cat '" . $cat . "' found.");}
        if(!file_exists(self::$folders[$cat].$id)){
            return false;}
        return unlink(self::$folders[$cat].$id); 
    }
    
    /**
     * Rename a File
     *
     * @param string $cat Category of the File
     * @param string $id ID of the File
     * @param string $newid ID of the renamed File
     * @return bool Returns true or false or throws an Error.
     */
    public static function rename($cat, $id, $newid) {        
        if (!array_key_exists($cat, self::$folders)) {
            throw new \SYSTEM\LOG\ERROR("No matching Cat '" . $cat . "' found.");}
        if(!file_exists(self::$folders[$cat].$id)){
            return false;}
        $ext = pathinfo(self::$folders[$cat].$id);
        return rename(self::$folders[$cat].$id, self::$folders[$cat].$newid.'.'.$ext['extension']); 
    }

    /**
     * Returns the contents of a Folder
     *
     * @param string $folder Path to the Folder
     * @return array Returns a list of Files in the directory.
     */
    private static function getFolder($folder) {
        $files = array();
        foreach (glob($folder.'*') as $file) {
            $files[] = basename($file);}
        return $files;
    }

    /**
     * Returns a URL for a File
     *
     * @param string $cat Category of the File
     * @param string $id ID of the File
     * @return string Returns URL of the File.
     */
    public static function getURL($cat, $id = null) {
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL) . 'api.php?call=files&cat=' . $cat . '&id=' . $id;}
   
    /**
     * Returns Chunks of a File
     * Callback: function($chunk,&$handle,$iteration)
     *
     * @param string $file Path of the File
     * @param int $chunk_size Size of the Chunks
     * @param function $callback Callback function which is called for every chunk
     * @return bool Returns true.
     */
    private static function file_get_contents_chunked($file,$chunk_size,$callback){
        $handle = fopen($file, "r");
        $i = 0;
        while (!feof($handle)){
            call_user_func_array($callback,array(fread($handle,$chunk_size),&$handle,$i));
            $i++;}
        fclose($handle);
        return true;
    }
}