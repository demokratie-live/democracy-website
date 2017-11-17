<?php
class default_page implements \SYSTEM\PAGE\DefaultPage {
    public static function js(){        
        return  \SYSTEM\HTML\html::script(\SYSTEM\CACHE\cache_js::minify(array(
                    \LIB\lib_jquery::js(),
                    \LIB\lib_bootstrap::js(),
                    \LIB\lib_system::js(),
                    new PPAGE('default_page/js/responsiveslides.min.js'),
                    new PPAGE('default_page/js/jarallax.js'),
                    new PPAGE('default_page/js/SmoothScroll.min.js'),
                    new PPAGE('default_page/js/move-top.js'),
                    new PPAGE('default_page/js/easing.js'),
                    new PPAGE('default_page/js/default_page.js')
                )));
    }
    
    public static function css(){
        return  \SYSTEM\HTML\html::link(\LIB\lib_bootstrap::css()->WEBPATH(false)).
                \SYSTEM\HTML\html::link(\LIB\lib_font_awesome::css()->WEBPATH(false)).
                //\SYSTEM\HTML\html::link('//fonts.googleapis.com/css?family=Pacifico').
                //\SYSTEM\HTML\html::link('//fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i').
                \SYSTEM\HTML\html::link(\SYSTEM\CACHE\cache_css::minify(array(
                    new PPAGE('default_page/css/style.css'),
                    new PPAGE('default_page/css/default_page.css')
                )));
                //  <link href="" rel="stylesheet">
                // <link href="" rel="stylesheet">
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