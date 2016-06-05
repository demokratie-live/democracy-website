<?php
namespace SYSTEM\SQL;
class SYS_SAIMOD_SECURITY_DELETE_USER_RIGHTS extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'DELETE FROM system_user_to_rights WHERE userID = ?;';
    }
}

