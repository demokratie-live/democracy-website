<?php
namespace SQL;

class GOAL_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE roadmap SET `order`=?,`goal`=?,`beta`=?,`mvp`=?,`dream`=? WHERE `id` = ?;';
    }
}