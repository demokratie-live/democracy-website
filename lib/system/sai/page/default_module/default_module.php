<?php

namespace SYSTEM\SAI;

class default_module extends \SYSTEM\PAGE\Page {
    
    private $module = null;
    private $post_get = null;
    
    public function __construct($module,$post_get){
        $this->module = $module;        
        $this->post_get = $post_get;}
    
    public function html(){        
        if($this->module != null){
            $mods = \SYSTEM\SAI\sai::getInstance()->getModules();        
            if( $this->module &&
                \array_search($this->module, $mods) !== false &&
                (   \call_user_func(array($this->module, 'right_public')) ||
                    \call_user_func(array($this->module, 'right_right')))){
                return \call_user_func(array($this->module, 'html_content'),array($this->post_get));}
        }
        
        return "Could not find Module";
    }
}