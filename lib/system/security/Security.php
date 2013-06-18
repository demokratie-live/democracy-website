<?php

namespace SYSTEM\SECURITY;

class Security {

    const LOGIN_FAIL = false;
    const LOGIN_OK = true;

    const REGISTER_FAIL = false;
    const REGISTER_OK = true;

    const LOGOUT_OK = true;

    const AVAILABLE_FAIL = false;
    const AVAILABLE_OK = true;
    
    public static function create(\SYSTEM\DB\DBInfo $dbinfo, $username, $password, $email, $locale, $advancedResult=false, $checkAvailable = true){
        self::startSession();

        // check availability of username (in non-compatibility mode, otherwise it is already checked in DasenseAccount)
        if($checkAvailable && !self::available($dbinfo, $username)){
            return self::REGISTER_FAIL;}        
        
        $con = new \SYSTEM\DB\Connection($dbinfo);
        $result = $con->prepare('createAccountStmt','INSERT INTO '.\SYSTEM\DBD\UserTable::NAME.
                                ' ('.\SYSTEM\DBD\UserTable::FIELD_USERNAME.','.\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA.','
                                    .\SYSTEM\DBD\UserTable::FIELD_EMAIL.','.\SYSTEM\DBD\UserTable::FIELD_LOCALE.','.\SYSTEM\DBD\UserTable::FIELD_ACCOUNT_FLAG.')'.
                                ' VALUES ($1, $2, $3, $4, $5) RETURNING *;',
                                array( $username , $password, $email, $locale, 1 ));
        
        if( !$result || !self::login($dbinfo, $username, $password, $locale)){
                return self::REGISTER_FAIL;}        
         
        return ($advancedResult ? $result->next() : self::REGISTER_OK);
    }
    
     
    public static function login(\SYSTEM\DB\DBInfo $dbinfo, $username, $password_sha, $password_md5, $locale=NULL, $advancedResult=false){
        self::startSession();
        
        if(!isset($password_sha)){
            self::trackLogins($dbinfo, NULL, self::LOGIN_FAIL);
            $_SESSION['user'] = NULL;
            return self::LOGIN_FAIL;}

        $con = new \SYSTEM\DB\Connection($dbinfo); 
        if(isset($password_md5)){
            $result = $con->prepare('loginAccountStmt', 
                                    'SELECT * FROM '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\UserTable::NAME_PG : \SYSTEM\DBD\UserTable::NAME_MYS).
                                    ' WHERE lower('.\SYSTEM\DBD\UserTable::FIELD_USERNAME.') LIKE lower($1)'.
                                    ' AND ('.\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA.' = $2 OR '.\SYSTEM\DBD\UserTable::FIELD_PASSWORD_MD5.' = $3 );',
                                    array($username, $password_sha, $password_md5) );            
        }else{
            $result = $con->prepare('loginAccountStmtSHA', 
                                    'SELECT * FROM '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\UserTable::NAME_PG : \SYSTEM\DBD\UserTable::NAME_MYS).
                                    ' WHERE lower('.\SYSTEM\DBD\UserTable::FIELD_USERNAME.') LIKE lower($1)'.
                                    ' AND '.\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA.' = $2;',
                                    array($username, $password_sha) );
        }

        //Database check
        if(!$result){
            new \SYSTEM\LOG\WARNING("Login Failed, Db result was not valid");            
            $_SESSION['user'] = NULL;
            return self::LOGIN_FAIL;}        

        $row = $result->next();
        if(!$row){
            new \SYSTEM\LOG\WARNING("Login Failed, User was not found in db");            
            $_SESSION['user'] = NULL;            
            return self::LOGIN_FAIL;}        
        
        // set password_sha if it is empty
        if(!$row[\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA]){
            $res = $con->prepare(   'updatePasswordSHAStmt',  
                                    'UPDATE '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\UserTable::NAME_PG : \SYSTEM\DBD\UserTable::NAME_MYS).' SET '.\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA.' = $1 WHERE '.\SYSTEM\DBD\UserTable::FIELD_ID.' = $2'.' RETURNING '.\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA.';', 
                                    array($password_sha,$row[\SYSTEM\DBD\UserTable::FIELD_ID]));
            $res = $res->next();
            $row[\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA] = $res[\SYSTEM\DBD\UserTable::FIELD_PASSWORD_SHA];
        }
            
        // set session variables
        $_SESSION['user'] = new User(   $row[\SYSTEM\DBD\UserTable::FIELD_ID],
                                        $row[\SYSTEM\DBD\UserTable::FIELD_USERNAME],
                                        $row[\SYSTEM\DBD\UserTable::FIELD_EMAIL],
                                        $row[\SYSTEM\DBD\UserTable::FIELD_JOINDATE],
                                        time(),
                                        getenv('REMOTE_ADDR'),
                                        0,
                                        NULL,
                                        $row[\SYSTEM\DBD\UserTable::FIELD_LOCALE]);
        
        if(isset($locale)){
            \SYSTEM\locale::set($locale);}
        // track succesful user login
        self::trackLogins($dbinfo, $row[\SYSTEM\DBD\UserTable::FIELD_ID]);        
        return ($advancedResult ? $row : self::LOGIN_OK);
    }       
    
    private static function trackLogins(\SYSTEM\DB\DBInfo $dbinfo, $userID){
        $con = new \SYSTEM\DB\Connection($dbinfo);         
        $con->prepare(  'trackLoginAccountStmt', 
                        'UPDATE '.\SYSTEM\DBD\UserTable::NAME_PG.' SET '.\SYSTEM\DBD\UserTable::FIELD_LAST_ACTIVE.'= to_timestamp($1) '.
                        'WHERE '.\SYSTEM\DBD\UserTable::FIELD_ID.' = $2;',
                        array(microtime(true), $userID));
    }

    public static function getUser(){
        if(!self::isLoggedIn()){
            return NULL;}
        return $_SESSION['user'];}

    /**
     * Determine if username exists
     *
     * @param String $username
     */
    public static function available(\SYSTEM\DB\DBInfo $dbinfo, $username){        
        $con = new \SYSTEM\DB\Connection($dbinfo);
        $res = $con->prepare(   'availableStmt',  
                                'SELECT COUNT(*) as count FROM '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\UserTable::NAME_PG : \SYSTEM\DBD\UserTable::NAME_MYS).
                                ' WHERE lower('.\SYSTEM\DBD\UserTable::FIELD_USERNAME.') like lower($1) ;',
                                array($username));

        if(!($res = $res->next())){
            throw new \SYSTEM\LOG\ERRROR("Cannot determine the availability of username!");}
        
        if($res['count'] != 0){
            return self::AVAILABLE_FAIL;}
        return self::AVAILABLE_OK;
    }

    //checks for a right for a logged in user
    public static function check(\SYSTEM\DB\DBInfo $dbinfo, $rightid){
        //Not logged in? Go away.
        //If you think you need rights for your guests ur doing smth wrong ;-)
        $user = null;
        if(!($user = self::getUser())){
            return false;}

        $con = new \SYSTEM\DB\Connection($dbinfo);
        $res = $con->prepare(   'security_check',
                                'SELECT COUNT(*) as count FROM '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\UserRightsTable::NAME_PG : \SYSTEM\DBD\UserRightsTable::NAME_MYS).
                                ' WHERE "'.\SYSTEM\DBD\UserRightsTable::FIELD_USERID.'" = $1'.
                                ' AND "'.\SYSTEM\DBD\UserRightsTable::FIELD_RIGHTID.'" = $2;',
                                array($user->id, $rightid));

        if(!($res = $res->next())){
            throw new \SYSTEM\LOG\ERROR("Cannot determine if you have the required rights!");}
        
        if($res['count'] == 0){
            return false;}
        return true;
    }

    //Session
    public static function logout(){
        self::startSession();
        session_destroy();

        return self::LOGOUT_OK;
    }
    public static function save($key,$value){
        self::startSession();
        $_SESSION['values'][$key] = $value;}
    public static function load($key){
        self::startSession();
        if(!isset($_SESSION['values'][$key])){
            return NULL;}

        return $_SESSION['values'][$key];
    }
    public static function isLoggedIn(){
        self::startSession();
        return (isset($_SESSION['user']) && $_SESSION['user'] instanceof User);}
    private static function startSession(){
        if(!isset($_SESSION)){
            session_start();}
    }
        
    //This functions is called from \SYSTEM\locale::set()
    public static function _db_setLocale($dbinfo, $lang){
        $user = self::getUser();
        if(!$user){
            throw new \SYSTEM\LOG\ERROR("You need to be logged in");}
                 
        $con = new \SYSTEM\DB\Connection($dbinfo);
        $res = $con->prepare(   'updateUserLocaleStmt',
                                'UPDATE '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\UserTable::NAME_PG : \SYSTEM\DBD\UserTable::NAME_MYS).' SET '.\SYSTEM\DBD\UserTable::FIELD_LOCALE.' = $1 '.
                                'WHERE '.\SYSTEM\DBD\UserTable::FIELD_ID.' = $2'.' RETURNING '.\SYSTEM\DBD\UserTable::FIELD_LOCALE.';', 
                                array($lang, $user->id));
        if(!$res->next()){
            throw new \SYSTEM\LOG\ERROR("Problem updating the User!");}        
    }
}