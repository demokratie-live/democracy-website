<?php
namespace SYSTEM\IMG;

class img {    
    private static $imgfolders = array(); //only strings!   (catname => array(2.path 3.mask))*
    
    public static function registerFolder($cat,$path,$mask){
        self::$imgfolders[$cat] = array($path,$mask);}
    
    public static function get($cat,$id = null,$returnasjson=false){
        $result =  null;
        if(array_key_exists($cat, self::$imgfolders)){
            $folder = self::getFolder(self::$imgfolders[$cat][0],self::$imgfolders[$cat][1]);
            $result = ($id == null) ? $folder : (array_key_exists($id, $folder)) ? file_get_contents($folder[$id]) : null;}
        
        if($returnasjson && $result == null){
            throw new \SYSTEM\LOG\ERROR("No matching Cat '".$cat."' or Key '".$id."' found or Folder is empty.");}
        
        return $returnasjson ? \SYSTEM\LOG\JsonResult::toString($result) : $result;
    }
    
    public static function put($cat,$id,$contents){
        throw new \SYSTEM\LOG\ERROR("not implemented");}
    
    private static function getFolder($folder,$mask){
        $files = array();
        foreach (glob($folder.$mask) as $file) {
            $files[] = $file;}        
        return $files;
    }
    
}
