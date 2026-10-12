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
 * saimod_sys_docu Class provided by System as saimod to display the code documentation
 */
class saimod_sys_docu extends \SYSTEM\SAI\sai_module {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @param string $cat Docu selected
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu($cat = '\SYSTEM\DOCU\docu_system'){
        $docu_packages = \SYSTEM\DOCU\docu::getAll();
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_DOCU);
        $vars['iframesrc'] = \SYSTEM\DOCU\docu::get($cat)['outpath']->WEBPATH(false);
        $vars['tabopts'] = '';
        foreach($docu_packages as $package){
            $config = \SYSTEM\DOCU\docu::get($package);
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_docu/tpl/tabopt.tpl'))->SERVERPATH(), array('tab_id' => $package,'tab_id_pretty' => $config['title'], 'active' => $package == $cat ? 'active' : ''));}
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_docu/tpl/saimod_sys_docu.tpl'))->SERVERPATH(), $vars);
    }  
    
    /**
     * Generate the HTML Documentation
     * 
     * @return json Returns jsn with log
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_action_generate(){
        $result = array();
        $packages = \SYSTEM\DOCU\docu::getAll();
        foreach($packages as $package){
            $result[] = \SYSTEM\DOCU\docu::generate($package);}
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Generate the MD Documentation based on the HTML Documentation
     * 
     * @return null Returns null
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_action_generate_md(){
        $result = array();
        $packages = \SYSTEM\DOCU\docu::getAll();
        foreach($packages as $package){
            $result[] = \SYSTEM\DOCU\docu::generate_md($package);}
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function menu(){
        return new sai_module_menu( 10,
                                    sai_module_menu::POISITION_RIGHT,
                                    sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_docu/tpl/menu.tpl'))->SERVERPATH()));}
    
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
    
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_docu/js/saimod_sys_docu.js'));}
}