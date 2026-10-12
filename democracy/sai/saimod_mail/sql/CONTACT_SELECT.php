<?php
namespace SQL;

class CONTACT_SELECT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM contact WHERE email = ?;';
    }
}