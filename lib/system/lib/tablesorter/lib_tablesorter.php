<?php
namespace LIB;
class lib_tablesorter extends \LIB\lib_jscss{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('/tablesorter/lib/dist/js/jquery.tablesorter.min.js');}
    public static function css_path(){
        return new \SYSTEM\PLIB('/tablesorter/lib/dist/css/jquery.tablesorter.pager.min.css');}
    public static function version(){
        return '<a href="https://github.com/Mottie/tablesorter" target="_blank">https://github.com/Mottie/tablesorter</a> (commit: ?)';}
}