<?php
class default_contact implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_contact');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_contact');}
    public static function js(){
        return array();}//   new PPAGE('default_contact/js/default_contact.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_help/css/default_help.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_contact/tpl/default_contact.tpl'))->SERVERPATH(), $vars);
    }
}