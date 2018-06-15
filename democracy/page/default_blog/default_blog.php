<?php
class default_blog implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_blog');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_blog');}
    public static function js(){
        return array();}//   new PPAGE('default_impressum/js/default_impressum.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_impressum/css/default_impressum.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_blog/tpl/default_blog.tpl'))->SERVERPATH(), $vars);
    }
}