<?php
namespace LIB;
class lib_bootstrap extends \LIB\lib_jscss{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('bootstrap/lib/js/bootstrap.min.js');}
    public static function css_path(){
        return new \SYSTEM\PLIB('bootstrap/lib/css/bootstrap.min.css');}
    public static function version(){
        return '4.0.0';}
}
