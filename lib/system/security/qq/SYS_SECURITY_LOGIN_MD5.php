<?php
namespace SYSTEM\SQL;
class SYS_SECURITY_LOGIN_MD5 extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return        
'SELECT * FROM '.\SYSTEM\SQL\system_user::NAME_PG.
' WHERE (lower('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') LIKE lower($1) OR lower('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') LIKE lower($1))'.
' AND ('.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = $2 OR  '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_MD5.' = $3 );';
    }
    public static function mysql(){return
'SELECT * FROM '.\SYSTEM\SQL\system_user::NAME_MYS.
' WHERE (lower('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') LIKE lower(?) OR lower('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') LIKE lower(?))'.
' AND ('.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = ? OR '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_MD5.' = ? );';
    }
}