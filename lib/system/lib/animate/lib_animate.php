<?php
namespace LIB;
class lib_animate extends \LIB\lib_css{
    public static function get_class(){
        return self::class;}
    public static function css_path(){
        return new \SYSTEM\PLIB('animate/lib/animate.min.css');}
    public static function version(){
        return '<a href="https://github.com/daneden/animate.css" target="_blank">https://github.com/daneden/animate.css</a> (commit: 9d4c59e5e5)';}
}