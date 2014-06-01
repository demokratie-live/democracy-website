<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOCALE_SELECT_LANG extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT id, category, ? FROM '.\SYSTEM\DBD\system_locale_string::NAME_PG.' ORDER BY "category" ASC;',
//mys
'SELECT id, category, ? FROM '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' ORDER BY category ASC;'
);}}
