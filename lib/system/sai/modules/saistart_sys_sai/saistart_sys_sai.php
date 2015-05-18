<?php
namespace SYSTEM\SAI;

class saistart_sys_sai extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saistart_sys_sai(){
        $vars = array_merge(array(  'content' => self::html_content()),
                                    \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_START));
        return \SYSTEM\PAGE\replace::replaceFile(   \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/saistart.tpl'),$vars);}
    public static function html_li_menu(){return '<li class="active"><a id="menu_start" href="#">${sai_menu_start}</a></li>';}
    public static function right_public(){return true;}    
    public static function right_right(){return true;}
    
    public static function css(){
        return array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/css/saistart_sys_sai.css'));}
    public static function js(){
        return array(   \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/js/saistart_sys_sai.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.md5.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/crypto/jquery.sha1.js'),
                        \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'js/jqBootstrapValidation.js'));
    }
    
    protected static function html_content(){
        if(!\SYSTEM\SECURITY\Security::isLoggedIn() || !\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
            return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/content.tpl'));}
        $vars = array();
        $vars['project_name'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT);
        $vars['project_url'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL);
        $vars['analytics'] = \SYSTEM\SAI\saimod_sys_log::analytics();
        $user = \SYSTEM\SECURITY\Security::getUser();
        $vars['username'] = $user->username;
        $vars['locale'] = $user->locale;
        $vars['isadmin']  = \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) ? "yes" : "no";
        $vars = array_merge(    $vars,
                                \SYSTEM\SAI\saimod_sys_todo::statistics(),
                                \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_START),
                                \SYSTEM\SAI\saimod_sys_git::getGitInfo());
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saistart_sys_sai/tpl/content_loggedin.tpl'), $vars);
    }
}