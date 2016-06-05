<?php
namespace SYSTEM\SQL;
class SYS_TOKEN_CONFIRM extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE system_token SET expire = null, confirm_time = NOW(), confirm_user = ? WHERE token = ?;';
    }    
}