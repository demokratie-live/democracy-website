<?php
namespace SYSTEM\SQL;
class SYS_SECURITY_CONFIRM_EMAIL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'UPDATE system_user SET email_confirmed = 1 WHERE id = ?;';
    }
}

