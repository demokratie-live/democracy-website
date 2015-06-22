<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_SECURITY_USER_LOG extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_PG.
' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_PG.
' ON '.\SYSTEM\DBD\system_log::NAME_PG.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
' = '.\SYSTEM\DBD\system_user::NAME_PG.'."'.\SYSTEM\DBD\system_user::FIELD_ID.'"'.
' WHERE "'.\SYSTEM\DBD\system_log::FIELD_USER.'" = $1'.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.' DESC LIMIT 100;';
    }
    public static function mysql(){return 
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.
' ON '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
' = '.\SYSTEM\DBD\system_user::NAME_MYS.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
' WHERE '.\SYSTEM\DBD\system_log::FIELD_USER.' = ?'.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.' DESC LIMIT 100;';
    }
}