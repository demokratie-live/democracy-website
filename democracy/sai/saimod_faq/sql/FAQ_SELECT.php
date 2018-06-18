<?php
namespace SQL;

class FAQ_SELECT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM faq WHERE id = ?;';
    }
}