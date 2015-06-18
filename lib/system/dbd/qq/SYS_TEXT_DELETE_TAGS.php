<?php
namespace SYSTEM\DBD;
class SYS_TEXT_DELETE_TAGS extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM `system_text_tag` WHERE id = ?;';
    }
}