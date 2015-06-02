<?php
namespace SYSTEM\SAI;

class saimod_sys_git extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_git(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_GIT);
        $vars = array_merge($vars,self::getGitInfo());
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_git/tpl/saimod_sys_git.tpl'), $vars);
    }
    
    public static function getGitInfo(){
        $result = array('git_project' => '', 'git_system' => '');
        try{
            $repo = \SYSTEM\GIT\Git::open(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH));
        } catch (\Exception $ex) {
            $result['git_project'] = $ex->getMessage();
        }
        
        try{
            $repo = \SYSTEM\GIT\Git::open(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH).\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL));
        } catch (\Exception $ex) {
            $result['git_system'] = $ex->getMessage();
        }
        return $result;
    }
    
    private static function tablerow_class($cacheID){
        if($cacheID == 1){
            return 'info';}
            
        return 'success';                
    }
    
    //public static function html_li_menu(){return '<li><a id="menu_git" href="#!git"><span class="glyphicon glyphicon-saved" aria-hidden="true"></span>${sai_menu_git}</a></li>';}
    public static function html_li_menu(){return '</ul><ul class="nav navbar-nav navbar-right sai_divider_left"><li><a id="menu_git" href="#!git"><span class="glyphicon glyphicon-saved" aria-hidden="true"></span></a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    //public static function css(){}
    //public static function js(){}
}