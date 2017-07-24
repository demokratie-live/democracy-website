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
 * saimod_sys_sai Class provided by System as start saimod to display an overview over the Project
 */
class saistart_sys_sai extends \SYSTEM\SAI\SaiModule {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saistart_sys_sai(){
        if(!\SYSTEM\SECURITY\security::isLoggedIn() || !\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
            return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saistart_sys_sai/tpl/content_loggedout.tpl'))->SERVERPATH(),\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_START));}
        //create timestamp
        $week_number = date("W", time());
        $date = date("l M Y", time());
        
        $vars = array();
        $vars['week_number'] = $week_number;
        $vars['date'] = $date;
        $vars['project_name'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT);
        $vars['project_url'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL);
        $vars['analytics'] = \SYSTEM\SAI\saimod_sys_log::analytics();
        $user = \SYSTEM\SECURITY\security::getUser();
        $vars['username'] = $user->username;
        $vars['locale'] = $user->locale;
        $vars['isadmin']  = \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) ? "yes" : "no";
        $vars['userstats'] = '';
        $userstats = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_USERS::QQ();
        while($stat = $userstats->next()){
            $stat['perc'] = round($stat['state_closed'] / ($stat['state_open']+$stat['state_closed']),2)*100;
            $vars['userstats'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/todo_stats_users_entry.tpl'))->SERVERPATH(), $stat);
        }
        
        \LIB\lib_git::php();
        try{
            $repo = \GIT\Git::open(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH));
            $vars['git'] = $repo->run('ls-remote --get-url').'<br><br>';
            $vars['git'] .= nl2br(htmlentities($repo->run('log --date=relative -1')));
        } catch (\Exception $ex) {
            $vars['git'] = 'Error: '.$ex->getMessage();
        }
        
        $vars = array_merge(    $vars,
                                \SYSTEM\SAI\saimod_sys_todo::statistics(),
                                \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_START));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saistart_sys_sai/tpl/content_loggedin.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate Menu-Link for the Saimod
     * 
     * @return string Returns Html Menu for the Saimod
     */
    public static function html_menu(){return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saistart_sys_sai/tpl/menu.tpl'))->SERVERPATH());}
    
    /**
     * Returns if the Saimod is public(access for everyone)
     * 
     * @return boolean Returns if the Saimod is public(true) or not(false)
     */
    public static function right_public(){return true;}
    
    /**
     * Returns if the requesting user has the required rights to access the Saimod
     * 
     * @return boolean Returns true if the user can access
     */
    public static function right_right(){return true;}
    
    /**
     * Get all css System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods css
     */
    public static function css(){
        return array(new \SYSTEM\PSAI('modules/saistart_sys_sai/css/saistart_sys_sai.css'));}
        
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(   new \SYSTEM\PSAI('modules/saistart_sys_sai/js/saistart_sys_sai.js'),
                        \LIB\lib_jqbootstrapvalidation::js());
    }
}