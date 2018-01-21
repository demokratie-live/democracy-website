<?php
class default_page implements \SYSTEM\PAGE\DefaultPage {
    public static function js(){        
        return  \SYSTEM\HTML\html::script(\SYSTEM\CACHE\cache_js::minify(array(
                    \LIB\lib_jquery::js(),
                    \LIB\lib_popper::js(),
                    \LIB\lib_bootstrap::js(),
                    \LIB\lib_system::js(),
                    new PLIB('responsiveslides/responsiveslides.min.js'),
                    new PLIB('jarallax/jarallax.js'),
                    new PLIB('smooth_scroll/SmoothScroll.min.js'),
                    new PLIB('move_top/move-top.min.js'),
                    new PLIB('easing/easing.js'),
                    new PPAGE('default_page/js/default_page.js')
                )));
    }
    
    public static function css(){
        return  //\SYSTEM\HTML\html::link(->WEBPATH()).
                //\SYSTEM\HTML\html::link(->WEBPATH()).
                //\SYSTEM\HTML\html::link('//fonts.googleapis.com/css?family=Pacifico').
                //\SYSTEM\HTML\html::link('//fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i').
                \SYSTEM\HTML\html::link(\SYSTEM\CACHE\cache_css::minify(array(
                    \LIB\lib_bootstrap::css(),
                    \LIB\lib_font_awesome::css(),
                    new PPAGE('default_page/css/font.css'),
                    new PPAGE('default_page/css/style.css'),
                    new PPAGE('default_page/css/default_page.css')
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