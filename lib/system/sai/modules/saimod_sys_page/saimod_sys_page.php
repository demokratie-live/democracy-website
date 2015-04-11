<?php
namespace SYSTEM\SAI;
class saimod_sys_page extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_page(){
        $vars = array();
        $vars['tabopts'] = '';
        
        $res = \SYSTEM\DBD\SYS_SAIMOD_PAGE_GROUPS::QQ();
        
        while($r = $res->next()){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/tpl/tabopt.tpl'), array( 'tab_id' => $r['group']));}
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/tpl/saimod_sys_page.tpl'), $vars);
    }
    
    public static function sai_mod__system_sai_saimod_sys_page_action_list($group=null){
        $res = \SYSTEM\DBD\SYS_SAIMOD_PAGE_GET::QQ();
        $tab = array('content' => '');
        while($r = $res->next()){            
            if($group != null && $r['group'] != $group){
                continue;}
            $tab['tab_id'] = $r['group'];
            $r['tr_class'] = self::tablerow_class($r['type']);
            $r['type'] = self::type_names($r['type']);
            $tab['content'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/tpl/list_entry.tpl'), $r);
        }      
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/tpl/saimod_sys_page_list.tpl'), $tab);
    }
    
    public static function sai_mod__system_sai_saimod_sys_page_action_deletedialog($ID,$group){
        $res = \SYSTEM\DBD\SYS_SAIMOD_PAGE_SINGLE_SELECT::Q1(array($ID,$group));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/tpl/delete_dialog.tpl'), $res);
    }
    public static function sai_mod__system_sai_saimod_sys_page_action_newdialog(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/tpl/new_dialog.tpl'));}
    
    public static function sai_mod__system_sai_saimod_sys_page_action_addcall($ID,$group,$type,$parentID,$parentValue,$name,$verify){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        if($parentValue == ''){ $parentValue = NULL;}
        if($verify      == ''){ $verify = NULL;}
        \SYSTEM\DBD\SYS_SAIMOD_PAGE_ADD::QI(array($ID,$group,$type,$parentID,$parentValue,$name,$verify));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__system_sai_saimod_sys_page_action_deletecall($ID,$group){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\DBD\SYS_SAIMOD_PAGE_DEL::QI(array($ID,$group));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    private static function type_names($type){
        switch($type){
            case 0: return 'STATIC';
            case 1: return 'DYNAMIC';
            default: return 'Problem unknown type';
        }   
    }
    
    private static function tablerow_class($flag){
        switch($flag){
            case 0: return 'success';
            case 1: return 'info';
            default: return '';
        }        
    }
    
    public static function html_li_menu(){return '<li><a id="menu_page" href="#!page">Page</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API);}
    
    public static function css(){
        return array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/css/saimod_sys_page.css'));}
    public static function js(){
        return array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_page/js/saimod_sys_page.js'));}
}