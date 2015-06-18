<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_SECURITY_USER_LOG_COUNT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_log::NAME_PG.
' WHERE "'.\SYSTEM\DBD\system_log::FIELD_USER.'"'.
' = $1;';
    }
    public static function mysql(){return 
'SELECT COUNT(*) as count'.
' FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
' WHERE '.\SYSTEM\DBD\system_log::FIELD_USER.
' = ?;';
    }
}

