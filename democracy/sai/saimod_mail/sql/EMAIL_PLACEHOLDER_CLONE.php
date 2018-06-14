<?php
namespace SQL;

class EMAIL_PLACEHOLDER_CLONE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO email_placeholder (`email`,`name`,`type`,`data`)
(SELECT ? as email, name, type, data FROM email_placeholder WHERE email = ?);';
    }
}