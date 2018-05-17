<?php
class default_politicians implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_politicians');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_politicians');}
    public static function js(){
        return array();}//   new PPAGE('default_politicians/js/default_politicians.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_politicians/css/default_politicians.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_politicians/tpl/default_politicians.tpl'))->SERVERPATH(), $vars);
    }
}