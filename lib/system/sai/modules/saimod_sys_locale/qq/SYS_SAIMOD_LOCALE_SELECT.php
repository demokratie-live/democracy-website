<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOCALE_SELECT extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_locale_string::NAME_PG.' ORDER BY "category" ASC;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' ORDER BY category ASC;'
);}}
