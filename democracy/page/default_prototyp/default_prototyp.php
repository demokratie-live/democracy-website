<?php
class default_prototyp implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_prototyp');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_prototyp');}
    public static function js(){
        return array(   new PPAGE('default_prototyp/js/default_prototyp.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_prototyp/css/default_prototyp.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_prototyp/tpl/default_prototyp.tpl'))->SERVERPATH(), $vars);
    }
}