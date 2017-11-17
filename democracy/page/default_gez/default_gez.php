<?php
class default_gez implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_gez');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_gez');}
    public static function js(){
        return array(   new PPAGE('default_gez/js/default_gez.js'));}
    public static function css(){
        return array(   new PPAGE('default_gez/css/default_gez.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_gez/tpl/default_gez.tpl'))->SERVERPATH(), $vars);
    }
}