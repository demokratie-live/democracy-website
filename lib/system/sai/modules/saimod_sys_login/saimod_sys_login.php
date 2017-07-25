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
 * saimod_sys_login Class provided by System as saimod to provide login/register functionality
 */
class saimod_sys_login extends \SYSTEM\SAI\SaiModule {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login(){              
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_LOGIN);
        $vars['login'] = 'Login';
        $vars['logout'] = 'Logout';
        $vars['loginUsername'] = 'Username';
        $vars['loginPassword'] = 'Password';
        $vars['login_username_too_short'] = 'Username to short.';
        $vars['login_password_too_short'] = 'Password to short.';
        $vars['isadmin']  = \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) ? "yes" : "no";
        
        if(\SYSTEM\SECURITY\security::isLoggedIn()){
            return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_login/tpl/logout.tpl'))->SERVERPATH(), $vars);        
        } else {
            return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_login/tpl/login.tpl'))->SERVERPATH(), $vars);}
    }

    /**
     * Returns Users Info or NULL if not logged in
     * 
     * @return json Returns json with userinfo or null
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_userinfo(){
        $user = \SYSTEM\SECURITY\security::getUser();
        if(!$user){
            return;}
        return json_encode(array(   'username' => $user->username,
                                    'email' => $user->email,
                                    'joindate' => $user->joindate,
                                    'locale' => $user->locale,
                                    'last_active' => $user->last_active));        
    }        
    
    /**
     * Generate the HTML for the Registerform
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_registerform(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_LOGIN);
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_login/tpl/register.tpl'))->SERVERPATH(), $vars);}
   
    /**
     * Request Password Reset
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_login_action_resetpassword(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_LOGIN);
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_login/tpl/resetpassword.tpl'))->SERVERPATH(), $vars);}

    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_login/tpl/menu.tpl'))->SERVERPATH());}
    
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
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(   \LIB\lib_jqbootstrapvalidation::js(),
                        new \SYSTEM\PSAI('modules/saimod_sys_login/js/sai_sys_login_submit.js'));
    }
}