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
 * saimod_sys_cron Class provided by System as saimod to manage the system_cron table
 */
class saimod_sys_cron extends \SYSTEM\SAI\SaiModule {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cron(){
        $vars['content'] = '';
        $vars['last_visit'] = \SYSTEM\time::time_ago_string(strtotime(\SYSTEM\CRON\cron::last_visit()));
        $res = \SYSTEM\SQL\SYS_SAIMOD_CRON::QQ();
        $i = 0;
        while($r = $res->next()){
            $r['selected_0'] = $r['selected_1'] = $r['selected_2'] = $r['selected_3'] = '';
            $r['next'] = \SYSTEM\time::time_in_string(\SYSTEM\CRON\cron::next($r['class']));
            $r['last_run'] = \SYSTEM\time::time_ago_string(\strtotime($r['last_run']));
            $r['selected_'.$r['status']] = 'selected';
            $r['i'] = $i++;
            $vars['content'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_cron/tpl/list_entry.tpl'))->SERVERPATH(), $r);}   
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_CRON), \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_TIME));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_cron/tpl/tabs.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Change Status of a Cron Entry
     * 
     * @param string $cls Classname of the Cron
     * @param int $status New Status
     * @return JSON Returns json with status true of error
     */
    public static function sai_mod__system_sai_saimod_sys_cron_action_change($cls,$status){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\SQL\SYS_SAIMOD_CRON_CHANGE::QI(array($status, $cls));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__system_sai_saimod_sys_cron_action_run($cls){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        return \SYSTEM\CRON\cron::run_class($cls);
    }
    
    /**
     * Add a new Cron Entry
     * 
     * @param string $cls Classname of the Cron
     * @param int $min Minute Value
     * @param int $hour Hour Value
     * @param int $day Day Value
     * @param int $day_week Day of the Week Value
     * @param int $month Month Value
     * @return JSON Returns json with status true of error
     */
    public static function sai_mod__system_sai_saimod_sys_cron_action_add($cls,$min,$hour,$day,$day_week,$month){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        if(!\SYSTEM\CRON\cron::check($cls)){
            throw new \SYSTEM\LOG\ERROR("Given Class is not a CronJob");}
        \SYSTEM\SQL\SYS_SAIMOD_CRON_ADD::QI(array($cls,$min,$hour,$day,$day_week,$month));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Delete a Cron Entry
     * 
     * @param string $cls Classname of the Cron
     * @return JSON Returns json with status true of error
     */
    public static function sai_mod__system_sai_saimod_sys_cron_action_del($cls){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\SQL\SYS_SAIMOD_CRON_DEL::QI(array($cls));
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return '<li><a id="menu_cron" data-toggle="tooltip" data-placement="bottom" title="${sai_menu_cron}" href="#!cron"><span class="glyphicon glyphicon-time" aria-hidden="true"></span></a></li>';}    
    
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
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_CRON);}
    
    /**
     * Get all css System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods css
     */
    public static function css(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_cron/css/saimod_sys_cron.css'));}
        
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_cron/js/saimod_sys_cron.js'));}
}