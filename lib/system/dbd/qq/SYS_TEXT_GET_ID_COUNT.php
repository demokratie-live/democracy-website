<?php
namespace SYSTEM\DBD;
class SYS_TEXT_GET_ID_COUNT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT count(*) as count FROM system_text
 WHERE id = ?;';
    }
}