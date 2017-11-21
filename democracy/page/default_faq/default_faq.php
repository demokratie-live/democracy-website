<?php
class default_faq implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_faq');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_faq');}
    public static function js(){
        return array(   new PPAGE('default_faq/js/default_faq.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_faq/css/default_faq.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_faq/tpl/default_faq.tpl'))->SERVERPATH(), $vars);
    }
}