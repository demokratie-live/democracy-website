<?php
class default_unsubscribe implements SYSTEM\PAGE\Page {
    var $token = null;
    public function __construct($token) {
        $this->token = $token;}
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_unsubscribe');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_unsubscribe');}
    public static function js(){
        return array(   new PPAGE('default_unsubscribe/js/default_unsubscribe.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_wir/css/default_wir.css'));}
    public function html(){
        $vars = array();
        $success = \SYSTEM\TOKEN\token::confirm($this->token,true);
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_unsubscribe/tpl/default_unsubscribe.tpl'))->SERVERPATH(), $vars);
    }
}