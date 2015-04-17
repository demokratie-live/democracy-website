<?php
namespace SYSTEM\SAI;

class saimod_sys_docu extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu(){
        $documents = \SYSTEM\DOCU\docu::getDocuments();
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_DOCU);
        $vars['tabopts'] = '';
        foreach($documents as $cat => $docs){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/tabopt.tpl'), array( 'tab_id' => str_replace(' ', '_', $cat),'tab_id_pretty' => $cat));}
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/saimod_sys_docu.tpl'), $vars);
    }  
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_action_cat($cat = 'System'){
        $documents = \SYSTEM\DOCU\docu::getDocuments()[$cat];
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_DOCU);
        $vars['tabopts'] = '';
        foreach($documents as $doc){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/tabopt2.tpl'),
                                array(  'tab_id' => str_replace(' ', '_', $cat),
                                        'doc_id' => str_replace(array('.',' '), '_', basename($doc)),
                                        'doc_id_pretty' => basename($doc)));
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/saimod_sys_docu_cat.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_action_doc($cat = 'System',$doc = '1_system_md'){
        $document = \SYSTEM\DOCU\docu::getDocuments()[$cat];
        foreach($document as $docu){
            if(str_replace(array('.',' ','\\','/'), '_', basename($docu)) == $doc){
                return \Michelf\MarkdownExtra::defaultTransform(file_get_contents($docu));}
        }
        return 'not found';
    }
    
    public static function html_li_menu(){return '<li><a id="menu_docu" href="#!docu">${sai_menu_docu}</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    //public static function css(){}
    public static function js(){
        return array(   \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/js/saimod_sys_docu.js'));}
}