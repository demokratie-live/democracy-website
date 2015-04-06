<?php
namespace SYSTEM\SAI;

class saimod_sys_docu extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu(){
        $documents = \SYSTEM\DOCU\docu::getDocuments();
                
        $vars['tabopts'] = '';
        $first = true;                
        foreach($documents as $cat => $docs){
            $vars2 = array( 'active' => ($first ? 'active' : ''),
                            'tab_id' => str_replace(' ', '_', $cat),
                            'tab_id_pretty' => $cat);
            $first = false;
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/tabopt.tpl'), $vars2);
            
            $first2 = true;
            foreach($docs as $doc){                
                $tabs[$cat]['tab_id'] = str_replace(' ', '_', $cat);            
                $tabs[$cat]['content'] = isset($tabs[$cat]['content']) ? $tabs[$cat]['content'] : '';
                $tabs[$cat]['menu'] = isset($tabs[$cat]['menu']) ? $tabs[$cat]['menu'] : '';
                //$tabs[$cat]['content'] .= \Michelf\MarkdownExtra::defaultTransform(file_get_contents($doc));
                $vars3 = array( 'active' => ($first2 ? 'active' : ''),
                                'content' => \Michelf\MarkdownExtra::defaultTransform(file_get_contents($doc)),
                                'tab_id' => str_replace(array('.',' ','\\','/'), '_', $doc));                
                $tabs[$cat]['content'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/tab2.tpl'), $vars3);
                $vars3 = array( 'active' => ($first2 ? 'active' : ''),
                                'tab_id' => str_replace(array('.',' ','\\','/'), '_', $doc),
                                'tab_id_pretty' => basename($doc));
                $tabs[$cat]['menu'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/tabopt.tpl'), $vars3);
                $first2 = false;
        }   
        
        $vars['tabs'] = '';
        $first = true;                   
        foreach($tabs as $tab){
            $tab['active'] = ($first ? 'active' : '');
            $first = false;
            $vars['tabs'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/tab.tpl'), $tab);}
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/tpl/tabs.tpl'), $vars);
    }    
    
    public static function html_li_menu(){return '<li><a href="#!docu">Docu</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    //public static function css(){}
    public static function js(){
        return array(   \SYSTEM\WEBPATH(new \SYSTEM\PSYSTEM(),'lib/EpicEditor/js/epiceditor.min.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_docu/js/saimod_sys_docu.js'));}
}