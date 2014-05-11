<?php
namespace SYSTEM\SAI;

class saimod_sys_locale extends \SYSTEM\SAI\SaiModule {
    
    public static function getLanguages(){
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);        
    }

    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale(){        
        $vars = array();                        

        $res = \SYSTEM\DBD\SYS_SAIMOD_LOCALE_CATEGORY::QQ();
                
        $vars['tabopts'] = '';
        $first = true;
        while($r = $res->next()){
            $vars2 = array( 'active' => ($first ? 'active' : ''),
                            'tab_id' => $r['category']);
            $first = false;
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/tabopt.tpl'), $vars2);
        }       
                
        $langhead = '';
        foreach (self::getLanguages() as $lang){
            $langhead .= '<th>'.$lang.'</th>'; 
            $languages[] = $lang;
        }         

        $res = \SYSTEM\DBD\SYS_SAIMOD_LOCALE_SELECT::QQ();
        $tabs = array();
        while($r = $res->next()){            
            $tabs[$r['category']]['tab_id'] = $r['category'];            
            $tabs[$r['category']]['content'] = isset($tabs[$r['category']]['content']) ? $tabs[$r['category']]['content'] : '';
            $tabs[$r['category']]['langhead'] = $langhead;
            
            $r['content'] = '';
            foreach ($languages as $columns){                        
                $r['content'] .= '<td>'.$r[$columns].'</td>';
            }                                    
            $tabs[$r['category']]['content'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/list_entry.tpl'), $r);                        
        }   
        
        $vars['tabs'] = '';
        $first = true;                   
        foreach($tabs as $tab){
            $tab['active'] = ($first ? 'active' : '');
            $first = false;
            $vars['tabs'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/tab.tpl'), $tab);}
               
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/tabs.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_edit($id, $lang, $newtext){         
         $charset = 'utf-8';
         $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
         $res = null;         
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->prepare('newText' ,'UPDATE '.\SYSTEM\DBD\system_locale_string::NAME_PG.' SET "'.$lang.'"=$1 WHERE id=$2;', array($newtext, $id));
        } else {
            $res = $con->prepare('newText' ,'UPDATE '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' SET '.$lang.'=? WHERE id=?;', array($newtext, $id));
        }
        return $res->affectedRows() == 0 ? \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no rows affected")) : \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_add($id, $category){                
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_ADD::QI(array($id, $category)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no data added"));}
        
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_addmode(){
         $vars = array();         
         return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/add.tpl'), $vars);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_delete($id){
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_DEL::QI(array($id)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("could not delete the permitted data"));}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_editmode($entry){
        $r = \SYSTEM\DBD\SYS_SAIMOD_LOCALE_ID::Q1(array($entry));        
        if(!$r){
            throw new \SYSTEM\LOG\ERROR("No such Entry found!");}
            
        $vars = array();
        $vars['entry'] = $entry;
        $vars['langhead'] = '';
                    
        foreach (self::getLanguages() as $lang){
            $vars['langhead'] .= '<th>'.$lang.'</th>';
            $languages[] = $lang;
        }                                                            
        $vars['content'] = '';
        foreach ($languages as $lang){
            $r['lang'] = $lang;
            $r['value'] = $r[$lang];
            $vars['content'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/edit_entry.tpl'), $r);}
            
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/edit.tpl'), $vars);
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_locale">DB Text</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_LOCALE);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/saimod_sys_locale.js')));}
}