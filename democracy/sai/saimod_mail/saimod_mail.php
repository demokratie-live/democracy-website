<?php
namespace SAI;
class saimod_donate extends \SYSTEM\SAI\sai_module{    
    public static function sai_mod__SAI_saimod_donate(){
        $vars = \SYSTEM\PAGE\text::tag('donation');
        $vars['donate_box'] = \default_donate::donate_box();
        
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_donate/tpl/saimod_donate.tpl'))->SERVERPATH(),$vars);}
    
    public static function sai_mod__SAI_saimod_donate_action_update($paten,$value,$paten_goal,$value_goal){
        \SYSTEM\PAGE\text::save('donation_paten', 'donation_paten', 'deDE', ['donation'], $paten);
        \SYSTEM\PAGE\text::save('donation_value', 'donation_value', 'deDE', ['donation'], $value);
        \SYSTEM\PAGE\text::save('donation_paten_goal', 'donation_paten_goal', 'deDE', ['donation'], $paten_goal);
        \SYSTEM\PAGE\text::save('donation_value_goal', 'donation_value_goal', 'deDE', ['donation'], $value_goal);
        \SYSTEM\PAGE\text::save('donation_date', 'donation_date', 'deDE', ['donation'], date('d.m.Y * H:i').' Uhr');
        return \SYSTEM\LOG\JsonResult::ok();
    }
    public static function menu(){
        return new \SYSTEM\SAI\sai_module_menu( 100,
                                    \SYSTEM\SAI\sai_module_menu::POISITION_LEFT,
                                    \SYSTEM\SAI\sai_module_menu::DIVIDER_LEFT,
                                    \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_donate/tpl/menu.tpl'))->SERVERPATH()));}
    public static function right_public(){return false;}
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function js(){
        return array(new \PSAI('saimod_donate/js/saimod_donate.js'));}
}