<?php

namespace SYSTEM\SAI;

class saimod_sys_login extends \SYSTEM\SAI\SaiModule {
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login(){              
        $vars = array();    
        $vars['login'] = 'Login';
        $vars['logout'] = 'Logout';
        $vars['loginUsername'] = 'Username';
        $vars['loginPassword'] = 'Password';
        $vars['login_username_too_short'] = 'Username to short.';
        $vars['login_password_too_short'] = 'Password to short.';
        $vars['isadmin']  = \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) ? "yes" : "no";
        $vars = array_merge($vars, \SYSTEM\locale::getStrings(\SYSTEM\DBD\locale_string::VALUE_CATEGORY_SYSTEM_SAI));
        
        if(\SYSTEM\SECURITY\Security::isLoggedIn()){
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/logout.tpl'), $vars);        
        } else {
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/login.tpl'), $vars);}
    }

    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_logout(){
        return \SYSTEM\SECURITY\Security::logout();}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_login($username,$password_sha,$password_md5){
        return \SYSTEM\SECURITY\Security::login($username, $password_sha, $password_md5);}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_register($username,$password,$email, $locale = 'deDE'){
        return \SYSTEM\SECURITY\Security::create($username, $password, $email, $locale);}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_userinfo(){
        $user = \SYSTEM\SECURITY\Security::getUser();
        if(!$user){
            return;}
        return json_encode(array(   'username' => $user->username,
                                    'email' => $user->email,
                                    'joindate' => $user->creationDate,
                                    'locale' => $user->locale,
                                    'last_active' => $user->lastLoginDate));        
    }        
        
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_registerform(){
        $vars = \SYSTEM\locale::getStrings(\SYSTEM\DBD\locale_string::VALUE_CATEGORY_SYSTEM_SAI);
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/register.tpl'), $vars);}

    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_login">Login</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){return true;}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/jqBootstrapValidation.js'),
                    \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_login/sai_sys_login_submit.js'),
                    \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.md5.js'),
                    \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.sha1.js')
                 ));}
}