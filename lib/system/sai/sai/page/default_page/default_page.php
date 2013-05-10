<?php

namespace SYSTEM\SAI;

class default_page extends \SYSTEM\PAGE\Page {

    private $module = NULL;
    private $pg = NULL;

    public function __construct($module = NULL, $pg = NULL){
        $this->module = \str_replace('.', '\\', $module);
        $this->pg = $pg;}

    private function menu(){        
        $mods = \SYSTEM\SAI\sai::getInstance()->getModules();
        
        $result = '<li><a href="#" id="SAI">SAI</a></li>';
        foreach($mods as $mod){            
            $result .= \call_user_func(array($mod, 'html_li_menu'));}
        return $result.'</ul>';        
    }

    private function content(){
        $mods = \SYSTEM\SAI\sai::getInstance()->getModules();        
        if( $this->module &&
            \array_search($this->module, $mods) !== false){
            return \call_user_func(array($this->module, 'html_content'),array($this->pg));}

        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'sai/page/default_page/carousel.tpl'), array());
    }

    private function css(){        
        $result = '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'sai/page/default_page/css/libs/bootstrap.min.css').'" type="text/css" />'.
                  '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'sai/page/default_page/css/index.css').'" type="text/css" />';;

        $mods = \SYSTEM\SAI\sai::getInstance()->getModules();
        if( $this->module &&
            \array_search($this->module, $mods) !== false){
            $result .= \call_user_func(array($this->module, 'html_css'));}

        return $result;
    }

    private function js(){
        $result = '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'sai/page/default_page/js/libs/jquery.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'sai/page/default_page/js/libs/bootstrap.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'sai/page/default_page/js/index.js').'" type="text/javascript"></script>';

        $mods = \SYSTEM\SAI\sai::getInstance()->getModules();        
        if( $this->module &&
            \array_search($this->module, $mods) !== false){
            $result .= \call_user_func(array($this->module, 'html_js'));}

        return $result;
    }

    public function html(){

        $vars = array();
        $vars['css'] = $this->css();
        $vars['js'] = $this->js();

        $vars['menu'] = $this->menu();

        //TODO
        new \SYSTEM\LOG\DEPRECATED();
        if($this->module != NULL){
            return $this->content();}

        //$vars['PATH_IMG'] = SYSTEM\WEBPATH(new PPAGE(),'default_developer/img/');
        //$vars['PATH_LIB'] = SYSTEM\WEBPATH(new PLIB());
        //$vars['PATH_JS'] = SYSTEM\WEBPATH(new PJS());
        //$vars = array_merge($vars, SYSTEM\locale::getStrings(\SYSTEM\DBD\locale_string::VALUE_CATEGORY_DASENSE));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'sai/page/default_page/sai.tpl'), $vars);        
    }
}