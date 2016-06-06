<?php
namespace SYSTEM\SQL;
class SYS_SECURITY_CHANGE_EMAIL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'UPDATE system_user SET email = ?, email_confirmed = NULL WHERE id = ?;';
    }
}

