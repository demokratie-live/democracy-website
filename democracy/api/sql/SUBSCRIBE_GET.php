<?php
namespace SQL;

class SUBSCRIBE_GET extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM subscribe WHERE `email` = ?;';
    }
}
