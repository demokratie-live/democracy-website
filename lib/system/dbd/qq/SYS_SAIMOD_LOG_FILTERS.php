<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_FILTERS extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' FROM '.\SYSTEM\DBD\system_log::NAME_PG.
' GROUP BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.';',
//mys
'SELECT '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
' GROUP BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.';'
);}}

