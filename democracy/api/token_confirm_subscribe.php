<?php
class token_confirm_subscribe implements \SYSTEM\TOKEN\token_handler{
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
     * Confirms Email of a subscription if successful
     *
     * @param array Token data from db
     * @return bool Returns true or false.
     */
    public static function confirm($token_data){
        $data = \json_decode($token_data['data'],true);
        return \SQL\SUBSCRIBE_CONFIRM_EMAIL::QI(array($data['email'])) ? true : false;
    }
    
    /**
     * Callback text_fail on fail
     *
     * @param array $token_data Token Data
     * @return string Returns token fail string.
     */
    public static function text_fail($token_data) {
        return 'Could NOT confirm your EMail Address. Token is expired or invalid.';}

    /**
     * Callback text_success on success
     *
     * @param array $token_data Token Data
     * @return string Returns token success string.
     */
    public static function text_success($token_data) {
        return 'Confirmed your EMail Address.';}
}