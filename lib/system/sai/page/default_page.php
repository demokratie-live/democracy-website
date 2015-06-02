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
        $result =   '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/css/libs/bootstrap.min.css').'" type="text/css" />'.
                    '<link rel="stylesheet" href="./sai.php?call=files&amp;cat=sys&amp;id=system.css" type="text/css" />'.
                    '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/css/sai.css').'" type="text/css" />';
        return $result;
    }

    private static function js(){
        $result = '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/js/libs/jquery.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/js/libs/bootstrap.min.js').'" type="text/javascript"></script>'.
                  '<script type="text/javascript" language="JavaScript" src="./sai.php?call=files&amp;cat=sys&amp;id=system.js"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/js/sai.js').'" type="text/javascript"></script>'.
                  '<script src="https://www.google.com/jsapi" type="text/javascript"></script>'.
                  '<script src="https://maps.google.com/maps/api/js?v=3&amp;sensor=false" type="text/javascript"></script>'.
                  '<script type="text/javascript">google.load("visualization", "1", {packages:["corechart"]});</script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_text/tinymce/tinymce.min.js').'" type="text/javascript"></script>';
        return $result;
    }

    public function html($_escaped_fragment_ = NULL){
        $vars = array();
        $vars['css'] = self::css();
        $vars['js'] = '';
        if(!$_escaped_fragment_){
            $vars['js'] = self::js();}
        $vars['menu_languages'] = \SYSTEM\SAI\saimod_sys_langswitcher::lang_menu('./sai.php');   
        $vars['menu_start'] = self::menu_start();
        $vars['menu_sys'] = self::menu_sys();
        $vars['menu_proj'] = self::menu_proj();
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_DEFAULT),
                            array(  'project' => \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT),
                                    'project_url' => \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'page/tpl/sai.tpl'), $vars);        
    }
}