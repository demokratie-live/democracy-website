<?php

namespace SYSTEM\SAI;

class sai {
    private static $modules = array(); //only strings!
    private static $modules_sys = array(); //only strings!    

    public static function register($module){
        if( !\class_exists($module) ||
            !\is_array($parents = \class_parents($module)) ||
            !\array_search('SYSTEM\SAI\SaiModule', $parents)){
            throw new \Exception('Problem with your Sysmodule class: '.$module);}
        array_push(self::$modules,$module);}
    public static function register_sys($module){
        if( !\class_exists($module) ||
            !\is_array($parents = \class_parents($module)) ||
            !\array_search('SYSTEM\SAI\SaiModule', $parents)){
            throw new \Exception('Problem with your Sysmodule class: '.$module);}
        array_push(self::$modules_sys,$module);}    

    public static function getModules(){
        return self::$modules;}
    public static function getSysModules(){
        return self::$modules_sys;}
    public static function getAllModules(){
        return array_merge(self::$modules_sys,self::$modules);}
}