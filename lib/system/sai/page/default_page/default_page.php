<?php

namespace SYSTEM\SAI;

class default_page extends \SYSTEM\PAGE\Page {
    
    private function menu_sys(){                
        $result = '';
        
        $mods = \SYSTEM\SAI\sai::getInstance()->getSysModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result;        
    }
    
    private function menu_proj(){                
        $result = '';
        
        $mods = \SYSTEM\SAI\sai::getInstance()->getModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result;        
    }

    private function css(){        
        $result = '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/css/libs/bootstrap.min.css').'" type="text/css" />'.
                  '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/css/index.css').'" type="text/css" />';        
        return $result;
    }

    private function js(){
        $result = '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/libs/jquery.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/libs/bootstrap.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/loadcssjs.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/index.js').'" type="text/javascript"></script>';
                  '<script src="https://www.google.com/jsapi" type="text/javascript"></script>'.
                  '<script src="https://maps.google.com/maps/api/js?v=3&sensor=false" type="text/javascript"></script>'.
                  '<script type="text/javascript">google.load("visualization", "1", {packages:["corechart"]});</script>';        
        return $result;
    }

    public function html(){

        $vars = array();
        $vars['css'] = $this->css();
        $vars['js'] = $this->js();

        $vars['menu_sys'] = $this->menu_sys();
        $vars['menu_proj'] = $this->menu_proj();
        $vars['navimg'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_NAVIMG);
        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'page/default_page/sai.tpl'), $vars);        
    }
}