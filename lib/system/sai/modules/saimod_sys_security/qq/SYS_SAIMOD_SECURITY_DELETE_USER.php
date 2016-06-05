<?php
namespace SYSTEM\SQL;
class SYS_SAIMOD_SECURITY_DELETE_USER extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'DELETE FROM system_user WHERE id = ?;';
    }
}

