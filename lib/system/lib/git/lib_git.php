<?php
namespace LIB;
class lib_git extends \LIB\lib_php{
    public static function get_class($params = null){
        return self::class;}
    public static function php_autoload(){
        require_once dirname(__FILE__).'/lib/autoload.inc';
        return true;}
    public static function version(){
        return '<a href="http://github.com/kbjr/Git.php" target="_blank">0.1.4</a>';}
}
