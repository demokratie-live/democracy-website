<?php
namespace SYSTEM\TOKEN;

class token{
    private static $type_handlers = array(); 

    private static function check_handler($handler){
        if( !\class_exists($handler) ||
            !\is_array($parents = \class_parents($handler)) ||
            !\array_search('SYSTEM\TOKEN\token_handler', $parents)){
            return false;}
        return true;}   

    public static function register($class){
        if(!self::check_handler($class)){
            throw new \SYSTEM\LOG\ERROR('Problem with your Token class: '.$class.'; it might not be available or inherits from the wrong class!');}
        array_push(self::$type_handlers,$class);}
    
    public static function request($class,$data=array()){
        if(!\in_array($class, self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR("Token_handler class not known to Token class. Please register it first.");}
            
        $token = \call_user_func(array($class, 'token'));
        $res = \SYSTEM\SQL\SYS_TOKEN_INSERT::QI( array( $token, $class,
                                                        \call_user_func(array($class, 'expire')),
                                                        json_encode($data),
                                                        \SYSTEM\SECURITY\security::isLoggedIn() ? \SYSTEM\SECURITY\security::getUser()->id : null));
        return $token;
    }
    public static function confirm($token){
        $res = self::get($token);
        if(!$res){
            throw new \SYSTEM\LOG\ERROR('Token invalid.');}
        if(!$res['expire'] || strtotime($res['expire']) < time()){
            throw new \SYSTEM\LOG\ERROR('Token has expired!');}
        if(!\in_array($res['class'], self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR('Token_handler class not known to Token class. Please register it first.');}
        if(!\call_user_func_array(array($res['class'], 'confirm'),array($res))){
            throw new \SYSTEM\LOG\ERROR('Token_handler rejected Token.');}
        return \SYSTEM\SQL\SYS_TOKEN_CONFIRM::QI(array( \SYSTEM\SECURITY\security::isLoggedIn() ? \SYSTEM\SECURITY\security::getUser()->id : null,
                                                        $token));
    }
    public static function get($token){
        return \SYSTEM\SQL\SYS_TOKEN_GET::Q1(array($token));}
}