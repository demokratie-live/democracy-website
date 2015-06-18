<?php
namespace SYSTEM\DBD;
class SYS_TEXT_RENAME extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE system_text SET id = ? WHERE id = ?;';
    }
}