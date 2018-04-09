<?php
class default_invite implements \SYSTEM\PAGE\DefaultPage {
    public static function js(){        
        return  \SYSTEM\HTML\html::script(\SYSTEM\CACHE\cache_js::minify(array(
                    \LIB\lib_jquery::js(),
                    \LIB\lib_bootstrap::js(),
                    new PPAGE('default_invite/js/default_invite.js')
                )));
    }
    
    public static function css(){
        return  \SYSTEM\HTML\html::link(\SYSTEM\CACHE\cache_css::minify(array(
                    \LIB\lib_bootstrap::css(),
                    \LIB\lib_font_awesome::css(),
                    new PPAGE('default_invite/css/default_invite.css')
                )));
    }
    
    public function html($_escaped_fragment_ = null){
        $vars = array();
        $vars['js'] = '';
        if(!$_escaped_fragment_){
            $vars['js'] = self::js();}
        $vars['css'] = self::css();
        
        //Code
        $code = null;
        if(array_key_exists('code', $_GET)){
            $code =  $_GET['code'];}
        $vars['code'] = $code;
        $vars['code_valid'] = api_democracy::validate_code($code);
            
        $vars = array_merge($vars,  \SYSTEM\PAGE\text::tag('democracy'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_invite/tpl/default_invite.tpl'))->SERVERPATH(), $vars);
    }
}