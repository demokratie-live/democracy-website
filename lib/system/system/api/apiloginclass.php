<?php

namespace SYSTEM\API;

abstract class apiloginclass extends \SYSTEM\API\apiclass {

    protected abstract static function getUserDBInfo();

    /*
    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (0, 0, -1, NULL, 'call', NULL);
    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (60, 0, 0, 'account', 'action', NULL);

    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (61, 1, 60, 'login', 'username', 'ALL');
    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (62, 1, 60, 'login', 'password', 'ALL');
    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (63, 1, 60, 'login', 'hashed', 'ALL');

    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (64, 1, 60, 'check', 'rightid', 'ALL');

    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (65, 1, 60, 'create', 'username', 'ALL');
    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (66, 1, 60, 'create', 'password', 'ALL');
    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (67, 1, 60, 'create', 'email', 'ALL');
    INSERT INTO `APICalls` (`ID`, `Flag`, `ParentID`, `ParentValue`, `Name`, `AllowedValues`) VALUES (68, 1, 60, 'create', 'hashed', 'ALL');
     */

    public static function call_account_action_login($username, $password, $hashed){
        return \SYSTEM\SECURITY\Security::login(static::getUserDBInfo(), $username, $password, $hashed);}
    public static function call_account_action_logout(){
        return \SYSTEM\SECURITY\Security::logout();}
    public static function call_account_action_isloggedin(){
        return \SYSTEM\SECURITY\Security::isLoggedIn();}
    public static function call_account_action_check($rightid){
        return \SYSTEM\SECURITY\Security::check(static::getUserDBInfo(),$rightid);}
    public static function call_account_action_create($username, $password, $email, $hashed){
        return \SYSTEM\SECURITY\Security::create(static::getUserDBInfo(), $username, $password, $email, $hashed);}
}