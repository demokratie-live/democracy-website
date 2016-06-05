<?php
namespace SYSTEM\SQL;
class SYS_SECURITY_LOGIN_USER_SHA1 extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'SELECT * FROM '.\SYSTEM\SQL\system_user::NAME_PG.
' WHERE (UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') LIKE UPPER($1)'.
' AND '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = $3;';
    }
    public static function mysql(){return
'SELECT * FROM '.\SYSTEM\SQL\system_user::NAME_MYS.
' WHERE UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') LIKE UPPER(?)'.
' AND '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = ?;';
    }
}