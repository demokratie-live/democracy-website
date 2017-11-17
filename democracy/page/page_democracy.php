<?php
class page_democracy extends \SYSTEM\API\api_default {
    public static function get_apigroup(){
        return 1;}
    public static function get_class($params = null){
        return self::class;}
    public static function get_default_state() {
        return 'start';}
        
    public static function default_page($_escaped_fragment_ = null){
        return (new default_page())->html($_escaped_fragment_);}
    
    public static function page_start(){
        return (new default_start())->html();}
        
    public static function page_wir(){
        return (new default_wir())->html();}
    public static function page_medien(){
        return (new default_medien())->html();}
    public static function page_prototyp(){
        return (new default_prototyp())->html();}
    public static function page_help(){
        return (new default_help())->html();}
}