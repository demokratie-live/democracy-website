<?php
namespace SQL;

class GOAL_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO roadmap (`order`,`goal`,`issue`,`beta`,`mvp`,`dream`)VALUES(?,?,?,?,?,?);';
    }
}