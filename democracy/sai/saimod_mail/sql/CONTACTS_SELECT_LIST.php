<?php
namespace SQL;

class CONTACTS_SELECT_LIST extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM contact
 LEFT JOIN contact_email_list ON contact.email = contact_email_list.email
 WHERE list = ?;';
    
    
    }
}