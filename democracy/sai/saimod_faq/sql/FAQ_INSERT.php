<?php
namespace SQL;

class FAQ_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO faq (`order`,`question`,`answer`,`categories`)VALUES(?,?,?,?);';
    }
}