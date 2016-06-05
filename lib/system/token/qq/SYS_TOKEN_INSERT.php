<?php
namespace SYSTEM\SQL;
class SYS_TOKEN_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO system_token (token, class, expire, data, request_user)'.
' VALUES (?, ?, FROM_UNIXTIME(?), ?, ?);';
    }    
}