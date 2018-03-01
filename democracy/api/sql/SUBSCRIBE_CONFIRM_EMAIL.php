<?php
namespace SQL;

class SUBSCRIBE_CONFIRM_EMAIL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE subscribe SET confirmed = 1 WHERE email = ?';
    }
}
