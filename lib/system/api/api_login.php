<?php
namespace SYSTEM\API;
class api_login {
    public static function call_account_action_login($username, $password_sha1,$locale = null){
        return \SYSTEM\SECURITY\security::login($username, $password_sha1,$locale,true);}
    public static function call_account_action_logout(){
        return \SYSTEM\SECURITY\security::logout(true);}
    public static function call_account_action_isloggedin(){
        return \SYSTEM\SECURITY\security::isLoggedIn(true);}
    public static function call_account_action_check($rightid){
        return \SYSTEM\SECURITY\security::check($rightid,true);}
    public static function call_account_action_create($username, $password_sha1, $email, $locale){
        return \SYSTEM\SECURITY\security::create($username, $password_sha1, $email, $locale,true);}
        
    public static function call_account_action_confirm_email($username){
        return \SYSTEM\SECURITY\security::confirm_email($username);}
    public static function call_account_action_confirm($token){
        return \SYSTEM\SECURITY\security::confirm($token,true);}
    
    public static function call_account_action_reset_password($username){
        return \SYSTEM\SECURITY\security::reset_password($username);}
    public static function call_account_action_change_password($username,$old_password_sha1,$new_password_sha1){
        return \SYSTEM\SECURITY\security::change_password($username,$old_password_sha1,$new_password_sha1);}
    public static function call_account_action_change_email($username,$new_email){
        return \SYSTEM\SECURITY\security::change_email($username,$new_email);}
}