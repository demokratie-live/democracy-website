<?php

namespace SYSTEM\SAI;

class saimod_sys_login extends \SYSTEM\SAI\SaiModule {    
    public static function html_content(){
        
        if( isset($_POST['username']) && isset($_POST['password']) &&                            
            \SYSTEM\SECURITY\Security::login(\SYSTEM\system::getSystemDBInfo(), $_POST['username'], sha1($_POST['password']), md5($_POST['password']))){            
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/login_success.tpl'), array());}            
        
        $vars = array();    
        $vars['message'] = \SYSTEM\SECURITY\Security::isLoggedIn() ? 'You are already logged in! Maybe you dont have the required rights ;-).' : 'Not logged in!';
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/login.tpl'), $vars);        
    }
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_sys_login">SYS Login</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){}
}