<?php
class page_invite extends \SYSTEM\API\api_default {
    public static function get_apigroup(){
        return 1;}
    public static function get_class($params = null){
        return self::class;}
    public static function get_default_state() {
        return null;}
        
    public static function default_page($_escaped_fragment_ = null){
        return (new default_invite())->html($_escaped_fragment_);}
}