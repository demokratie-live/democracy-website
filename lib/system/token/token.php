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
     * @param string $post_script Function to be called after successfull token confirm
     * @return string Returns token string.
     */
    public static function request($class,$data=array(),$ignore_duplicate_data=false){
        if(!\in_array($class, self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR("Token_handler class not known to Token class. Please register it first.");}
        
        // Check for duplicate Data
        if($ignore_duplicate_data){
            $duplicate = \SYSTEM\SQL\SYS_TOKEN_DUPLICATE::Q1(array($class,json_encode($data)));
            if($duplicate){
                $new_time = \call_user_func(array($class, 'expire'));
                // Update Expire on Duplicate
                if($duplicate['expire'] != $new_time || $duplicate['confirm_time']){
                    \SYSTEM\SQL\SYS_TOKEN_EXPIRE_UPDATE::QI(array($new_time,$duplicate['token']));}
                return $duplicate['token'];
            }
        }
        
        // Insert Token
        $token = \call_user_func(array($class, 'token'));
        $res = \SYSTEM\SQL\SYS_TOKEN_INSERT::QI( array( $token, $class,
                                                        \call_user_func(array($class, 'expire')),
                                                        json_encode($data),
                                                        \SYSTEM\SECURITY\security::isLoggedIn() ? \SYSTEM\SECURITY\security::getUser()->id : null));
        return $token;
    }
    
    /**
     * Confirm a token
     *
     * @param string $token Token string
     * @return bool Returns true or false or throws an error depending on success.
     */
    public static function confirm($token,$delete_on_success=false){
        $res = self::get($token);
        if(!$res || $res['confirm_time'] || ($res['expire'] && strtotime($res['expire']) < time())){
            return false;}
            
        if(!\in_array($res['class'], self::$type_handlers)){
            throw new \SYSTEM\LOG\ERROR('Token_handler class not known to Token class. Please register it first.');}
        
        if(!\call_user_func_array(array($res['class'], 'confirm'),array($res))){
            return false;}
        if($delete_on_success){
            return \SYSTEM\SQL\SYS_TOKEN_DELETE::QI(array($token));
        } else {
            return \SYSTEM\SQL\SYS_TOKEN_CONFIRM::QI(array( \SYSTEM\SECURITY\security::isLoggedIn() ? \SYSTEM\SECURITY\security::getUser()->id : null, $token));
        }
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