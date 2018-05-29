<?php
namespace SQL;

class CONTACTS_SELECT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM contact;';
    }
}