<?php
namespace LIB;
class lib_jqbootstrapvalidation extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('/jqbootstrapvalidation/lib/jqBootstrapValidation.js');}
    public static function version(){
        return '<a href="http://ReactiveRaven.github.com/jqBootstrapValidation/" target="_blank">1.3.6</a>';}
}
