<?php
namespace SQL;

class EMAIL_PLACEHOLDER_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO email_placeholder (`id`,`email`,`name`,`type`,`data`)VALUES(?,?,?,?,?);';
    }
}