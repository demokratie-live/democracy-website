<?php

namespace SYSTEM\SAI;

class saimod_sys_sai extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_sai(){return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_sai/carousel.tpl'), array());}
    public static function html_li_menu(){return '<li class="active"><a href="#" id=".SYSTEM.SAI.saimod_sys_sai">SYSTEM Admin Interface</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){return true;}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_sai_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_sai_flag_js(){}
}