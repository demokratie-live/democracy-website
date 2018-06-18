<?php
namespace SQL;

class GOAL_DELETE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM roadmap WHERE `id` = ?;';
    }
}