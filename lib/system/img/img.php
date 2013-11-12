<?php
namespace SYSTEM\IMG;

class img {    
    private static $imgfolders = array(); //only strings!   (catname => array(2.path 3.mask))*
    
    public static function registerFolder($path,$cat,$mask){
        self::$imgfolders[$cat] = array($path,$mask);}
    
    public static function get($cat,$id = null,$returnasjson = false){                
        if(!array_key_exists($cat, self::$imgfolders)){
            throw new \SYSTEM\LOG\ERROR("No matching Cat '".$cat."' found.");}
            
        $folder = self::getFolder(self::$imgfolders[$cat][0],self::$imgfolders[$cat][1]);
        if($id == null){
            return $returnasjson ? \SYSTEM\LOG\JsonResult::toString($folder) : $folder;}
        
        if(!in_array($id, $folder)){
             throw new \SYSTEM\LOG\ERROR("No matching ID '".$id."' found.");}
        
        \SYSTEM\HEADER::PNG();     
        return file_get_contents(self::$imgfolders[$cat][0].$id);        
    }
    
    public static function put($cat,$id,$contents){
        throw new \SYSTEM\LOG\ERROR("not implemented");}
    
    private static function getFolder($folder,$mask){
        $files = array();
        foreach (glob($folder.$mask) as $file) {
            $files[] = basename($file);}        
        return $files;
    }
    
}
