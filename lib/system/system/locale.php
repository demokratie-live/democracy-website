<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM
 */
namespace SYSTEM;

/**
 * locale Class provided by System to start manage Session Language and check a
 * language against the languages configured in the configuration
 */
class locale {
    /** string Sessionkey for the language */
    const SESSION_KEY = 'locale';        

    /**
     * Set the Session language
     * If the User is logged in it can trigger an Database update
     *
     * @param string $lang Language
     * @return bool Returns true if successfull.
     */
    public static function set($lang){
        if(!self::isLang($lang)){
            return false;}

        \SYSTEM\SECURITY\security::save(self::SESSION_KEY, $lang);
        if(\SYSTEM\SECURITY\security::isLoggedIn()){
            $user = \SYSTEM\SECURITY\security::getUser();
            if($user->locale != $lang){
                $user->locale = $lang;
                \SYSTEM\SQL\SYS_LOCALE_SET_LOCALE::Q1(array($lang, $user->id));}
        }
        return true;
    }

    /**
     * Get the Session language
     * If no language is saved in the Session it is set to the
     * System-Default-Session defined in the config.
     *
     * @return string Returns Session Language
     */
    public static function get(){
        $value = \SYSTEM\SECURITY\security::load(self::SESSION_KEY);
        if($value == NULL){
            return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG);}
        return $value;
    }

    /**
     * Checks Language against languages defined in the config.
     *
     * @param string $lang Language to be checked
     * @return bool Returns true if Language is within the configured Languages
     */
    public static function isLang($lang){        
        if(!\in_array($lang, \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS))){
            return false;}
        return true;
    }
}