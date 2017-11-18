<?php
class default_euro implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_euro');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_euro');}
    public static function js(){
        return array(   new PPAGE('default_euro/js/default_euro.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_euro/css/default_euro.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_euro/tpl/default_euro.tpl'))->SERVERPATH(), $vars);
    }
}