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
 * Confirm Email Token handler Class provided by System to provide a email-confirmation mechanism.
 */
class token_confirm_email implements token_handler{
    /**
     * Generate the Token
     *
     * @return string Returns token string.
     */
    public static function token(){
        return sha1(time().rand(0, 1000));}
        
    /**
     * Expiredate when the Token expires (3d)
     *
     * @return int Returns unixtimestamp when the token expires.
     */
    public static function expire(){
        return time() + (60 * 60 * 24 * 3);}
        
    /**
     * Token confirm processing for the token_handler.
     * Confirms Email of an account if successful
     *
     * @param array Token data from db
     * @return bool Returns true or false.
     */
    public static function confirm($token_data){
        $data = \json_decode($token_data['data'],true);
        return \SYSTEM\SQL\SYS_SECURITY_CONFIRM_EMAIL::QI(array($data['user'])) ? true : false;}
        
    public static function text_fail($token_data) {
        return 'Could NOT confirm your EMail-Address. Token is expired or invalid.';}

    public static function text_success($token_data) {
        return 'Confirmed your EMail-Address.';}
}