<?php
namespace LIB;
class lib_mail_cannon extends \LIB\lib_css{
    public static function get_class(){
        return self::class;}
    public static function php_autoload(){
        require_once dirname(__FILE__).'/lib/mailcannon.php';
        return true;}
    public static function version(){
        return '1.0';}
}