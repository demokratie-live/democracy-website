<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOCALE_ID extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_locale_string::NAME_PG.' WHERE id = $1 ORDER BY "category" ASC;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' WHERE id = ? ORDER BY "category" ASC;'
);}}
