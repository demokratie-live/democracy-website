<?php

namespace SYSTEM\SAI;

abstract class SaiModule extends \SYSTEM\API\api_login{
    public static function default_page(){
        $sai = new \SYSTEM\SAI\default_page();
        return $sai->html();}
       
    public static function html_li_menu(){
        throw new \RuntimeException("Unimplemented!");}
    //true or false -> if true no call to right_right()
    public static function right_public(){
        throw new \RuntimeException("Unimplemented!");}
    //check your rights here -> returns true or false
    public static function right_right(){
        throw new \RuntimeException("Unimplemented!");}
    
}