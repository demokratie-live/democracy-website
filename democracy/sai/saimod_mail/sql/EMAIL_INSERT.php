<?php
namespace SQL;

class EMAIL_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO email (name,account,sender,subject,template_text,template_html)VALUES(?,?,?,?,?,?);';
    }
}