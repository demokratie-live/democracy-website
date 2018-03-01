<?php
namespace SQL;

class SUBSCRIBE_EMAIL_COUNT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE subscribe SET emails_sent = emails_sent+1 WHERE email = ?';
    }
}
