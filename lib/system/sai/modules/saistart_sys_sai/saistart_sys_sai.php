<?php
namespace SYSTEM\SAI;

class saistart_sys_sai extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saistart_sys_sai(){
        $vars = array('content' => self::html_content(), 'login' => self::html_login());
        $vars = array_merge($vars,  \SYSTEM\locale::getStrings(\SYSTEM\DBD\system_locale_string::VALUE_CATEGORY_BASIC),
                                    \SYSTEM\locale::getStrings(\SYSTEM\DBD\system_locale_string::VALUE_CATEGORY_SYSTEM_SAI),
                                    \SYSTEM\locale::getStrings(\SYSTEM\DBD\system_locale_string::VALUE_CATEGORY_SYSTEM_SAI_ERROR));
        return \SYSTEM\PAGE\replace::replaceFile(   \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/saistart.tpl'),$vars);}
    public static function html_li_menu(){return '<li class="active"><a href="#!start">'.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_TITLE).'</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){return true;}
    
    //public static function sai_mod__SYSTEM_SAI_saistart_sys_sai_flag_css(){}
    /*public static function sai_mod__SYSTEM_SAI_saistart_sys_sai_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/jqBootstrapValidation.js'),
                    \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/saistart_sys_sai.js'),
                    \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.md5.js'),
                    \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.sha1.js')
                 ));}    */
    public static function js(){
        return array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/jqBootstrapValidation.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/js/saistart_sys_sai.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.md5.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.sha1.js'));
    }
    
    protected static function html_content(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/content.tpl'), array());}
    
    protected static function html_login(){        
        return \SYSTEM\SECURITY\Security::isLoggedIn() ? \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/logout.tpl'), array()) : \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/login.tpl'), array());}
}