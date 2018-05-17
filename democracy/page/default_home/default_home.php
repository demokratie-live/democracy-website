<?php
class default_home implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_start');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_start');}
    public static function js(){
        return array();}//   new PPAGE('default_home/js/default_home.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_home/css/default_home.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_home/tpl/default_home.tpl'))->SERVERPATH(), $vars);
    }
}