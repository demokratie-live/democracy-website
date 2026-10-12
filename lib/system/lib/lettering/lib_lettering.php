<?php
namespace LIB;
class lib_lettering extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('lettering/lib/jquery.lettering.js');}
    public static function version(){
        return '<a href="https://github.com/davatron5000/Lettering.js" target="_blank">https://github.com/davatron5000/Lettering.js</a> (commit: 48388649e0)';}
}