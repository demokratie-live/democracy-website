<?php
namespace SQL;

class UNSUBSCRIBE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM contact_email_list WHERE email = ? AND list = ?;';
    }
}