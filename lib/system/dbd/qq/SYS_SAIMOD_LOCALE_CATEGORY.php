<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOCALE_CATEGORY extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT "category", COUNT(*) as "count" FROM '.\SYSTEM\DBD\system_locale_string::NAME_PG.' GROUP BY "category" ORDER BY "category" ASC;',
//mys
'SELECT `category`, COUNT(*) as `count` FROM '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' GROUP BY `category` ORDER BY `category` ASC;'
);}}
