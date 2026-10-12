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
 * Reset Password Token handler Class provided by System to provide a reset-password mechanism.
 */
class token_reset_password implements token_handler{
    /**
     * Generate the Token
     *
     * @return string Returns token string.
     */
    public static function token(){
        return sha1(time().rand(0, 2000));}
        
    /**
     * Expiredate when the Token expires (1h)
     *
     * @return int Returns unixtimestamp when the token expires.
     */
    public static function expire(){
        return time() + (60 * 60 * 1);}
        
    /**
     * Token confirm processing for the token_handler.
     * Changes the password of an account if successful
     *
     * @param array Token data from db
     * @return bool Returns true or false.
     */
    public static function confirm($token_data){
        $data = \json_decode($token_data['data'],true);
        return \SYSTEM\SQL\SYS_SECURITY_RESET_PASSWORD::QI(array($data['pw_sha1'],$data['user'])) ? true : false;}
}