<?php
namespace SQL;

class CONTACT_INSERT_EMAIL_NAME extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'REPLACE INTO contact (email,name_first,name_last)VALUES(?,?,?);';
    }
}