<?php
namespace SQL;

class EMAIL_TEMPLATE_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT IGNORE INTO email_template (type,name,value)VALUES(?,?,?);';
    }
}