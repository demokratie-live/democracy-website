<?php
namespace LIB;
class lib_jquery extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('jquery/lib/jquery-3.3.1.min.js');}
    public static function version(){
        return '3.3.1';}
}
