<?php
class default_nutzungsbedingungen implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_nutzungsbedingungen');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_nutzungsbedingungen');}
    public static function js(){
        return array();}//  new PPAGE('default_nutzungsbedingungen/js/default_nutzungsbedingungen.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_nutzungsbedingungen/css/default_nutzungsbedingungen.css'));}
    public function html(){
        $vars = array();
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'));
        return SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_nutzungsbedingungen/tpl/default_nutzungsbedingungen.tpl'))->SERVERPATH(), $vars);
    }
}