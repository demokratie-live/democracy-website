<?php
class default_datenschutz implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_datenschutz');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_datenschutz');}
    public static function js(){
        return array();}//  new PPAGE('default_datenschutz/js/default_datenschutz.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_datenschutz/css/default_datenschutz.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_datenschutz/tpl/default_datenschutz.tpl'))->SERVERPATH(), $vars);
    }
}