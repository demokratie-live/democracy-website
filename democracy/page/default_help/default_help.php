<?php
class default_help implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_help');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_help');}
    public static function js(){
        return array(   new PPAGE('default_help/js/default_help.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_help/css/default_help.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_help/tpl/default_help.tpl'))->SERVERPATH(), $vars);
    }
}