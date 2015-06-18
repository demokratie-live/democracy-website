<?php
namespace SYSTEM\DBD;
class SYS_SECURITY_CREATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return           
'INSERT INTO '.\SYSTEM\DBD\system_user::NAME_PG.
' ('.\SYSTEM\DBD\system_user::FIELD_USERNAME.','.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.','
    .\SYSTEM\DBD\system_user::FIELD_EMAIL.','.\SYSTEM\DBD\system_user::FIELD_LOCALE.','.\SYSTEM\DBD\system_user::FIELD_ACCOUNT_FLAG.')'.
' VALUES ($1, $2, $3, $4, $5);';
    }
    public static function mysql(){return
'INSERT INTO '.\SYSTEM\DBD\system_user::NAME_MYS.
' ('.\SYSTEM\DBD\system_user::FIELD_USERNAME.','.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.','
    .\SYSTEM\DBD\system_user::FIELD_EMAIL.','.\SYSTEM\DBD\system_user::FIELD_LOCALE.','.\SYSTEM\DBD\system_user::FIELD_ACCOUNT_FLAG.')'.
' VALUES (?, ?, ?, ?, ?);';
    }
}