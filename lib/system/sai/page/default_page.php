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
 * Sai default_page Class provided by System to construct the Sai Environment
 */
class default_page implements \SYSTEM\PAGE\DefaultPage {
    /**
     * Get the System Saimod Menu
     *
     * @return string Returns html of the System Saimod Menu.
     */
    private static function menu_sys(){                
        $result = '';
        $mods = \SYSTEM\SAI\sai::getSysModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result;        
    }
    
    /**
     * Get the Users Saimod Menu
     *
     * @return string Returns html of the Users Saimod Menu.
     */
    private static function menu_proj(){
        $result = '';        
        $mods = \SYSTEM\SAI\sai::getModules();
        foreach($mods as $mod){
            if(\call_user_func(array($mod, 'right_public')) ||
               \call_user_func(array($mod, 'right_right'))){
                $result .= \call_user_func(array($mod, 'html_li_menu'));}
        }
        return $result;        
    }
    
    /**
     * Get the Start Saimod Menu
     *
     * @return string Returns html of the Start Saimod Menu.
     */
    private static function menu_start(){
        $mod = \SYSTEM\SAI\sai::getStartModule();        
        if(\call_user_func(array($mod, 'right_public')) ||
            \call_user_func(array($mod, 'right_right'))){
            return \call_user_func(array($mod, 'html_menu'));}        
        throw new \SYSTEM\LOG\ERROR('Your SAI-Start-Module has a Problem - either it does not exist or it is not public - which is required!');}

    /**
     * Get css links for the Default Page
     *
     * @return string Returns html of the Sai css includes
     */
    public static function css(){
        return  \SYSTEM\HTML\html::link(\LIB\lib_bootstrap::css()->WEBPATH(false)).
                \SYSTEM\HTML\html::link(\SYSTEM\CACHE\cache_css::minify(
                                        array(  \LIB\lib_tablesorter::css(),
                                                \LIB\lib_system::css(),
                                                new \SYSTEM\PSAI('page/css/sai_classes.css'),
                                                new \SYSTEM\PSAI('page/css/sai.css'))));
    }

    /**
     * Get js links for the Default Page
     *
     * @return string Returns html of the Sai js includes
     */
    public static function js(){
        return  \SYSTEM\HTML\html::script(  \SYSTEM\CACHE\cache_js::minify(
                                            array(  \LIB\lib_jquery::js(),
                                                    \LIB\lib_bootstrap::js(),
                                                    \LIB\lib_tablesorter::js(),
                                                    \LIB\lib_bootstrap_growl::js(),
                                                    \LIB\lib_system::js(),
                                                    new \SYSTEM\PSAI('page/js/sai.js')))).
                \SYSTEM\HTML\html::script(  \LIB\lib_tinymce::js()->WEBPATH(false)).
                \SYSTEM\HTML\html::script('https://www.google.com/jsapi?autoload=%7B%22modules%22%3A%5B%7B%22name%22%3A%22visualization%22%2C%22version%22%3A%221.0%22%2C%22packages%22%3A%5B%22corechart%22%5D%7D%5D%7D');
    }

    /**
     * Get Sai Default Page HTML
     *
     * @param string $_escaped_fragment_ Fragment from Hashbang Crawling - if this is present no js will be included
     * @return string Returns html of the Sai Default Page
     */
    public function html($_escaped_fragment_ = NULL){
        $vars = array();
        $vars['css'] = self::css();
        $vars['js'] = '';
        if(!$_escaped_fragment_){
            $vars['js'] = self::js();}
        $vars['menu_languages'] = self::lang_menu('./sai.php');   
        $vars['menu_start'] = self::menu_start();
        $vars['menu_sys'] = self::menu_sys();
        $vars['menu_proj'] = self::menu_proj();
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_DEFAULT),
                            array(  'project' => \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_PROJECT),
                                    'project_url' => \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL)));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('page/tpl/sai.tpl'))->SERVERPATH(), $vars);        
    }
    
    /**
     * generate the HTML for the Language Menu
     *
     * @param string $endpoint Endpoint for the Language Menu
     * @return string Returns HTML
     */
    public static function lang_menu($endpoint = './api.php'){
        $result = '';
        $langs = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);
        foreach($langs as $lang){
            $result .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('page/tpl/language.tpl'))->SERVERPATH(),array('lang' => $lang));}
        return $result;
    }
}