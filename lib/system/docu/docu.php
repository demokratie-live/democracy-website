<?php
namespace SYSTEM\DOCU;

class docu {
    /*private static $documents = array(); //only strings!    

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
        return self::$documents[$category];}*/
    private static $phpdocconfigs = array();
    //phpdocconfig
    //array('inoath' => path, 'outpath' => path)
    
    public static function register($phpdocconfig){
        array_push(self::$phpdocconfigs,$phpdocconfig);}
        
    public static function getAll(){
        return self::$phpdocconfigs;}
    
    public static function get($id){
        foreach(self::$phpdocconfigs as $config){
            if($config['id'] == $id){
                return $config;}
        }
        throw new ERROR('PhpDocConfig for id '.$id.' not found.');
    }

}