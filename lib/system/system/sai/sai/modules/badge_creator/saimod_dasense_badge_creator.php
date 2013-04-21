<?php

namespace SYSTEM\SAI;

class saimod_dasense_badge_creator extends \SYSTEM\SAI\SaiModule {

    
    public static function html_js(){ return    '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'sai/page/default_page/js/libs/jquery.miniColors.js').'"></script>'.
                                                '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'sai/modules/badge_creator/badgecreator.js').'"></script>';}
    public static function html_css(){return '';}
    public static function html_content(){
        return \SYSTEM\PAGE\replace::replaceFile(   \SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'sai/modules/badge_creator/badgecreator.tpl'),
                                                    array( 'js' => self::html_js()));}
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_dasense_badge_creator">Badge Creator</a></li>';}
}