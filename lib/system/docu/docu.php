<?php
namespace SYSTEM\DOCU;

class docu {
    private static $documents = array(); //only strings!    

    public static function registerFolder($folder,$category){
        if(!is_dir($folder)){
            throw new \SYSTEM\LOG\ERROR('Docu Folder does not exist: '.$folder);}
        
        foreach (glob($folder."/*.md") as $filename) {
            self::register($filename, $category);}
    }
    public static function register($document,$category){
        if(!file_exists($document)){
            throw new \SYSTEM\LOG\ERROR("Could not find registered documentation: ".$document);}
        if(!isset(self::$documents[$category])){
            self::$documents[$category] = array();}
        array_push(self::$documents[$category],$document);}    

    public static function getDocuments(){
        return self::$documents;}
    public static function getCategory($category){
        return self::$documents[$category];}
}