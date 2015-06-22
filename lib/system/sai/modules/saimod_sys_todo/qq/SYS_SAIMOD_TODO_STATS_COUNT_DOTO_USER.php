<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_TODO_STATS_COUNT_DOTO_USER extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'SELECT COUNT(*) as `count` FROM system_todo WHERE state = 1 AND `type` = 1';
    }
    public static function mysql(){return
'SELECT COUNT(*) as `count` FROM system_todo WHERE state = 1 AND `type` = 1';
    }
}