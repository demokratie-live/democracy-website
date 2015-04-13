<?php
namespace SYSTEM\SAI;

class saimod_sys_text extends \SYSTEM\SAI\SaiModule {
    
    public static function getLanguages(){
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);}

    public static function sai_mod__SYSTEM_SAI_saimod_sys_text(){        
        $vars = array();                        
        $res = \SYSTEM\DBD\SYS_SAIMOD_LOCALE_TAGS::QQ();
        $vars['tabopts'] = '';
        
        $first = true;
        $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/tabopt.tpl'),  array( 'active' => ($first ? 'active' : ''), 'tag' => 'All'));
        while($r = $res->next()){
            $vars2 = array( 'active' => ($first ? 'active' : ''),
                            'tag' => $r['tag']);
            $first = false;
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/tabopt.tpl'), $vars2);
        }           
        $langtab_ = '';
        foreach (self::getLanguages() as $lang){
            $details['langs'] = $lang;
            $langtab_ .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/langtabopt.tpl'), $details);
            $languages[] = $lang;
        }    
        $langtab['langs'] = $langtab_;
        $langhead = \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/langtabs.tpl'), $langtab);
        $vars['tabs'] = $langhead;
        $vars['langs'] = $langtab_;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/main.tpl'), $vars);
                //.\SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/editmode.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_load($lang){
        $con = new \SYSTEM\DB\Connection();
        if(\SYSTEM\system::isSystemDbInfoPG()){
            //$query = 'SELECT id, "'.$lang.'" FROM '.\SYSTEM\DBD\system_locale_string::NAME_PG.' WHERE category='.$group.' ORDER BY category ASC;';
        } else {
            $query = 'SELECT * FROM system_text WHERE language=\''.$lang.'\';';
            new \SYSTEM\LOG\WARNING($query);
        }
        $res = $con->query($query);
        $entries = '';
        $temparr = array();
        while($r = $res->next()){  
            $temparr['language'] = $lang;
            $temparr['id'] = $r['id'];
            $temparr['text'] = $r['text'];
            $temparr['author'] = $r['author'];
            $entries .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/entry.tpl'), $temparr);
        }
        return $entries;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_loadByTag($tag, $lang){
        $con = new \SYSTEM\DB\Connection();
        $result = "";
        $query = " 
            SELECT system_text_tag.tag, system_text.* FROM system_text_tag
            LEFT JOIN system_text ON system_text_tag.id = system_text.id
            WHERE tag = '".$tag."' AND language = '".$lang."'";
             
        $res = $con->query($query);
        $entries = '';
        while($r = $res->next()){  
            $entries .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tpl/entry.tpl'), $r);
        }
        return $entries;
            //$query = 'SELECT '.$lang.' FROM `'.\SYSTEM\DBD\system_locale_string::NAME_MYS.'` WHERE id=\''.$id.'\' ORDER BY category ASC;';
        
        
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_singleload($id, $lang){
        $con = new \SYSTEM\DB\Connection();
        $result = "";
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $query = 'SELECT "'.$lang.'" FROM '.\SYSTEM\DBD\system_locale_string::NAME_PG.' WHERE id=\''.$id.'\' ORDER BY category ASC;';
        } else {
            $query = 'SELECT '.$lang.' FROM `'.\SYSTEM\DBD\system_locale_string::NAME_MYS.'` WHERE id=\''.$id.'\' ORDER BY category ASC;';
        }
        $res = $con->query($query);
        $entries = '';
        $temparr = array();
        while($r = $res->next()){  
            $entries .= $r[$lang];}
        return $entries;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_edit($id, $lang, $category, $newtext){
         //$charset = 'utf-8';
         $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
         $res = null;         
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->prepare('newText' ,'UPDATE '.\SYSTEM\DBD\system_locale_string::NAME_PG.' SET "'.$lang.'"=$1 WHERE category = $2 AND id=$3;', array($newtext, $category, $id));
        } else {
            $res = $con->prepare('newText' ,'UPDATE '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' SET '.$lang.'=? WHERE category = ? AND id=?;', array($newtext, $category, $id));
        }
        return $res->affectedRows() == 0 ? \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no rows affected")) : \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_add($id, $category){                
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_ADD::QI(array($id, $category)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no data added"));}
  
    public static function sai_mod__SYSTEM_SAI_saimod_sys_text_action_delete($id){
        return \SYSTEM\DBD\SYS_SAIMOD_LOCALE_DEL::QI(array($id)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("could not delete the permitted data"));}
      
    public static function html_li_menu(){return '<li><a id="menu_text" href="#!text">Text</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_LOCALE);}
    
    //public static function css(){}
    public static function js(){
        return array( // \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tinymce/tinymce.min.js'),
                       \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/js/saimod_sys_text.js'));}
}