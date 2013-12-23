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
    
    public static function create($username, $password, $email, $locale, $advancedResult=false, $checkAvailable = true){
        self::startSession();

        // check availability of username (in non-compatibility mode, otherwise it is already checked in DasenseAccount)
        if($checkAvailable && !self::available($username)){
            return self::REGISTER_FAIL;}        
        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $result = $con->prepare('createAccountStmt','INSERT INTO '.\SYSTEM\DBD\system_user::NAME_PG.
                                    ' ('.\SYSTEM\DBD\system_user::FIELD_USERNAME.','.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.','
                                        .\SYSTEM\DBD\system_user::FIELD_EMAIL.','.\SYSTEM\DBD\system_user::FIELD_LOCALE.','.\SYSTEM\DBD\system_user::FIELD_ACCOUNT_FLAG.')'.
                                    ' VALUES ($1, $2, $3, $4, $5) RETURNING *;',
                                    array( $username , $password, $email, $locale, 1 ));
        } else {
            $result = $con->prepare('createAccountStmt','INSERT INTO '.\SYSTEM\DBD\system_user::NAME_MYS.
                                    ' ('.\SYSTEM\DBD\system_user::FIELD_USERNAME.','.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.','
                                        .\SYSTEM\DBD\system_user::FIELD_EMAIL.','.\SYSTEM\DBD\system_user::FIELD_LOCALE.','.\SYSTEM\DBD\system_user::FIELD_ACCOUNT_FLAG.')'.
                                    ' VALUES (?, ?, ?, ?, ?);',
                                    array( $username , $password, $email, $locale, 1 ));
        }
        
        if( !$result || !self::login($username, $password, $locale)){
                return self::REGISTER_FAIL;}        
         
        return ($advancedResult ? $result->next() : self::REGISTER_OK);
    }
    
    
    public static function changePassword($username, $password_sha_old, $password_sha_new){
        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
                $result = $con->prepare('',
                                        'SELECT id FROM '.\SYSTEM\DBD\system_user::NAME_PG.
                                        ' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') LIKE lower($1)'.
                                        ' AND '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $2;',
                                        array($username, $password_sha_old) );     
                
        }else{
            return 'MySQL Query not implemented!';
        }
        
        
        $row = $result->next();
        if(!$row){
            return 0; // old password wrong
        }
        
        $userID = $row['id'];
        if(\SYSTEM\system::isSystemDbInfoPG()){
                $result = $con->prepare('', 
                                    'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.
                                    ' SET "password_sha" = $1 WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2;',
                                     array($password_sha_new, $userID) );           
        }else{
            return 'MySQL Query not implemented!';
        }
        
        
        return 1;
    }
             
    public static function login($username, $password_sha, $password_md5, $locale=NULL, $advancedResult=false, $password_sha_new=NULL){
        self::startSession();
        
        if(!isset($password_sha)){
            self::trackLogins(NULL, self::LOGIN_FAIL);
            $_SESSION['user'] = NULL;
            return self::LOGIN_FAIL;}

        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo()); 
        if(isset($password_md5)){      
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $result = $con->prepare('loginAccountStmt', 
                                        'SELECT * FROM '.\SYSTEM\DBD\system_user::NAME_PG.
                                        ' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') LIKE lower($1)'.
                                        ' AND ('.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $2 OR 
                                                '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $3 OR  '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_MD5.' = $4 );',
                                        array($username, $password_sha, $password_sha_new, $password_md5) );            
            } else {
                $result = $con->prepare('loginAccountStmt', 
                                        'SELECT * FROM '.\SYSTEM\DBD\system_user::NAME_MYS.
                                        ' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') LIKE lower(?)'.
                                        ' AND ('.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = ? OR '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_MD5.' = ? );',
                                        array($username, $password_sha, $password_md5) );
            }
        }else{
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $result = $con->prepare('loginAccountStmtSHA', 
                                        'SELECT * FROM '.\SYSTEM\DBD\system_user::NAME_PG.
                                        ' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') LIKE lower($1)'.
                                        ' AND '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $2 OR 
                                               '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $3 ;',
                                        array($username, $password_sha, $password_sha_new) );
            } else {
                $result = $con->prepare('loginAccountStmtSHA', 
                                        'SELECT * FROM '.\SYSTEM\DBD\system_user::NAME_MYS.
                                        ' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') LIKE lower(?)'.
                                        ' AND '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = ?;',
                                        array($username, $password_sha) );
            }
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
        
        // set password_sha if it is empty or if it length is < 40 -> SHA1 Androidappbugfix
        if(!$row[\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA] || strlen($row[\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA]) < 40){
            
            if($password_sha_new != NULL){
                $pw = $password_sha_new;
            }else{
                $pw = $password_sha;
            }
            unset($result);
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $res = $con->prepare(   'updatePasswordSHAStmt',  
                                        'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.' SET '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $1 WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2'.' RETURNING '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.';', 
                                        array($pw,$row[\SYSTEM\DBD\system_user::FIELD_ID]));
            }else{
                $res = $con->prepare(   'updatePasswordSHAStmt',  
                                        'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.' SET '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = ? WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?'.';', 
                                        array($pw,$row[\SYSTEM\DBD\system_user::FIELD_ID]));
            }
            $res = $res->next();
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
        self::trackLogins($row[\SYSTEM\DBD\system_user::FIELD_ID]);        
        return ($advancedResult ? $row : self::LOGIN_OK);
    }       
    
    private static function trackLogins($userID){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());         
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $con->prepare(  'trackLoginAccountStmt', 
                            'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.' SET '.\SYSTEM\DBD\system_user::FIELD_LAST_ACTIVE.'= to_timestamp($1) '.
                            'WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2;',
                            array(microtime(true), $userID));
        } else {
            $con->prepare(  'trackLoginAccountStmt', 
                            'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.' SET '.\SYSTEM\DBD\system_user::FIELD_LAST_ACTIVE.'= ? '.
                            'WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?;',
                            array(microtime(true), $userID));
        }
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
    public static function available($username){        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->prepare(   'availableStmt',  
                                    'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_user::NAME_PG.
                                    ' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') like lower($1) ;',
                                    array($username));
        } else {
            $res = $con->prepare(   'availableStmt',  
                                    'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_user::NAME_MYS.
                                    ' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') like lower(?) ;',
                                    array($username));
        }

        if(!($res = $res->next())){
            throw new \SYSTEM\LOG\ERRROR("Cannot determine the availability of username!");}
        
        if($res['count'] != 0){
            return self::AVAILABLE_FAIL;}
        return self::AVAILABLE_OK;
    }

    //checks for a right for a logged in user
    public static function check($rightid){
        //Not logged in? Go away.
        //If you think you need rights for your guests ur doing smth wrong ;-)
        $user = null;
        if(!($user = self::getUser())){
            return false;}

        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->prepare(   'security_check',
                                    'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\UserRightsTable::NAME_PG.
                                    ' WHERE "'.\SYSTEM\DBD\UserRightsTable::FIELD_USERID.'" = $1'.
                                    ' AND "'.\SYSTEM\DBD\UserRightsTable::FIELD_RIGHTID.'" = $2;',
                                    array($user->id, $rightid));
        } else {
            $res = $con->prepare(   'security_check',
                                    'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\UserRightsTable::NAME_MYS.
                                    ' WHERE '.\SYSTEM\DBD\UserRightsTable::FIELD_USERID.' = ?'.
                                    ' AND '.\SYSTEM\DBD\UserRightsTable::FIELD_RIGHTID.' = ?;',
                                    array($user->id, $rightid));
        }

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
    public static function _db_setLocale($lang){
        $user = self::getUser();
        if(!$user){
            throw new \SYSTEM\LOG\ERROR("You need to be logged in");}
                 
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->prepare(   'updateUserLocaleStmt',
                                    'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.' SET '.\SYSTEM\DBD\system_user::FIELD_LOCALE.' = $1 '.
                                    'WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2'.' RETURNING '.\SYSTEM\DBD\system_user::FIELD_LOCALE.';', 
                                    array($lang, $user->id));
        }else{
            $res = $con->prepare(   'updateUserLocaleStmt',
                                    'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.' SET '.\SYSTEM\DBD\system_user::FIELD_LOCALE.' = ? '.
                                    'WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?;', 
                                    array($lang, $user->id));            
        }
        return true;
    }
}