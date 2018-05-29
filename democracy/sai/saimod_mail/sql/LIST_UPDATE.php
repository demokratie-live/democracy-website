<?php
namespace SQL;

class LIST_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE email_list SET name=? WHERE id=?;';
    }
}