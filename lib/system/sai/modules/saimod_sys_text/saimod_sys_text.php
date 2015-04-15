<?php
namespace SYSTEM\SAI;
class saimod_sys_text extends \SYSTEM\SAI\SaiModule {
    const NEW_ENTRY = 'new_text_entry';
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text(){        
        $vars = array();
        $vars['tabopts'] = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_TEXT_TAGS::QQ();
        $vars['new_id'] = self::NEW_ENTRY;
        $vars['new_lang'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG);
        while($r = $res->next()){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/tabopt.tpl'), $r);}           
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_tag($tag = null){
        if ($tag) {
            $res = \SYSTEM\DBD\SYS_SAIMOD_TEXT_GETTEXTS::QQ(array($tag));
        } else {
            $res = \SYSTEM\DBD\SYS_SAIMOD_TEXT_GETTEXTS_ALL::QQ();}

        $entries = '';
        while($r = $res->next()){  
            $entries .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_list_entry.tpl'), $r);
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_list.tpl'), array('entries' => $entries)); 
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_edittext($id, $lang){
        $langs = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);
        $vars = array();
        $vars['tabopts'] = '';
        foreach($langs as $l){
            $vars2 = array();
            $vars2['id'] = $id;
            $vars2['lang'] = $l;
            $vars2['default'] = ($l == $lang ? 'menu_lang_default' : '');
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/tabopt2.tpl'), $vars2);
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_edit_langs.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_editor($id, $lang){
        $vars = array();
        $vars['id'] = $id;
        $vars['lang'] = $lang;
        $vars['content'] = \SYSTEM\PAGE\text::get($id,$lang,false);
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_edit_editor.tpl'), $vars);
    }
    
    //Dont rename/save to id self::NEW_ENTRY
    /*public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_rename($id, $newid, $tags){}*/
    
    /*public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_save($id, $lang, $tags){                
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_ADD::QI(array($id, $category)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no data added"));}*/
  
    /*public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_delete($id){
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_DEL::QI(array($id)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("could not delete the permitted data"));}*/
      
    public static function html_li_menu(){return '<li><a id="menu_text" href="#!text">Text</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_LOCALE);}
    
    public static function css(){
        return array( \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/css/saimod_sys_text.css'));}
    public static function js(){
        return array( \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/js/saimod_sys_text.js'));}
}