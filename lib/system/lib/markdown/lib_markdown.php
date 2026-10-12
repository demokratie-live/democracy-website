<?php
namespace LIB;
class lib_markdown extends \LIB\lib_php{
    public static function get_class($params = null){
        return self::class;}
    public static function php_autoload(){
        require_once dirname(__FILE__).'/lib/Michelf/Markdown.inc.php';
        require_once dirname(__FILE__).'/lib/Michelf/MarkdownExtra.inc.php';
        return true;}
    public static function version(){
        return '1.5';}
}
