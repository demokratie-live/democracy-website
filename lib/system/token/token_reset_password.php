<?php
namespace SYSTEM\TOKEN;
class token_reset_password extends token_handler{
    public static function token(){
        return sha1(time().rand(0, 2000));}
    public static function expire(){
        return time() + (60 * 60 * 1);}
    public static function confirm($token_data){
        $data = \json_decode($token_data['data'],true);
        return \SYSTEM\SQL\SYS_SECURITY_RESET_PASSWORD::QI(array($data['pw_sha1'],$data['user'])) ? true : false;}
}
