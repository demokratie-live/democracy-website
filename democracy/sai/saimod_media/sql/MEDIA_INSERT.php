<?php
namespace SQL;

class MEDIA_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO media (`type`,`order`,`title`,`img`,`link`)VALUES(?,?,?,?,?);';
    }
}