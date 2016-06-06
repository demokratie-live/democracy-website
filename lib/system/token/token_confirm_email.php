<?php
namespace SYSTEM\TOKEN;
class token_confirm_email extends token_handler{
    public static function token(){
        return sha1(time().rand(0, 1000));}
    public static function expire(){
        return time() + (60 * 60 * 24 * 3);}
    public static function confirm($token_data){
        $data = \json_decode($token_data['data'],true);
        return \SYSTEM\SQL\SYS_SECURITY_CONFIRM_EMAIL::QI(array($data['user'])) ? true : false;}
}
