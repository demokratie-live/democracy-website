<?php
class default_news implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_news');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_news');}
    public static function js(){
        return array(   new PPAGE('default_news/js/default_news.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_ceta/css/default_ceta.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_news/tpl/default_news.tpl'))->SERVERPATH(), $vars);
    }
}