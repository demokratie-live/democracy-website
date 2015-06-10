<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_FILTER_COUNT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_log::NAME_PG.
' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' LIKE $1;',
//mys
'SELECT COUNT(*) as count'.
' FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.' LIKE ?'.
' AND ('.\SYSTEM\DBD\system_log::FIELD_MESSAGE.' LIKE ? OR '.\SYSTEM\DBD\system_log::FIELD_FILE.' LIKE ? OR '.\SYSTEM\DBD\system_log::FIELD_IP.' LIKE ?);'
);}}

