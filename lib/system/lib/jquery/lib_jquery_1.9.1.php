<?php
namespace LIB;
class lib_jquery_1_9_1 extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return \SYSTEM\WEBPATH(new \SYSTEM\PLIB(),'/jquery/lib/jquery-1.9.1.min.js');}
    public static function version(){
        return '1.9.1';}
}
