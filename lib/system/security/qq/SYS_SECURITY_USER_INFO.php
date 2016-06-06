<?php
namespace SYSTEM\SQL;
class SYS_SECURITY_USER_INFO extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT id,username,email,joindate,locale,last_active,email_confirmed FROM '.\SYSTEM\SQL\system_user::NAME_PG.
' WHERE UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') like UPPER($1);';
    }
    public static function mysql(){return
'SELECT id,username,email,joindate,locale,last_active,email_confirmed FROM '.\SYSTEM\SQL\system_user::NAME_MYS.
' WHERE UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') like UPPER(?);';
    }
}