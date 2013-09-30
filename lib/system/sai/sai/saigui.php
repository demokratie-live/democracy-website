<?php
namespace SYSTEM\SAI;

define('SAI_MOD_POSTFIELD','sai_mod');

class saigui extends \SYSTEM\PAGE\Page {
    
    public function html(){
        //Direct JSON Input
        $pg = json_decode(file_get_contents("php://input"), true);
        if(!$pg){
            $pg = array_merge($_POST,$_GET);}        
        if(isset($pg[SAI_MOD_POSTFIELD])){
            $classname = \str_replace('.', '\\', $pg[SAI_MOD_POSTFIELD]);
            $pg[SAI_MOD_POSTFIELD] = \str_replace('.', '_', $pg[SAI_MOD_POSTFIELD]);
                        
            $mods = \SYSTEM\SAI\sai::getAllModules();        
            if( $classname &&
                \array_search($classname, $mods) !== false &&
                (   \call_user_func(array($classname, 'right_public')) ||
                    \call_user_func(array($classname, 'right_right')))){                                        
                    return \SYSTEM\API\api::run('\SYSTEM\API\verify', $classname , $pg, 42, false, false);
                } else {
                    return "Could not find Module";}
        } else {            
            return \SYSTEM\API\api::run('\SYSTEM\API\verify', '\SYSTEM\SAI\SaiModule', array(), 42, false, true);}
    }
}