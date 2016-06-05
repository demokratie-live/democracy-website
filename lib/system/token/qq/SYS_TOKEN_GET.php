<?php
namespace SYSTEM\SQL;
class SYS_TOKEN_GET extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM system_token WHERE token = ?;';
    }
}