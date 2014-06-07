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
        $langtab_ = '';
        foreach (self::getLanguages() as $lang){
            $details['langs'] = $lang;
            $langtab_ .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/langtabopt.tpl'), $details);
            $languages[] = $lang;
        }    
        $langtab['langs'] = $langtab_;
        $langhead = \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/langtabs.tpl'), $langtab);
        $vars['tabs'] = $langhead;
        $vars['langs'] = $langtab_;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/tabs.tpl'), $vars);
                //.\SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/editmode.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_load($lang, $group){
        $con = new \SYSTEM\DB\Connection();
        $query = 'SELECT id, '.$lang.' FROM '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' WHERE category='.$group.' ORDER BY category ASC;';
            $res = $con->query($query);
            $entries = '';
            $temparr = array();
            while($r = $res->next()){  
                $temparr['lang'] = $r[$lang];
                $temparr['id'] = $r['id'];
                $entries .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/entry.tpl'), $temparr);
            }
        return $entries;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_singleload($id, $lang){
        $con = new \SYSTEM\DB\Connection();
        $result = "";
        $query = 'SELECT '.$lang.' FROM `'.\SYSTEM\DBD\system_locale_string::NAME_MYS.'` WHERE id=\''.$id.'\' ORDER BY category ASC;';
        new \SYSTEM\LOG\WARNING($query);
            $res = $con->query($query);
            $entries = '';
            $temparr = array();
            while($r = $res->next()){  
                $entries .= $r[$lang];
                }
        return $entries;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_edit($id, $lang, $category, $newtext){
         //$charset = 'utf-8';
         $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
         $res = null;         
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->prepare('newText' ,'UPDATE '.\SYSTEM\DBD\system_locale_string::NAME_PG.' SET "'.$lang.'"=$1 WHERE category = $1 AND id=$2;', array($newtext, $category, $id));
        } else {
            $res = $con->prepare('newText' ,'UPDATE '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' SET '.$lang.'=? WHERE category = ? AND id=?;', array($newtext, $category, $id));
        }
        return $res->affectedRows() == 0 ? \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no rows affected")) : \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_add($id, $category){                
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_ADD::QI(array($id, $category)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no data added"));}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_delete($id){
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_DEL::QI(array($id)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("could not delete the permitted data"));}
      
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_locale">Text</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_LOCALE);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/saimod_sys_locale.js')));}
}