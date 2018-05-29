<?php
namespace SQL;

class EMAIL_LIST_SELECT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM email_list WHERE id=?;';
    }
}