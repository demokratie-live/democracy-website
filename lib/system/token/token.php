<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\TOKEN
 */
namespace SYSTEM\TOKEN;

/**
 * Token Class provided by System to provide unique security tokens.
 */
class token{
    /** array Variable to store all registred token handlers*/
    private static $type_handlers = array(); 

    /**
     * Check if given class is a valid token handler
     *
     * @param string $handler Token_handler Class
     * @return bool Returns true or false.
     */
    private static function check_handler($handler){
        if( !\class_exists($handler) ||
            !\is_array($parents = \class_implements($handler)) ||
            !\array_search('SYSTEM\TOKEN\token_handler', $parents)){
            return false;}
        return true;}   

    /**
     * Register given class as token_handler
     *
     * @param string $class Token_handler Class
     * @return null Returns null.
     */
    public static function register($class){
        if(!self::check_handler($class)){
            throw new \SYSTEM\LOG\ERROR('Problem with your Token class: '.$class.'; it might not be available or inherits from the wrong class!');}
        array_push(self::$type_handlers,$class);}
    
    /**
     * Request a token
     *
     * @param string $class Token_handler Class
     * @param array $data Data sved to Database for the token_handler on confirm
     * @return string Returns token string.
     */
    public static function request($class,$data=array(),$post_script=null){
        if(!\in_array($class, self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR("Token_handler class not known to Token class. Please register it first.");}
            
        $token = \call_user_func(array($class, 'token'));
        $res = \SYSTEM\SQL\SYS_TOKEN_INSERT::QI( array( $token, $class,
                                                        \call_user_func(array($class, 'expire')),
                                                        json_encode($data),
                                                        \SYSTEM\SECURITY\security::isLoggedIn() ? \SYSTEM\SECURITY\security::getUser()->id : null,
                                                        $post_script));
        return $token;
    }
    
    /**
     * Confirm a token
     *
     * @param string $token Token string
     * @return bool Returns true or false or throws an error depending on success.
     */
    public static function confirm($token){
        $res = self::get($token);
        /*if(!$res){
            throw new \SYSTEM\LOG\ERROR('Token invalid.');}
        if(!$res['expire'] || strtotime($res['expire']) < time()){
            throw new \SYSTEM\LOG\ERROR('Token has expired!');}*/
        if(!$res || !$res['expire'] || strtotime($res['expire']) < time()){
            return false;}
            
        if(!\in_array($res['class'], self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR('Token_handler class not known to Token class. Please register it first.');}
        
        if(\array_key_exists('post_script',$res) && $res['post_script']){
            if(!\is_callable($res['post_script'])){
                throw new \SYSTEM\LOG\ERROR('Post Script required, but could not find it!');}
            if(!\call_user_func($res['post_script'], $res)){
                throw new \SYSTEM\LOG\ERROR('Post Script did not execute successfully');}
        }
        if(!\call_user_func_array(array($res['class'], 'confirm'),array($res))){
            throw new \SYSTEM\LOG\ERROR('Token_handler rejected Token.');}
        return \SYSTEM\SQL\SYS_TOKEN_CONFIRM::QI(array( \SYSTEM\SECURITY\security::isLoggedIn() ? \SYSTEM\SECURITY\security::getUser()->id : null, $token));
    }
    
    public static function text_success($token){
        $res = self::get($token);
        if(!\in_array($res['class'], self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR('Token_handler class not known to Token class. Please register it first.');}
        return \call_user_func_array(array($res['class'], 'text_success'),array($res));
    }
    
    public static function text_fail($token){
        $res = self::get($token);
        if(!\in_array($res['class'], self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR('Token_handler class not known to Token class. Please register it first.');}
        return \call_user_func_array(array($res['class'], 'text_fail'),array($res));
    }
    
    /**
     * Get a existing token from db
     *
     * @param string $token Token string
     * @return array Returns database entry for the given Token if it exists.
     */
    public static function get($token){
        return \SYSTEM\SQL\SYS_TOKEN_GET::Q1(array($token));}
}