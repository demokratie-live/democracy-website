<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * saimod_sys_git Class provided by System as saimod to display git information on the project and system
 */
class saimod_sys_git extends \SYSTEM\SAI\SaiModule {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_git(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_GIT);
        $vars = array_merge($vars,self::getGitInfo());
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_git/tpl/saimod_sys_git.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Read Git Information
     * 
     * @return array Returns Array with Git Information
     */
    public static function getGitInfo(){
        \LIB\lib_git::php();
        $result = array('git_project' => '', 'git_system' => '');
        try{
            $repo = \GIT\Git::open(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH));
            $result['git_project'] = '<a href="http://www.mojotrollz.eu/git/hosting/commit/'.$repo->run('rev-parse HEAD').'" target="_blank">'.$repo->run('rev-parse --short HEAD').'</a><br/>';
            $result['git_project'] .= $repo->run('log -1 --pretty=%B');
            
        } catch (\Exception $ex) {
            $result['git_project'] = $ex->getMessage();
        }
        
        try{
            $repo = \GIT\Git::open(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH).\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL));
            $result['git_system'] .= '<li>';
            $result['git_system'] = '<a href="http://www.mojotrollz.eu/git/system/commit/'.$repo->run('rev-parse HEAD').'" target="_blank">'.$repo->run('rev-parse --short HEAD').'</a><br/>';
            $result['git_system'] .= $repo->run('log -1 --pretty=%B');
        } catch (\Exception $ex) {
            $result['git_system'] = $ex->getMessage();
        }
        return $result;
    }
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_git/tpl/menu.tpl'))->SERVERPATH());}
    
    /**
     * Returns if the Saimod is public(access for everyone)
     * 
     * @return boolean Returns if the Saimod is public(true) or not(false)
     */
    public static function right_public(){return false;}
    
    /**
     * Returns if the requesting user has the required rights to access the Saimod
     * 
     * @return boolean Returns true if the user can access
     */
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
}