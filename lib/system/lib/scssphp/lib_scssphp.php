<?php
namespace LIB;
class lib_scssphp extends \LIB\lib_php{
    public static function get_class(){
        return self::class;}
    public static function php_autoload(){
        require_once dirname(__FILE__).'/lib/scss.inc.php';
        return true;}
    public static function version(){
        return 'https://github.com/leafo/scssphp/';}
}