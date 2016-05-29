<?php
namespace SYSTEM\SQL;
class SYS_SECURITY_AVAILABLE_EMAIL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\system_user::NAME_PG.
' WHERE UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') like UPPER($1) AND UPPER('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') = UPPER($2);';
    }
    public static function mysql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\system_user::NAME_MYS.
' WHERE UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') like UPPER(?) AND UPPER('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') = UPPER(?);';
    }
}