<?php
namespace SQL;

class FAQ_DELETE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM faq WHERE `id` = ?;';
    }
}