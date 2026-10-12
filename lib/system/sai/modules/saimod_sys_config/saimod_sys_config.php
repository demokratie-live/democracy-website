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
 * saimod_sys_config Class provided by System as saimod to display the config
 */
class saimod_sys_config extends \SYSTEM\SAI\sai_module {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_config(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_CONFIG);
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/saimod_sys_config.tpl'))->SERVERPATH(),$vars);
    }
    
    /**
     * Generate HTML for Menu Basics
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_config_action_basics(){
        $result = '';
        $result .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_ERRORREPORTING,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_ERRORREPORTING',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_ERRORREPORTING)));
        $result .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)));
        $result .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEPATH)));
        $result .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL)));
        $result .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT)));
        $result .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS',
                                    'value' =>implode(',',\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS))));
        $result .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG)));
    
        return $result;
    }
    
    /**
     * Generate HTML for Menu Database
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_config_action_database(){
        $result = '';
        $result .=\SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE)));
        $result .=\SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_HOST,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_HOST',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_HOST)));
        $result .=\SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PORT,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PORT',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PORT)));
        $result .=\SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_USER,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_USER',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_USER)));
        $result .=\SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PASSWORD,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PASSWORD',
                                    'value' =>'&lt;hidden&gt;'));
        $result .=\SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                            array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_DBNAME,
                                    'name' =>'\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_DBNAME',
                                    'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_DBNAME)));
    
        return $result;
    }
    
    /**
     * Generate HTML for Menu SAI
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_config_action_sai(){
        $result = '';
        $result .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/config_tr.tpl'))->SERVERPATH(),
                        array(  'id' =>\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT,
                                'name' =>'\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT',
                                'value' =>\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT)));
        return $result;
    }
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function menu(){
        return new sai_module_menu( 10, sai_module_menu::POISITION_LEFT, sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_config/tpl/menu.tpl'))->SERVERPATH()));}
    
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
        return array(new \SYSTEM\PSAI('modules/saimod_sys_config/js/saimod_sys_config.js'));}
}