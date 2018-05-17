<?php
class default_engeneering implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_engeneering');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_engeneering');}
    public static function js(){
        return array();}//   new PPAGE('default_engeneering/js/default_engeneering.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_engeneering/css/default_engeneering.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_engeneering/tpl/default_engeneering.tpl'))->SERVERPATH(), $vars);
    }
}