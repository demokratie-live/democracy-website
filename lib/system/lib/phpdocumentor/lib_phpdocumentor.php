<?php
namespace LIB;
class lib_phpdocumentor extends \LIB\lib_php{
    public static function get_class(){
        return self::class;}
    public static function php_autoload(){
        require_once dirname(__FILE__).'/lib/phpdocumentor.php';
        return true;}
    public static function version(){
        return 'https://www.phpdoc.org/ phpdocumentor2';}
}