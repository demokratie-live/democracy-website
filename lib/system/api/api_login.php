<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\API
 */
namespace SYSTEM\API;

/**
 * API Login class providing System Account Functionality.
 */
class api_login {
    /**
     * System Account Login
     *
     * @param string $username Username
     * @param sha1 $password_sha1 User Password SHA1 String
     * @param lang $locale Locale which the User wants to login with
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_login($username, $password_sha1,$locale = null){
        return \SYSTEM\SECURITY\security::login($username, $password_sha1,$locale,true);}
        
    /**
     * System Account Logout
     *
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_logout(){
        return \SYSTEM\SECURITY\security::logout(true);}
        
    /**
     * System Account isloggedin check
     *
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_isloggedin(){
        return \SYSTEM\SECURITY\security::isLoggedIn(true);}
        
    /**
     * System Account Right Check
     *
     * @param int $rightid RightID of the right to be checked
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_check($rightid){
        return \SYSTEM\SECURITY\security::check($rightid,true);}
        
    /**
     * System Account Create
     *
     * @param string $username Username
     * @param sha1 $password_sha1 User Password SHA1 String
     * @param email $email Email of the new User
     * @param lang $locale Locale which the User wants to register
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_create($username, $password_sha1, $email, $locale){
        return \SYSTEM\SECURITY\security::create($username, $password_sha1, $email, $locale,true);}
    
    /**
     * System Account Request Confirm EMail Token
     *
     * @param string $username Username
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_confirm_email(){
        return \SYSTEM\SECURITY\security::confirm_email();}
        
    /**
     * System Account Confirm Tokens
     *
     * @param string $token Token to do specifics with your Account
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_confirm($token){
        return \SYSTEM\SECURITY\security::confirm($token);}

    /**
     * System Account Request Reset Password Token
     *
     * @param string $username Username
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_reset_password($username){
        return \SYSTEM\SECURITY\security::reset_password($username);}
        
    /**
     * System Account Change Password
     *
     * @param string $username Username
     * @param sha1 $old_password_sha1 Users Old Password SHA1 String
     * @param sha1 $new_password_sha1 Users New Password SHA1 String
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_change_password($old_password_sha1,$new_password_sha1){
        return \SYSTEM\SECURITY\security::change_password($old_password_sha1,$new_password_sha1);}
        
    /**
     * System Account Request Change EMail Token
     *
     * @param string $username Username
     * @param email $new_email Users new EMail Address
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_account_action_change_email($new_email){
        return \SYSTEM\SECURITY\security::change_email($new_email);}
}