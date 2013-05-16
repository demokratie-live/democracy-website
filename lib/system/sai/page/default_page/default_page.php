<?php

namespace SYSTEM\SAI;

class default_page extends \SYSTEM\PAGE\Page {
    
    private function menu(){                
        $result = '';
        
        $mods = \SYSTEM\SAI\sai::getInstance()->getModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result.'</ul>';        
    }

    private function css(){        
        $result = '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/css/libs/bootstrap.min.css').'" type="text/css" />'.
                  '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/css/index.css').'" type="text/css" />';        
        return $result;
    }

    private function js(){
        //if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo() , \SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
        //    $login = new \SYSTEM\SAI\login_page();
        //    return $login->html();}
        $result = '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/libs/jquery.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/libs/bootstrap.min.js').'" type="text/javascript"></script>'.
                  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/index.js').'" type="text/javascript"></script>';
        return $result;
    }

    public function html(){

        $vars = array();
        $vars['css'] = $this->css();
        $vars['js'] = $this->js();

        $vars['menu'] = $this->menu();
        $vars['navimg'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_NAVIMG);
        

        //$vars['PATH_IMG'] = SYSTEM\WEBPATH(new PPAGE(),'default_developer/img/');
        //$vars['PATH_LIB'] = SYSTEM\WEBPATH(new PLIB());
        //$vars['PATH_JS'] = SYSTEM\WEBPATH(new PJS());
        //$vars = array_merge($vars, SYSTEM\locale::getStrings(\SYSTEM\DBD\locale_string::VALUE_CATEGORY_DASENSE));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'page/default_page/sai.tpl'), $vars);        
    }
}