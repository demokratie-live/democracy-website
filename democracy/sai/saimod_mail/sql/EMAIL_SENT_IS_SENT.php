<?php
namespace SQL;

class EMAIL_SENT_IS_SENT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT count(*) as count FROM email_sent WHERE id = ? AND email = ?;';
    }
}