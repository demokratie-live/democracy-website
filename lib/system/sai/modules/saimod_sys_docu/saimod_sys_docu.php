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
class saimod_sys_docu extends \SYSTEM\SAI\SaiModule {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu(){
        $phpdocconfigs = \SYSTEM\DOCU\docu::getAll();
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_DOCU);
        $vars['tabopts'] = '';
        foreach($phpdocconfigs as $config){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_docu/tpl/tabopt.tpl'))->SERVERPATH(), array('tab_id' => $config['id'],'tab_id_pretty' => $config['title']));}
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_docu/tpl/saimod_sys_docu.tpl'))->SERVERPATH(), $vars);
    }  
    
    /**
     * Generate the HTML Documentation
     * 
     * @return null Returns null
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_action_generate(){
        \LIB\lib_phpdocumentor::php();
        $configs = \SYSTEM\DOCU\docu::getAll();
        foreach($configs as $config){
            \phpdocumentor::run(    $config['inpath'],
                                    $config['outpath'],
                                    $config['cachepath'],
                                    $config['ignore'],
                                    $config['title'],
                                    $config['sourcecode'],
                                    $config['parseprivate']);}
    }
    
    /**
     * Generate the MD Documentation based on the HTML Documentation
     * 
     * @return null Returns null
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_action_generate_md(){
        \LIB\lib_phpdoc_md::php();
        $configs = \SYSTEM\DOCU\docu::getAll();
        foreach($configs as $config){
            \phpdoc_md::run(    $config['inpath_md'],
                                $config['outpath_md']);}
    }
    
    /**
     * Generate the HTML for the Iframe of the selected Category
     * 
     * @param string $cat Category of the Documentation to be presented
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_docu_action_cat($cat = 'system'){
        $vars = array('iframesrc' => \SYSTEM\DOCU\docu::get($cat)['outpath']->WEBPATH(false));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_docu/tpl/saimod_sys_docu_iframe.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_docu/tpl/menu.tpl'))->SERVERPATH());}
    
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