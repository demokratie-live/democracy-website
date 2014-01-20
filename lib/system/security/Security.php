<?php
namespace SYSTEM\SECURITY;

class Security {
    const FAIL = false;
    const OK = true;   
    
    public static function create($username, $password, $email, $locale, $advancedResult=false, $checkAvailable = true){
        self::startSession();
        // check availability of username (in non-compatibility mode, otherwise it is already checked in DasenseAccount)
        if($checkAvailable && !self::available($username)){
            return self::FAIL;}                        
        $result = \SYSTEM\DBD\SYS_SECURITY_CREATE::Q1(array( $username , $password, $email, $locale, 1 ));                
        if( !$result || !self::login($username, $password, $locale)){
                return self::FAIL;}                 
        return ($advancedResult ? \SYSTEM\DBD\SYS_SECURITY_LOGIN_SHA1::Q1(array($username, $password)) : self::OK);
    }
     
    public static function changePassword($username, $password_sha_old, $password_sha_new){        
        $row = \SYSTEM\DBD\SYS_SECURITY_LOGIN_SHA1::Q1(array($username, $password_sha_old));                        
        if(!$row){
            return self::FAIL;} // old password wrong                  
        $userID = $row['id'];        
        \SYSTEM\DBD\SYS_SECURITY_UPDATE_PW::Q1(array($password_sha_new, $userID));        
        return self::OK;
    }
             
    public static function login($username, $password_sha, $password_md5, $locale=NULL, $advancedResult=false, $password_sha_new=NULL){
        self::startSession();        
        if(!isset($password_sha)){
            //self::trackLogins(NULL, self::FAIL);
            $_SESSION['user'] = NULL;
            return self::FAIL;}
        //Database check
        if(isset($password_md5)){      
            $result = \SYSTEM\DBD\SYS_SECURITY_LOGIN_MD5::QQ(array($username, $password_sha, $password_md5));
        }else{
            $result = \SYSTEM\DBD\SYS_SECURITY_LOGIN_SHA1::QQ(array($username, $password_sha));}
            
        if(!$result){
            new \SYSTEM\LOG\WARNING("Login Failed, Db result was not valid");            
            $_SESSION['user'] = NULL;
            return self::FAIL;}
            
        $row = $result->next();
        if(!$row){
            new \SYSTEM\LOG\WARNING("Login Failed, User was not found in db");            
            $_SESSION['user'] = NULL;            
            return self::FAIL;}
        // set password_sha if it is empty or if it length is < 40 -> SHA1 Androidappbugfix
        if( !$row[\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA] ||
            strlen($row[\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA]) < 40){
            
            if($password_sha_new != NULL){
                $pw = $password_sha_new;
            }else{
                $pw = $password_sha;
            }
            unset($result);
            \SYSTEM\DBD\SYS_SECURITY_UPDATE_PW::Q1(array($pw,$row[\SYSTEM\DBD\system_user::FIELD_ID]));            
            $row[\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA] = $pw;
        }            
        // set session variables
        $_SESSION['user'] = new User(   $row[\SYSTEM\DBD\system_user::FIELD_ID],
                                        $row[\SYSTEM\DBD\system_user::FIELD_USERNAME],
                                        $row[\SYSTEM\DBD\system_user::FIELD_EMAIL],
                                        $row[\SYSTEM\DBD\system_user::FIELD_JOINDATE],
                                        time(),
                                        getenv('REMOTE_ADDR'),
                                        0,
                                        NULL,
                                        $row[\SYSTEM\DBD\system_user::FIELD_LOCALE]);        
        if(isset($locale)){
            \SYSTEM\locale::set($locale);}
        // track succesful user login
        //self::trackLogins($row[\SYSTEM\DBD\system_user::FIELD_ID]);        
        return ($advancedResult ? $row : self::OK);
    }       
    
    private static function trackLogins($userID){
        \SYSTEM\DBD\SYS_SECURITY_TRACK_LOGINS::Q1(array(microtime(true), $userID));}

    public static function getUser(){
        if(!self::isLoggedIn()){
            return NULL;}
        return $_SESSION['user'];}

    // Determine if username exists
    public static function available($username){        
        $res = \SYSTEM\DBD\SYS_SECURITY_AVAILABLE::Q1(array($username));
        if(!$res){
            throw new \SYSTEM\LOG\ERRROR("Cannot determine the availability of username!");}        
        if($res['count'] != 0){
            return self::FAIL;}
        return self::OK;
    }

    //checks for a right for a logged in user
    public static function check($rightid){
        //Not logged in? Go away.
        //If you think you need rights for your guests ur doing smth wrong ;-)
        $user = null;
        if(!($user = self::getUser())){
            return false;}
        $res = \SYSTEM\DBD\SYS_SECURITY_CHECK::Q1(array($user->id, $rightid));
        if(!$res){
            throw new \SYSTEM\LOG\ERROR("Cannot determine if you have the required rights!");}        
        if($res['count'] == 0){
            return false;}
        return true;
    }

    //Session
    public static function logout(){
        self::startSession();
        session_destroy();
        return self::OK;}
        
    public static function save($key,$value){
        self::startSession();
        $_SESSION['values'][$key] = $value;}
        
    public static function load($key){
        self::startSession();
        if(!isset($_SESSION['values'][$key])){
            return NULL;}
        return $_SESSION['values'][$key];}
        
    public static function isLoggedIn(){
        self::startSession();
        return (isset($_SESSION['user']) && $_SESSION['user'] instanceof User);}
        
    private static function startSession(){
        if(!isset($_SESSION) && !headers_sent()){
            \session_start();}}    
}