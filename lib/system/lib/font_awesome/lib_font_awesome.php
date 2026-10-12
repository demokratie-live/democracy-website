<?php
namespace LIB;
class lib_font_awesome extends \LIB\lib_css{
    public static function get_class(){
        return self::class;}
    public static function css_path(){
        return new \SYSTEM\PLIB('font_awesome/lib/css/all.min.css');}
    public static function version(){
        return '<a href="https://github.com/FortAwesome/Font-Awesome/commit/d8db3d032d22e7a5e21f3b40905b7867be19bb02">commit d8db3d032d22e7a5e21f3b40905b7867be19bb02</a>';}
}