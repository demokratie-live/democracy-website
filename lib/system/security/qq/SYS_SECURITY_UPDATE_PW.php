<?php
namespace SYSTEM\DBD;
class SYS_SECURITY_UPDATE_PW extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.
' SET '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $1'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2;';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.
' SET '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = ?'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?;';
    }
}