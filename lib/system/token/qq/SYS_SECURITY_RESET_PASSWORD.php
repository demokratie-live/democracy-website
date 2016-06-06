<?php
namespace SYSTEM\SQL;
class SYS_SECURITY_RESET_PASSWORD extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'UPDATE system_user SET password_sha1 = ? WHERE id = ?;';
    }
}

