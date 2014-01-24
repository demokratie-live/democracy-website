<?php
namespace SYSTEM\SAI;

class saistart_sys_sai extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saistart_sys_sai(){return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/carousel.tpl'), array());}
    public static function html_li_menu(){return '<li class="active"><a href="#" saimenu=".SYSTEM.SAI.saistart_sys_sai">'.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_TITLE).'</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){return true;}
    
    public static function sai_mod__SYSTEM_SAI_saistart_sys_sai_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saistart_sys_sai_flag_js(){}
}