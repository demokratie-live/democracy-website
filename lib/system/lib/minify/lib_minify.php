<?php
namespace LIB;
class lib_minify extends \LIB\lib_php{
    public static function get_class(){
        return self::class;}
    public static function php_autoload(){
        require_once dirname(__FILE__).'/lib/src/Minify.php';
        require_once dirname(__FILE__).'/lib/src/CSS.php';
        require_once dirname(__FILE__).'/lib/src/Exception.php';
        require_once dirname(__FILE__).'/lib/src/JS.php';
        return true;}
    public static function version(){
        return 'https://github.com/matthiasmullie/minify';}
}