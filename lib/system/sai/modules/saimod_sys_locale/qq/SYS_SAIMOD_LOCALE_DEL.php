<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOCALE_DEL extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM '.\SYSTEM\DBD\system_locale_string::NAME_PG.' WHERE id=$1;',
//mys
'DELETE FROM '.\SYSTEM\DBD\system_locale_string::NAME_MYS.' WHERE id=?;'
);}}
