<?php
namespace SQL;

class ISSUBSCRIBED extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT COUNT(*) AS count FROM contact_email_list WHERE email = ? AND list = ?;';
    }
}