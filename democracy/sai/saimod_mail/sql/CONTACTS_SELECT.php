<?php
namespace SQL;

class CONTACTS_SELECT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM contact
 WHERE ( contact.email LIKE ? OR
   contact.name_first LIKE ? OR
   contact.name_last LIKE ? OR
   contact.organization LIKE ?
 );';
    }
}