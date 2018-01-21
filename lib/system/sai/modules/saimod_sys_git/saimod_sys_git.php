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
        $vars['panels'] = self::getGitInfo();
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_git/tpl/saimod_sys_git.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Read Git Information
     * 
     * @return array Returns Array with Git Information
     */
    public static function getGitInfo(){
        \LIB\lib_git::php();
        $gits = array(array('title' => \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT), 'path' => \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH)),
                      );//array('title' => 'Current SYSTEM Version', 'path' => \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH).\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL)));
        $result = '';
        
        $i = 0;
        while($i < count($gits)){
            $git = $gits[$i];
            try{
                $repo = \GIT\Git::open($git['path']);
                $git['git_project'] = $repo->run('ls-remote --get-url').'<br><br>';
                $git['git_project'] .= nl2br(htmlentities($repo->run('log --date=relative --graph -3')));
                
                $subs = explode("\n",$repo->run('config --file .gitmodules --get-regexp path'));
                foreach($subs as $sub){
                    if($sub == ''){
                        continue;}
                    $gits[] = array('title' => $git['title'].'/'.explode('.',$sub)[1],
                                    'path'  => $git['path'].preg_replace('/\s+/', '', explode('path ',$sub)[1]).'/');
                    //echo $git['title'].'/'.explode('.',$sub)[1].' - '.$git['path'].preg_replace('/\s+/', '', explode('path ',$sub)[1]).'/<br>';
                }

            } catch (\Exception $ex) {
                $git['git_project'] = 'Error: '.$git['path'].' '.$ex->getMessage();
            }
            $i++;
            $result .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_git/tpl/saimod_sys_git_panel.tpl'))->SERVERPATH(), $git);
        }
        
        return $result;
    }
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function menu(){
        return new sai_module_menu( 1,
                                    sai_module_menu::POISITION_RIGHT,
                                    sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_git/tpl/menu.tpl'))->SERVERPATH()));}
    
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