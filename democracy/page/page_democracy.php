<?php
class page_democracy extends \SYSTEM\API\api_default {
    public static function get_apigroup(){
        return 1;}
    public static function get_class($params = null){
        return self::class;}
    public static function get_default_state() {
        return 'wahlometer';}
        
    public static function default_page($_escaped_fragment_ = null){
        return (new default_page())->html($_escaped_fragment_);}
    
    public static function page_home(){
        return (new default_home())->html();}

    public static function page_wahlometer(){
        return (new default_wahlometer())->html();}

    public static function page_about(){
        return (new default_about())->html();}
    
    public static function page_citizen(){
        return (new default_citizen())->html();}
    public static function page_politicians(){
        return (new default_politicians())->html();}
    public static function page_engineering(){
        return (new default_engineering())->html();}
    public static function page_donate(){
        return (new default_donate())->html();}
    
    public static function page_nutzungsbedingungen(){
        return (new default_nutzungsbedingungen())->html();}
    public static function page_datenschutz(){
        return (new default_datenschutz())->html();}
    public static function page_impressum(){
        return (new default_impressum())->html();}
    public static function page_contact(){
        return (new default_contact())->html();}
        
    public static function page_press(){
        return (new default_press())->html();}
    public static function page_faq(){
        return (new default_faq())->html();}
    public static function page_blog(){
        return (new default_blog())->html();}
        
    public static function page_unsubscribe($token){
        return (new default_unsubscribe($token))->html();}
        
    /*public static function page_wir(){
        return (new default_wir())->html();}
    public static function page_prototyp(){
        return (new default_prototyp())->html();}*/
}