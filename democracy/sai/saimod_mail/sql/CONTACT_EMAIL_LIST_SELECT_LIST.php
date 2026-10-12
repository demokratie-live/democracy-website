<?php
namespace SQL;

class CONTACT_EMAIL_LIST_SELECT_LIST extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT contact_email_list.email, email_sent.email as done FROM contact_email_list'.
' LEFT JOIN email_sent ON contact_email_list.email = email_sent.email AND email_sent.id = ?'.
' WHERE list = ?'.
' HAVING done IS NULL;';
    }
}