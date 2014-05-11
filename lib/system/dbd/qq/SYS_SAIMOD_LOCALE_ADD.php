<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOCALE_ADD extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'INSERT INTO '.\SYSTEM\DBD\system_locale_string::NAME_PG.' (id, category) VALUES ($1, $2);',
//mys
'INSERT INTO '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' (id, category) VALUES (?, ?);'
);}}
