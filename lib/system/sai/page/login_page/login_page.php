<?php

namespace SYSTEM\SAI;

class login_page extends \SYSTEM\PAGE\Page {
    public function html(){
              
        if( isset($_POST['username']) && isset($_POST['password']) &&                            
            \SYSTEM\SECURITY\Security::login(\SYSTEM\system::getSystemDBInfo(), $_POST['username'], sha1($_POST['password']), md5($_POST['password']))){
            //TODO connection            
            new \SYSTEM\LOG\DEPRECATED("connection");
            $default = new \SYSTEM\SAI\default_page();
            return $default->html();
        }

        $vars = array();
        $vars['js'] =   '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/css/libs/bootstrap.min.css').'" type="text/css" />'.
                        '<link rel="stylesheet" href="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/css/index.css').'" type="text/css" />';
        $vars['css'] =  '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/libs/jquery.min.js').'" type="text/javascript"></script>'.
                        '<script src="'.\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'page/default_page/js/libs/bootstrap.min.js').'" type="text/javascript"></script>';
        $vars['navimg'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_NAVIMG);
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'page/login_page/login.tpl'), $vars);
    }
}