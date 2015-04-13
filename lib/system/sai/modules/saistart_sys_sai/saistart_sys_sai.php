<?php
namespace SYSTEM\SAI;

class saistart_sys_sai extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saistart_sys_sai(){
        $vars = array('content' => self::html_content());
        $vars = array_merge($vars,  \SYSTEM\locale::getStrings(\SYSTEM\DBD\system_locale_string::VALUE_CATEGORY_BASIC),
                                    \SYSTEM\locale::getStrings(\SYSTEM\DBD\system_locale_string::VALUE_CATEGORY_SYSTEM_SAI),
                                    \SYSTEM\locale::getStrings(\SYSTEM\DBD\system_locale_string::VALUE_CATEGORY_SYSTEM_SAI_ERROR));
        return \SYSTEM\PAGE\replace::replaceFile(   \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/saistart.tpl'),$vars);}
    public static function html_li_menu(){return '<li class="active"><a id="menu_start" href="#">'.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_TITLE).'</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){return true;}
    
    public static function css(){
        return array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/css/saistart_sys_sai.css'));}
    public static function js(){
        return array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/jqBootstrapValidation.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/js/saistart_sys_sai.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.md5.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.sha1.js'));
    }
    
    protected static function html_content(){
        if(!\SYSTEM\SECURITY\Security::isLoggedIn()){
            $vars = array();
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/content.tpl'),$vars);
        }
        $vars = array();
        $vars['project_name'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT);
        $vars['project_url'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL);
        $vars['analytics'] = \SYSTEM\SAI\saimod_sys_log::analytics();
        $user = \SYSTEM\SECURITY\Security::getUser();
        $vars['username'] = $user->username;
        $vars['locale'] = $user->locale;
        $vars['isadmin']  = \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) ? "yes" : "no";
        $vars = array_merge($vars,\SYSTEM\SAI\saimod_sys_todo::statistics());
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/content_loggedin.tpl'), $vars);
    }
}