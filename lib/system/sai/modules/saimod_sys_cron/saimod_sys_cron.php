<?php
namespace SYSTEM\SAI;

class saimod_sys_cron extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cron(){
        $vars = array();
        $vars['tabopts'] = \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/tabopt.tpl'), array());
        $vars['content'] = '';
        
        $res = \SYSTEM\DBD\SYS_SAIMOD_CRON::QQ();        
        while($r = $res->next()){
            $vars['content'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/list_entry.tpl'), $r);}   

        $vars['tabs'] = \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/tab.tpl'), $vars);
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/tabs.tpl'), $vars);
    }
    
    public static function sai_mod__system_sai_saimod_sys_api_action_deletedialog($ID){
        $res = \SYSTEM\DBD\SYS_SAIMOD_API_SINGLE_SELECT::Q1(array($ID));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/delete_dialog.tpl'), $res);
    }
    
    public static function sai_mod__system_sai_saimod_sys_api_action_addcall($ID,$group,$type,$parentID,$parentValue,$name,$verify){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\DBD\SYS_SAIMOD_API_ADD::QI(array($ID,$group,$type,$parentID,$parentValue,$name,$verify));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__system_sai_saimod_sys_api_action_deletecall($ID){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\DBD\SYS_SAIMOD_API_DEL::QI(array($ID));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    private static function tablerow_class($flag){
        switch($flag){
            case 0: return 'info';
            case 1: return '';
            case 4: return 'warning';
            default: return 'success';
        }        
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_cron">Cron</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cron_flag_css(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/saimod_sys_cron.css')));}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cron_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/saimod_sys_cron.js')));}    
}