<?php
namespace SYSTEM\SAI;

class saimod_sys_cron extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cron(){
        $vars = array();
        $vars['content'] = '';
        $vars['last_visit'] = \SYSTEM\CRON\cron::last_visit();
        $res = \SYSTEM\DBD\SYS_SAIMOD_CRON::QQ();
        while($r = $res->next()){
            $r['next'] = date('Y-m-d H:i:s',\SYSTEM\CRON\cron::next($r['class']));
            $r['status'] = \SYSTEM\CRON\cronstatus::text($r['status']);
            $vars['content'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/tpl/list_entry.tpl'), $r);}   
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/tpl/tabs.tpl'), $vars);
    }
    
    public static function sai_mod__system_sai_saimod_sys_cron_action_add($cls,$min,$hour,$day,$day_week,$month){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\DBD\SYS_SAIMOD_CRON_ADD::QI(array($cls,$min,$hour,$day,$day_week,$month));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__system_sai_saimod_sys_cron_action_del($cls){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\DBD\SYS_SAIMOD_CRON_DEL::QI(array($cls));
        return \SYSTEM\LOG\JsonResult::ok();}
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_cron">Cron</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cron_flag_css(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/css/saimod_sys_cron.css')));}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cron_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_cron/js/saimod_sys_cron.js')));}    
}