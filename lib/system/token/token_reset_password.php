<?php
namespace SYSTEM\TOKEN;
class token_reset_password extends token_handler{
    public function token(){
        return sha1(time().rand(0, 2000));}
    public function expire(){
        time() + (60 * 60 * 1);}
    public function data($data){
        return $data;}
    public function confirm($token_data){
        return true;}
}
