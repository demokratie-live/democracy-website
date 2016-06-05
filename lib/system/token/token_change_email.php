<?php
namespace SYSTEM\TOKEN;
class token_change_email extends token_handler{
    public function token(){
        return sha1(time().rand(0, 3000));}
    public function expire(){
        time() + (60 * 60 * 12);}
    public function data($data){
        return $data;}
    public function confirm($token_data){
        return true;}
}
