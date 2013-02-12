<?php

namespace SYSTEM\SAI;

class SaiApi extends \SYSTEM\PAGE\PageClass {

    public static function action_module($module){
        return new \SYSTEM\SAI\default_page($module);}

    public static function default_page(){
        return new \SYSTEM\SAI\default_page();}
}