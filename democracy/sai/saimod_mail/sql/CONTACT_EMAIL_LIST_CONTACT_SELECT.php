<?php
namespace SQL;

class CONTACT_EMAIL_LIST_CONTACT_SELECT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM contact_email_list
 LEFT JOIN contact ON contact_email_list.email = contact.email
 WHERE list = ?;';
    }
}