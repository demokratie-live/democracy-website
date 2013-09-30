<?php

namespace SYSTEM\SAI;

class default_page extends \SYSTEM\PAGE\Page {
    
    private function menu_sys(){                
        $result = '';
        
        $mods = \SYSTEM\SAI\sai::getSysModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result;        
    }
    
    private function menu_proj(){                
        $result = '';
        
        $mods = \SYSTEM\SAI\sai::getModules();
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
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/sai.js').'" type="text/javascript"></script>'.
                  '<script src="https://www.google.com/jsapi" type="text/javascript"></script>'.
                  '<script src="https://maps.google.com/maps/api/js?v=3&sensor=false" type="text/javascript"></script>'.
                  '<script type="text/javascript">google.load("visualization", "1", {packages:["corechart"]});</script>'.
                  '<script type="text/javascript">var SAI_ENDPOINT = "'.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_BASEURL).'";</script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/tinymce/tinymce.min.js').'" type="text/javascript"></script>';
        return $result;
    }

    public function html(){

        $vars = array();
        $vars['css'] = $this->css();
        $vars['js'] = $this->js();

        $vars['menu_sys'] = $this->menu_sys();
        $vars['menu_proj'] = $this->menu_proj();
        $vars['navimg'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_NAVIMG);
        $vars['title'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_TITLE); //da_sense | Developer Center
        $vars['copyright'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_COPYRIGHT); //&copy; <a href="http://www.da-sense.de" target="_blank">da_sense</a>, TU Darmstadt 2013
        
        $vars = array_merge($vars,\SYSTEM\locale::getStrings(\SYSTEM\DBD\locale_string::VALUE_CATEGORY_SYSTEM_SAI));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'page/default_page/sai.tpl'), $vars);        
    }
}