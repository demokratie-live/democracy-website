<?php
namespace SYSTEM\TOKEN;
class token_change_email extends token_handler{
    public static function token(){
        return sha1(time().rand(0, 3000));}
    public static function expire(){
        return time() + (60 * 60 * 12);}
    public static function confirm($token_data){
        $data = \json_decode($token_data['data'],true);
        return \SYSTEM\SQL\SYS_SECURITY_CHANGE_EMAIL::QI(array($data['email'],$data['user'])) ? true : false;}
}
