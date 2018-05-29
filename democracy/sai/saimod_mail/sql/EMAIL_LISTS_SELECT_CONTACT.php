<?php
namespace SQL;

class EMAIL_LISTS_SELECT_CONTACT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM email_list
 LEFT JOIN (SELECT * FROM contact_email_list WHERE email = ?) cel
 ON  email_list.id = cel.list;';
    }
}