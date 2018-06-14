<?php
namespace SQL;

class EMAIL_LISTS_SELECT_AND_SENT_COUNT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT email_list.*,
    COUNT(contact_email_list.email) as count_all,
    COUNT(email_sent.email) as count_sent
 FROM email_list
 LEFT JOIN contact_email_list ON email_list.id = contact_email_list.list
 LEFT JOIN email_sent ON contact_email_list.email = email_sent.email AND email_sent.id = ?
 GROUP BY email_list.id
 ;';
    }
}