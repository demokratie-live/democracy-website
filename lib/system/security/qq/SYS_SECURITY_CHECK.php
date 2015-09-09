<?php
namespace SYSTEM\SQL;

class SYS_SECURITY_CHECK extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\UserRightsTable::NAME_PG.
' WHERE "'.\SYSTEM\SQL\UserRightsTable::FIELD_USERID.'" = $1'.
' AND "'.\SYSTEM\SQL\UserRightsTable::FIELD_RIGHTID.'" = $2;';
    }
    public static function mysql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\UserRightsTable::NAME_MYS.
' WHERE '.\SYSTEM\SQL\UserRightsTable::FIELD_USERID.' = ?'.
' AND '.\SYSTEM\SQL\UserRightsTable::FIELD_RIGHTID.' = ?;';
    }
}