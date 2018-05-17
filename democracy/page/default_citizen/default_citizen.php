<?php
class default_citizen implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_citizen');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_citizen');}
    public static function js(){
        return array();}//   new PPAGE('default_citizen/js/default_citizen.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_citizen/css/default_citizen.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_citizen/tpl/default_citizen.tpl'))->SERVERPATH(), $vars);
    }
}