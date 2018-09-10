<?php
namespace SAI;
class saimod_donate extends \SYSTEM\SAI\sai_module{    
    public static function sai_mod__SAI_saimod_donate(){
        $vars = \SYSTEM\PAGE\text::tag('donation');
        $vars['donate_box'] = \default_donate::donate_box();
        
        $vars['donate_details'] = \default_donate::donate_details();
        $vars['value_left'] = $vars['donation_value'];
        $vars['donate_data'] = '';
        $res = \SQL\DONATE_SELECT::QQ();
        while($row = $res->next()){
            $vars['value_left'] -= $row['value'];
            $row['selected_head'] = $row['type'] == \default_donate::DONATION_TYPE_HEAD ? 'selected' : '';
            $row['selected_data'] = $row['type'] == \default_donate::DONATION_TYPE_DATA ? 'selected' : '';
            $vars['donate_data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_donate/tpl/donate_data.tpl'))->SERVERPATH(),$row);
        }
        
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_donate/tpl/saimod_donate.tpl'))->SERVERPATH(),$vars);}
    
    public static function sai_mod__SAI_saimod_donate_action_update($paten,$value,$paten_goal,$value_goal){
        \SYSTEM\PAGE\text::save('donation_paten', 'donation_paten', 'deDE', ['donation'], $paten);
        \SYSTEM\PAGE\text::save('donation_value', 'donation_value', 'deDE', ['donation'], $value);
        \SYSTEM\PAGE\text::save('donation_paten_goal', 'donation_paten_goal', 'deDE', ['donation'], $paten_goal);
        \SYSTEM\PAGE\text::save('donation_value_goal', 'donation_value_goal', 'deDE', ['donation'], $value_goal);
        \SYSTEM\PAGE\text::save('donation_date', 'donation_date', 'deDE', ['donation'], date('d.m.Y * H:i').' Uhr');
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_donate_action_detail_delete($detail){
        $res = \SQL\DONATE_DETAIL_DELETE::QI(array($detail));
        return \SYSTEM\LOG\JsonResult::status($res ? true : false);
    }
    
    public static function sai_mod__SAI_saimod_donate_action_detail_insert($data){
        $res = \SQL\DONATE_DETAIL_INSERT::QI(array($data['order'],$data['type'],$data['value'],$data['max'],$data['text_cost'],$data['text_description'],$data['text_description_subtext'],$data['text_date']));
        return \SYSTEM\LOG\JsonResult::status($res ? true : false);
    }
    
    public static function sai_mod__SAI_saimod_donate_action_detail_update($data){
        $res = \SQL\DONATE_DETAIL_UPDATE::QI(array($data['order'],$data['type'],$data['value'],$data['max'],$data['text_cost'],$data['text_description'],$data['text_description_subtext'],$data['text_date'],$data['detail']));
        return \SYSTEM\LOG\JsonResult::status($res ? true : false);
    }
    
    public static function menu(){
        return new \SYSTEM\SAI\sai_module_menu( 110,
                                    \SYSTEM\SAI\sai_module_menu::POISITION_LEFT,
                                    \SYSTEM\SAI\sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_donate/tpl/menu.tpl'))->SERVERPATH()));}
    public static function right_public(){return false;}
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function css(){
        return array(new \PPAGE('default_donate/css/donate.css'));}
    
    public static function js(){
        return array(new \PSAI('saimod_donate/js/saimod_donate.js'));}
}