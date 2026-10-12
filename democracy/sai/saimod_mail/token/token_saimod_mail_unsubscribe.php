<?php
class token_saimod_mail_unsubscribe implements \SYSTEM\TOKEN\token_handler{
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
        return null;}
        
    /**
     * Token confirm processing for the token_handler.
     * Confirms Email of an account if successful
     *
     * @param array Token data from db
     * @return bool Returns true or false.
     */
    public static function confirm($token_data){
        $data = json_decode($token_data['data'],true);
        return \SQL\UNSUBSCRIBE::QI(array($data['email'],$data['list']));
    }
}