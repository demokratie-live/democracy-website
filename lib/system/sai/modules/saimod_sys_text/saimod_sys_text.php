<?php
namespace SYSTEM\SAI;
class saimod_sys_text extends \SYSTEM\SAI\SaiModule {
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text(){        
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TEXT);
        $vars['tabopts'] = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_TEXT_TAGS::QQ();
        $vars['new_id'] = \SYSTEM\PAGE\text::NEW_ENTRY;
        $vars['new_lang'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG);
        while($r = $res->next()){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/tabopt.tpl'), $r);}           
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_notag(){
        $res = \SYSTEM\DBD\SYS_SAIMOD_TEXT_GETTEXTS_NOTAG::QQ();
        $entries = '';
        while($r = $res->next()){  
            $entries .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_list_entry.tpl'), $r);
        }
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TEXT);
        $vars['entries'] = $entries;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_list.tpl'), $vars); 
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
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TEXT);
        $vars['entries'] = $entries;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_list.tpl'), $vars); 
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_edittext($lang,$id){
        $langs = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TEXT);
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
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TEXT);
        $vars['id'] = $id;
        $vars['lang'] = $lang;
        $vars['content'] = \SYSTEM\PAGE\text::get($id,$lang,false);
        $vars['tags'] = '';
        $tags = \SYSTEM\PAGE\text::id_tags($id);
        foreach($tags as $tag){
            $vars['tags'] .= $tag['tag'].', ';
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/saimod_sys_text_edit_editor.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_save($id, $new_id, $lang, $tags, $text){
        return \SYSTEM\PAGE\text::save($id, $new_id, $lang, \json_decode($tags), urldecode($text)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();}
  
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_delete($id, $lang = null){
        return \SYSTEM\PAGE\text::delete($id, $lang) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();}
      
    public static function html_li_menu(){return '<li><a id="menu_text" href="#!text">${sai_menu_text}</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_LOCALE);}
    
    public static function css(){
        return array( \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/css/saimod_sys_text.css'));}
    public static function js(){
        return array( \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/js/saimod_sys_text.js'));}
}