<?php
class default_page implements \SYSTEM\PAGE\DefaultPage {
    public static function js(){        
        return  \SYSTEM\HTML\html::script(\SYSTEM\CACHE\cache_js::minify(array(
                    \LIB\lib_jquery::js(),
                    \LIB\lib_popper::js(),
                    \LIB\lib_bootstrap::js(),
                    \LIB\lib_system::js(),
                    new PLIB('responsiveslides/responsiveslides.min.js'),
                    new PLIB('move_top/move-top.min.js'),
                    new PLIB('easing/easing.js'),
                    new PPAGE('default_page/js/default_page.js'),
                    new PPAGE('default_home/js/default_home.js'),
                    new PPAGE('default_wahlometer/js/default_wahlometer.js'),
                    new PPAGE('default_citizen/js/default_citizen.js'),
                    new PPAGE('default_contact/js/default_contact.js'),
                    new PPAGE('default_nutzungsbedingungen/js/default_nutzungsbedingungen.js'),
                    new PPAGE('default_datenschutz/js/default_datenschutz.js'),
                    new PPAGE('default_donate/js/default_donate.js'),
                    new PPAGE('default_engineering/js/default_engineering.js'),
                    new PPAGE('default_faq/js/default_faq.js'),
                    new PPAGE('default_impressum/js/default_impressum.js'),
                    new PPAGE('default_politicians/js/default_politicians.js'),
                    new PPAGE('default_press/js/default_press.js'),
                    new PPAGE('default_blog/js/default_blog.js'),
                )));
                //\SYSTEM\HTML\html::script('https://www.paypalobjects.com/api/checkout.js');
    }
    
    public static function css(){
        return  \SYSTEM\HTML\html::link(\SYSTEM\CACHE\cache_css::minify(array(
                    \LIB\lib_bootstrap::css(),
                    \LIB\lib_font_awesome::css(),
                    new PPAGE('default_page/css/font.css'),
                    new PPAGE('default_page/css/default_page.css'),
                    new PPAGE('default_home/css/default_home.css'),
                    new PPAGE('default_wahlometer/css/default_wahlometer.css'),
                    new PPAGE('default_citizen/css/default_citizen.css'),
                    new PPAGE('default_contact/css/default_contact.css'),
                    new PPAGE('default_nutzungsbedingungen/css/default_nutzungsbedingungen.css'),
                    new PPAGE('default_datenschutz/css/default_datenschutz.css'),
                    new PPAGE('default_donate/css/default_donate.css'),
                    new PPAGE('default_donate/css/donate.css'),
                    new PPAGE('default_engineering/css/default_engineering.css'),
                    new PPAGE('default_faq/css/default_faq.css'),
                    new PPAGE('default_impressum/css/default_impressum.css'),
                    new PPAGE('default_politicians/css/default_politicians.css'),
                    new PPAGE('default_press/css/default_press.css'),
                    new PPAGE('default_blog/css/default_blog.css'),
                )));
    }
    
    public function html($_escaped_fragment_ = null){
        $vars = array();
        $vars['js'] = '';
        if(!$_escaped_fragment_){
            $vars['js'] = self::js();}
        $vars['css'] = self::css();
        $vars = array_merge($vars,  \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_page/tpl/default_page.tpl'))->SERVERPATH(), $vars);
    }
}