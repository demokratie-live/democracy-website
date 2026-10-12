<?php
namespace LIB;
class lib_bootstrap_growl extends \LIB\lib_js{
    public static function get_class(){
        return self::class;}
    public static function js_path(){
        return new \SYSTEM\PLIB('bootstrap_growl/lib/jquery.bootstrap-growl.min.js');}
    public static function version(){
return '<a href="https://github.com/ifightcrime/bootstrap-growl/tree/162daa41cd1155fe308ef14daea6296fbaa3d756" target="_blank">github commit</a>';}}
