<?php

namespace SYSTEM\SAI;

class default_page extends \SYSTEM\PAGE\Page {
    
    private static function menu_sys(){                
        $result = '';
        
        $mods = \SYSTEM\SAI\sai::getSysModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result;        
    }
    
    private static function menu_proj(){
        $result = '';        
        $mods = \SYSTEM\SAI\sai::getModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result;        
    }
    
    private static function menu_start(){
        $mod = \SYSTEM\SAI\sai::getStartModule();        
        if(\call_user_func(array($mod, 'right_public')) ||
            \call_user_func(array($mod, 'right_right'))){
            return \call_user_func(array($mod, 'html_li_menu'));}        
        throw new \SYSTEM\LOG\ERROR('Your SAI-Start-Module haz a Problem - either it does not exist or it is not public - which is required!');}

    private static function css(){
        $result = '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/css/libs/bootstrap.min.css').'" type="text/css" />'.
                  '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/css/index.css').'" type="text/css" />'.
                  '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/css/sai_table.css').'" type="text/css" />';        
        return $result;
    }

    private static function js(){
        $result = '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/js/libs/jquery.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/js/libs/bootstrap.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/js/sai.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/js/lang_switcher.js').'" type="text/javascript"></script>'.
                  '<script src="https://www.google.com/jsapi" type="text/javascript"></script>'.
                  '<script src="https://maps.google.com/maps/api/js?v=3&sensor=false" type="text/javascript"></script>'.
                  '<script type="text/javascript">google.load("visualization", "1", {packages:["corechart"]});</script>'.
                  '<script type="text/javascript">var SAI_ENDPOINT = "'.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_BASEURL).'";</script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/tinymce/tinymce.min.js').'" type="text/javascript"></script>';
        return $result;
    }
    
    private static function lang_switcher(){
        $result = '';
        $langs = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);
        if(in_array('deDE', $langs)){
            $result .= '<a href="javascript:switchLocale(\'deDE\');"><img src="${PATH_LOCAL_IMG}flag_germany.png" alt="Deutsch"></a>&nbsp;';
        }
        
        if(in_array('enUS', $langs)){
            $result .= '<a href="javascript:switchLocale(\'enUS\');"><img src="${PATH_LOCAL_IMG}flag_usa.png" alt="English"></a>';
        }
        return $result;
    }

    public function html(){

        $vars = array();
        $vars['css'] = $this->css();
        $vars['js'] = $this->js();

        $vars['menu_start'] = self::menu_start();
        $vars['menu_sys'] = self::menu_sys();
        $vars['menu_proj'] = self::menu_proj();
        $vars['navimg'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_NAVIMG);
        $vars['title'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_TITLE);
        $vars['copyright'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_COPYRIGHT);
        $vars['lang_switcher'] = self::lang_switcher();
        $vars['PATH_LOCAL_IMG'] = \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/img/');
        
        $vars = array_merge($vars,\SYSTEM\locale::getStrings(\SYSTEM\DBD\system_locale_string::VALUE_CATEGORY_SYSTEM_SAI));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'page/sai.tpl'), $vars);        
    }
}