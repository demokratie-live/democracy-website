<?php
namespace SQL;

class EMAIL_ACCOUNTS_SELECT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM email_account;';
    }
}