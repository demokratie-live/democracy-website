<?php
class default_staatstrojaner implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_staatstrojaner');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_staatstrojaner');}
    public static function js(){
        return array(   new PPAGE('default_staatstrojaner/js/default_staatstrojaner.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_staatstrojaner/css/default_staatstrojaner.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_staatstrojaner/tpl/default_staatstrojaner.tpl'))->SERVERPATH(), $vars);
    }
}