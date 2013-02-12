<?php

namespace SYSTEM\SAI;

class sai {

    private $modules = array(); //only strings!

    //SINGLETON!
    static private $instance = null;
    static public function getInstance(){
        if (null === self::$instance) {
            self::$instance = new self;}
        return self::$instance;
    }
    private function __construct(){}
    private function __clone(){}

    public function register($module){        
        if( !\class_exists($module) ||
            !\is_array($parents = \class_parents($module)) ||
            !\array_search('SYSTEM\SAI\SaiModule', $parents)){
            throw new \Exception('Problem with your Sysmodule class: '.$module);}
        $this->modules[] = $module;}

    public function getModules(){
        return $this->modules;}
}