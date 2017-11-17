<?php
class default_wir implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_wir');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_wir');}
    public static function js(){
        return array(   new PPAGE('default_wir/js/default_wir.js'));}
    public static function css(){
        return array(   new PPAGE('default_wir/css/default_wir.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_wir/tpl/default_wir.tpl'))->SERVERPATH(), $vars);
    }
}