<?php
namespace SQL;

class EMAIL_LISTS_SELECT_COUNT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT email_list.*, count(email) as count FROM email_list
 LEFT JOIN contact_email_list ON email_list.id = contact_email_list.list
 GROUP BY id;';
    }
}