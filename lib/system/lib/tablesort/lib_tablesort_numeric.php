<?php
namespace LIB;
class lib_tablesort_numeric extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return \SYSTEM\WEBPATH(new \SYSTEM\PLIB(),'/tablesort/lib/tablesort.numeric.js');}
    public static function version(){
        return '<a href="https://github.com/tristen/tablesort" target="_blank">https://github.com/tristen/tablesort</a> (commit: 941a656c3e)';}
}