<?php
namespace SYSTEM\SAI;

class saimod_sys_docu extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu(){
        return "todo";
    }    
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_docu">Docu</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_flag_js(){}
}