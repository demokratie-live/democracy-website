<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_LOG_FILTERS extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'SELECT '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' FROM '.\SYSTEM\DBD\system_log::NAME_PG.
' GROUP BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.';';
    }
    public static function mysql(){return
'SELECT '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
' GROUP BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.';';
    }
}