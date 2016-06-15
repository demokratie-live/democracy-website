<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * saimod_sys_text Class provided by System as saimod to manage the system_text, system_text_tag table
 */
class saimod_sys_text extends \SYSTEM\SAI\SaiModule {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text(){        
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TEXT);
        $vars['tabopts'] = '';
        $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_TAGS::QQ();
        $vars['new_id'] = \SYSTEM\PAGE\text::NEW_ENTRY;
        $vars['new_lang'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG);
        while($r = $res->next()){
            //hide sai entries
            $r['style'] = '';
            if(substr($r['tag'],0,3) == 'sai'){
                $r['style'] = 'display:none;';}
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/tabopt.tpl'))->SERVERPATH(), $r);}
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate the HTML for the Texts with no Tag
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_notag(){
        $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_GETTEXTS_NOTAG::QQ();
        $entries = '';
        while($r = $res->next()){  
            $entries .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_list_entry.tpl'))->SERVERPATH(), $r);
        }
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TEXT);
        $vars['entries'] = $entries;
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_list.tpl'))->SERVERPATH(), $vars); 
    }
    
    /**
     * Generate the HTML for the Texts with a Tag
     * 
     * @param string $tag Tag Filter
     * @param string $filter Language Filter
     * @param string $search Search Filter
     * @param int $page Page (Displays 100)
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_tag($tag = 'all',$filter = "all",$search="%",$page=0){
        if($tag == 'all'){
            if($filter == 'all'){
                $count = \SYSTEM\SQL\SYS_SAIMOD_TEXT_COUNT::Q1(array($search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_TEXT::QQ(array($search,$search,$search));
                
            } else {
                $count = \SYSTEM\SQL\SYS_SAIMOD_TEXT_COUNT_FILTER::Q1(array($filter,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_TEXT_FILTER::QQ(array($filter,$search,$search,$search));
            }
        } elseif($tag == 'notag'){
            if($filter == 'all'){
                $count = \SYSTEM\SQL\SYS_SAIMOD_TEXT_COUNT_NOTAG::Q1(array($search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_TEXT_NOTAG::QQ(array($search,$search,$search));
                
            } else {
                $count = \SYSTEM\SQL\SYS_SAIMOD_TEXT_COUNT_NOTAG_FILTER::Q1(array($filter,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_TEXT_NOTAG_FILTER::QQ(array($filter,$search,$search,$search));
            }
        } else {
            if($filter == 'all'){
                $count = \SYSTEM\SQL\SYS_SAIMOD_TEXT_COUNT_TAG::Q1(array($tag,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_TEXT_TAG::QQ(array($tag,$search,$search,$search));
            } else {
                $count = \SYSTEM\SQL\SYS_SAIMOD_TEXT_COUNT_TAG_FILTER::Q1(array($tag,$filter,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TEXT_TEXT_TAG_FILTER::QQ(array($tag,$filter,$search,$search,$search));
            }
        }
        $vars = array();
        $vars['tag'] = $tag;
        $vars['filter'] = $filter;
        $vars['search'] = $search;
        $vars['page'] = $page;
        $vars['entries'] = '';
        $count_filtered = 0;
        $res->seek(100*$page);
        while(($r = $res->next()) && ($count_filtered < 100)){  
            $vars['entries'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_list_entry.tpl'))->SERVERPATH(), $r);
            $count_filtered++;}
        $vars['pagination'] = '';
        $vars['page_last'] = ceil($count/100)-1;
        for($i=0;$i < ceil($count/100);$i++){
            $data = array('page' => $i,'search' => $search, 'filter' => $filter, 'active' => ($i == $page) ? 'active' : '', 'tag' => $tag);
            $vars['pagination'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_pagination.tpl'))->SERVERPATH(), $data);
        }
        $vars['count'] = $count_filtered.'/'.$count;
        $vars['lang_filter'] = '';
        $res = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);
        foreach($res as $lang){
            $data = array('active' => ($filter == $lang ? 'active' : ''), 'filter' => $lang, 'search' => $search, 'name' => $lang, 'tag' => $tag);
            $vars['lang_filter'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_lang_filter.tpl'))->SERVERPATH(),$data);}
        $vars['active'] = ($filter == 'all' ? 'active' : '');
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TEXT));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_list.tpl'))->SERVERPATH(), $vars); 
    }
    
    /**
     * Generate the HTML to edit a text
     * 
     * @param string $id Text ID
     * @param string $lang Language Filter
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_edittext($id,$lang){
        $langs = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TEXT);
        $vars['tabopts'] = '';
        foreach($langs as $l){
            $vars2 = array();
            $vars2['id'] = $id;
            $vars2['lang'] = $l;
            $vars2['default'] = ($l == $lang ? 'menu_lang_default' : '');
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/tabopt2.tpl'))->SERVERPATH(), $vars2);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_edit_langs.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate the HTML for the Editor
     * 
     * @param string $id Text ID
     * @param string $lang Language Filter
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_editor($id, $lang){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TEXT);
        $vars['id'] = $id;
        $vars['lang'] = $lang;
        $vars['content'] = \SYSTEM\PAGE\text::get($id,$lang,false);
        $vars['tags'] = '';
        $tags = \SYSTEM\PAGE\text::id_tags($id);
        foreach($tags as $tag){
            $vars['tags'] .= $tag['tag'].', ';
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_text/tpl/saimod_sys_text_edit_editor.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Save a Text into the Database
     * 
     * @param string $id Text ID
     * @param string $new_id New Text ID
     * @param string $lang Language of the Text
     * @param json $tags Json with tags
     * @param string $text New text
     * @return json Retuns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_save($id, $new_id, $lang, $tags, $text){
        return \SYSTEM\PAGE\text::save($id, $new_id, $lang, \json_decode($tags), urldecode($text)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();}
  
    /**
     * Delete a Text from the Database
     * 
     * @param string $id Text ID
     * @param string $lang Language of the Text
     * @return json Retuns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_delete($id, $lang = null){
        return \SYSTEM\PAGE\text::delete($id, $lang) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();}
      
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return '<li><a id="menu_text" data-toggle="tooltip" data-placement="bottom" title="${sai_menu_text}" href="#!text"><span class="glyphicon glyphicon-text-size" aria-hidden="true"></span></a></li>';}    
    
    /**
     * Returns if the Saimod is public(access for everyone)
     * 
     * @return boolean Returns if the Saimod is public(true) or not(false)
     */
    public static function right_public(){return false;}
    
    /**
     * Returns if the requesting user has the required rights to access the Saimod
     * 
     * @return boolean Returns true if the user can access
     */
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_LOCALE);}
    
    /**
     * Get all css System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods css
     */
    public static function css(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_text/css/saimod_sys_text.css'));}
        
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_text/js/saimod_sys_text.js'));}
}