<?php
namespace LIB;
class lib_popper extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('popper/dist/umd/popper.min.js');}
    public static function version(){
        return '1.12.9';}
}
