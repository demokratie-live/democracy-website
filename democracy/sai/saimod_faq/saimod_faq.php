<?php
namespace SAI;
class saimod_faq extends \SYSTEM\SAI\sai_module{    
    public static function sai_mod__SAI_saimod_faq(){
        $vars = array();
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_faq/tpl/saimod_faq.tpl'))->SERVERPATH(),$vars);}
        
    public static function sai_mod__SAI_saimod_faq_action_list(){
        $vars = array('faqs' => '');
        $faqs = \SQL\FAQS_SELECT::QQ();
        while($faq = $faqs->next()){
            $vars['faqs'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_faq/tpl/faq.tpl'))->SERVERPATH(),$faq);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_faq/tpl/saimod_faq_list.tpl'))->SERVERPATH(),$vars);}
    
    public static function sai_mod__SAI_saimod_faq_action_new(){
        $vars = array();
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_faq/tpl/saimod_faq_new.tpl'))->SERVERPATH(),$vars);}
        
    public static function sai_mod__SAI_saimod_faq_action_edit($id){
        $vars = \SQL\FAQ_SELECT::Q1(array($id));
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_faq/tpl/saimod_faq_edit.tpl'))->SERVERPATH(),$vars);}
        
    public static function sai_mod__SAI_saimod_faq_action_insert($data){
        return \SYSTEM\LOG\JsonResult::status(\SQL\FAQ_INSERT::QI(array($data['order'],$data['question'],$data['answer'],$data['categories'])));
    }
    
    public static function sai_mod__SAI_saimod_faq_action_update($data){
        return \SYSTEM\LOG\JsonResult::status(\SQL\FAQ_UPDATE::QI(array($data['order'],$data['question'],$data['answer'],$data['categories'],$data['id'])));
    }
    
    public static function sai_mod__SAI_saimod_faq_action_delete($data){
        foreach($data as $id){
            \SQL\FAQ_DELETE::QI(array($id));
        }
        return \JsonResult::ok();
    }
    
    public static function menu(){
        return new \SYSTEM\SAI\sai_module_menu( 120,
                                    \SYSTEM\SAI\sai_module_menu::POISITION_LEFT,
                                    \SYSTEM\SAI\sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_faq/tpl/menu.tpl'))->SERVERPATH()));}
    public static function right_public(){return false;}
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function js(){
        return array(new \PSAI('saimod_faq/js/saimod_faq.js'));}
}