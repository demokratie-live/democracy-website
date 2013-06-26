<?php

namespace SYSTEM\SAI;

class saimod_sys_login extends \SYSTEM\SAI\SaiModule {    
    public static function html_content(){
        
       /* 
        if( isset($_POST['username']) && isset($_POST['password']) &&                            
            \SYSTEM\SECURITY\Security::login(\SYSTEM\system::getSystemDBInfo(), $_POST['username'], sha1($_POST['password']), md5($_POST['password']))){            
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/login_success.tpl'), array());}            
         */           
        
        $vars = array();    
        $vars['login'] = 'Login';
        $vars['logout'] = 'Logout';
        $vars['loginUsername'] = 'Username';
        $vars['loginPassword'] = 'Password';
        $vars['login_username_too_short'] = 'Username to short.';
        $vars['login_password_too_short'] = 'Password to short.';
        
        if(\SYSTEM\SECURITY\Security::isLoggedIn()){
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/logout.tpl'), $vars);        
        } else {
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/login.tpl'), $vars);}
    }
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_sys_login">Login</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){return true;}
    
    public static function src_css(){}
    public static function src_js(){return \SYSTEM\LOG\JsonResult::toString(
                                    array(  \SYSTEM\WEBPATH(new \PPAGE(),'default_page/js/jqBootstrapValidation.js'),
                                            \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/sai_sys_login_submit.js'),
                                            \SYSTEM\WEBPATH(new \PPAGE(),'default_page/js/crypto/jquery.md5.js'),
                                            \SYSTEM\WEBPATH(new \PPAGE(),'default_page/js/crypto/jquery.sha1.js')
                                            ));}
}