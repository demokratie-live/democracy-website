<?php
namespace SYSTEM\SQL;
class SYS_SAIMOD_SECURITY_RENAME_USER extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'UPDATE system_user SET username = ? WHERE username = ?;';
    }
}

