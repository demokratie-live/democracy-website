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
    
    public static function create(\SYSTEM\DB\DBInfo $dbinfo, $username, $password, $email, $hashed){
        @session_start();

        $con = new \SYSTEM\DB\Connection($dbinfo);
        $result = $con->prepare('SELECT COUNT(*) as count FROM '.\DBD\UserTable::NAME.
                                ' WHERE '.\DBD\UserTable::FIELD_USERNAME.' like ? '.
                                ' LIMIT 1;',
                                array($username));
        if(!($res = $result->next()) || $res['count'] != 0){            
            return self::REGISTER_FAIL;}

        unset($result);
        $result = $con->prepare('INSERT INTO '.\DBD\UserTable::NAME.
                                ' ('.\DBD\UserTable::FIELD_USERNAME.','.\DBD\UserTable::FIELD_PASSWORD.','.\DBD\UserTable::FIELD_EMAIL.','.\DBD\UserTable::FIELD_CREATIONTIMESTAMP.')'.
                                ' VALUES (?, ?, ?, ?);',
                                array(  $username, ($hashed ? $password : md5($password)),
                                        $email, (microtime(true)*1000))
                                );
        if(!$result){
            return self::REGISTER_FAIL;}

        if(!self::login($dbinfo, $username, $password, $hashed)){
            return self::REGISTER_FAIL;}
            
        return self::REGISTER_OK;
    }
     
    public static function login(\SYSTEM\DB\DBInfo $dbinfo, $username, $password, $hashed){
        @session_start();        
        
        $con = new \SYSTEM\DB\Connection($dbinfo);        
        $result = $con->prepare(    'SELECT * FROM '.\DBD\UserTable::NAME.
                                    ' WHERE '.\DBD\UserTable::FIELD_USERNAME.' = ?'.
                                    ' AND '.\DBD\UserTable::FIELD_PASSWORD.' = ?;',
                                    array($username,($hashed ? $password : md5($password))));
        //Database check
        if(!$result){
            $_SESSION['user'] = NULL;
            return self::LOGIN_FAIL;
        }        

        $row = $result->next();
        if(!$row){
            $_SESSION['user'] = NULL;
            return self::LOGIN_FAIL;}

        $_SESSION['user'] = new User(   $row[\DBD\UserTable::FIELD_ID],
                                        $row[\DBD\UserTable::FIELD_USERNAME],
                                        $row[\DBD\UserTable::FIELD_EMAIL],
                                        $row[\DBD\UserTable::FIELD_CREATIONTIMESTAMP],
                                        time(), //TODO put in database
                                        getenv('REMOTE_ADDR'), //TODO put in database
                                        0, //TODO put in database
                                        NULL); //TODO put in database        
        return self::LOGIN_OK;
    }


    public static function getUser(){
        if(!self::isLoggedIn()){
            return NULL;}

        return $_SESSION['user'];
    }

    /**
     * Determine if username exists
     *
     * @param String $username
     */
    public static function available(\SYSTEM\DB\DBInfo $dbinfo, $username){        
        $con = new \SYSTEM\DB\Connection($dbinfo);
        $res = $con->prepare(   'SELECT COUNT(*) as count FROM '.\DBD\UserTable::NAME.
                                ' WHERE '.\DBD\UserTable::FIELD_USERNAME.' like ? ;',
                                array($username));

        if(!($res = $res->next())){
            throw new Exception("Problem!");}
        
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
        $res = $con->prepare(   'SELECT COUNT(*) as count FROM '.\DBD\UserRightsTable::NAME.
                                ' WHERE '.\DBD\UserRightsTable::FIELD_USERID.' = ?'.
                                ' AND '.\DBD\UserRightsTable::FIELD_RIGHTID.' = ?;',
                                array($user->id, $rightid));

        if(!($res = $res->next())){
            throw new Exception("Problem!");}
        
        if($res['count'] == 0){
            return false;}
        return true;
    }

    //Session
    public static function logout(){
        @session_start();        
        session_destroy();

        return self::LOGOUT_OK;
    }
    public static function save($key,$value){
        @session_start();
        $_SESSION['values'][$key] = $value;}
    public static function load($key){
        @session_start();    
        if(!isset($_SESSION['values'][$key])){
            return NULL;}

        return $_SESSION['values'][$key];
    }
    public static function isLoggedIn(){
        @session_start();
        return (isset($_SESSION['user']) && $_SESSION['user'] instanceof User);}
}