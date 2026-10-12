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
 * saimod_sys_cache Class provided by System as saimod to manage the system_cache table
 */
class saimod_sys_cache extends \SYSTEM\SAI\sai_module {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cache(){
        $vars = array();
        $vars['count'] = \SYSTEM\SQL\SYS_SAIMOD_CACHE_COUNT::Q1()['count'];
        $vars['entries'] = '';
        $res = \SYSTEM\SQL\SYS_SAIMOD_CACHE::QQ();
        while($r = $res->next()){
            $r['class'] = self::tablerow_class($r['cache']);
            $vars['entries'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_cache/tpl/saimod_sys_cache_entry.tpl'))->SERVERPATH(), $r);}
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_CACHE));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_cache/tpl/saimod_sys_cache.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Clear the Cache
     * 
     * @return json Returns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cache_action_clear(){
        return \SYSTEM\SQL\SYS_SAIMOD_CACHE_CLEAR::QI() ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();}
    
    /**
     * internal function to map CacheID to a tr class(color)
     * 
     * @param int $cacheID Id of the Cache
     * @return string Returns table row class
     */
    private static function tablerow_class($cacheID){
        if($cacheID == 1){
            return 'info';}
        return 'success';}
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function menu(){
        return new sai_module_menu( 10,
                                    sai_module_menu::POISITION_LEFT,
                                    sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_cache/tpl/menu.tpl'))->SERVERPATH()));}
    
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
        return array(new \SYSTEM\PSAI('modules/saimod_sys_cache/js/saimod_sys_cache.js'));}
}