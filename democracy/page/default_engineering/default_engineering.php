<?php
class default_engineering implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_engineering');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_engineering');}
    public static function js(){
        return array();}//   new PPAGE('default_engineering/js/default_engineering.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_engineering/css/default_engineering.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_engineering/tpl/default_engineering.tpl'))->SERVERPATH(), $vars);
    }
}