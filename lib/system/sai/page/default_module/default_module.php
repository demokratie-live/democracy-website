<?php

namespace SYSTEM\SAI;

class default_module extends \SYSTEM\PAGE\Page {
    
    private $module = null;
    private $post_get = null;
    private $css = null;
    private $js = null;
    
    public function __construct($module,$post_get){
        $this->module = $module;        
        $this->post_get = $post_get;
        $this->css = isset($post_get['css']) ? $post_get['css'] : null;
        $this->js = isset($post_get['js']) ? $post_get['js'] : null;
    }
    
    public function html(){        
        if($this->module != null){
            $mods = \SYSTEM\SAI\sai::getInstance()->getAllModules();        
            if( $this->module &&
                \array_search($this->module, $mods) !== false &&
                (   \call_user_func(array($this->module, 'right_public')) ||
                    \call_user_func(array($this->module, 'right_right')))){
                if($this->css != null){
                    return \call_user_func(array($this->module, 'src_css'));}
                if($this->js != null){
                    return \call_user_func(array($this->module, 'src_js'));}
                return \call_user_func(array($this->module, 'html_content'),array($this->post_get));}
        }
        
        return "Could not find Module";
    }
}