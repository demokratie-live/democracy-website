<?php

namespace SYSTEM\SAI;

class saimod_sys_sai extends \SYSTEM\SAI\SaiModule {    
    public static function html_content(){return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_sai/carousel.tpl'), array());}
    public static function html_li_menu(){return '<li class="active"><a href="#" id=".SYSTEM.SAI.saimod_sys_sai">SYS SAI</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){}
    
    public static function src_css(){}
    public static function src_js(){}
}