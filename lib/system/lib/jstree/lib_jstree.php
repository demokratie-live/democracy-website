<?php
namespace LIB;
class lib_jstree extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('jstree/lib/jstree/dist/jstree.min.js');}
    public static function version(){
        return '<a href="https://github.com/vakata/jstree/tree/56530b6b2e17c3046d02ab5d06b87c59f038f0c2" target="_blank">https://github.com/vakata/jstree/tree/56530b6b2e17c3046d02ab5d06b87c59f038f0c2</a>';}
}