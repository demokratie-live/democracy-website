<?php
namespace SYSTEM\SAI;

class saimod_sys_mod extends \SYSTEM\SAI\SaiModule {
    public static function sai_mod__SYSTEM_SAI_saimod_sys_mod_action_system(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_MOD);
        $vars['entries'] = '';
        $sys_mods = \SYSTEM\SAI\sai::getSysModules();
        foreach($sys_mods as $mod){
            $v = array();
            $v['mod'] = $mod;
            $v['public'] = \call_user_func(array($mod, 'right_public')) ? '<span class="badge badge-success">true</span>' : '<span class="badge badge-important">false</span>';
            $v['you'] = \call_user_func(array($mod, 'right_right')) ? '<span class="badge badge-success">true</span>' : '<span class="badge badge-important">false</span>';
            $vars['entries'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/tpl/mod_tr.tpl'),$v);
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/tpl/mod_table.tpl'),$vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_mod_action_project(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_MOD);
        $vars['entries'] = '';
        $mods = \SYSTEM\SAI\sai::getModules();
        foreach($mods as $mod){
            $v = array();
            $v['mod'] = $mod;
            $v['public'] = \call_user_func(array($mod, 'right_public')) ? '<span class="badge badge-success">true</span>' : '<span class="badge badge-important">false</span>';
            $v['you'] = \call_user_func(array($mod, 'right_right')) ? '<span class="badge badge-success">true</span>' : '<span class="badge badge-important">false</span>';
            $vars['entries'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/tpl/mod_tr.tpl'),$v);
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/tpl/mod_table.tpl'),$vars);
    }
    public static function sai_mod__SYSTEM_SAI_saimod_sys_mod(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/tpl/mods.tpl'),\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_MOD));}
    
    //public static function html_li_menu(){return '<li><a id="menu_mod" href="#!mod">${sai_menu_mod}</a></li>';}
    public static function html_li_menu(){return '<li><a id="menu_mod" href="#!mod"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></a></li>';}    
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    //public static function css(){}
    public static function js(){
        return array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/js/saimod_sys_mod.js'));}
}