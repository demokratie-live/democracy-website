<?php
namespace SQL;

class CONTACT_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT IGNORE INTO contact (email,sex,name_first,name_last)VALUES(?,?,?,?);';
    }
}