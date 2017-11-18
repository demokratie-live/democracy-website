<?php
class default_medien implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_medien');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_medien');}
    public static function js(){
        return array(   new PPAGE('default_medien/js/default_medien.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_medien/css/default_medien.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_medien/tpl/default_medien.tpl'))->SERVERPATH(), $vars);
    }
}