<?php
class default_ceta implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_ceta');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_ceta');}
    public static function js(){
        return array(   new PPAGE('default_ceta/js/default_ceta.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_ceta/css/default_ceta.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_ceta/tpl/default_ceta.tpl'))->SERVERPATH(), $vars);
    }
}