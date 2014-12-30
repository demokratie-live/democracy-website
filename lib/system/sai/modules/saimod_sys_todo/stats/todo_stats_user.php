<?php
namespace SYSTEM\SAI;

class todo_stats_user extends todo_stats {
    public static function stats() {
        $res = array();
        $res[0] = \SYSTEM\DBD\SYS_SAIMOD_TODO_STATS_COUNT_TODO_USER::Q1();
        $res[2] = \SYSTEM\DBD\SYS_SAIMOD_TODO_STATS_COUNT_DOTO_USER::Q1();
        return new \SYSTEM\SAI\todo_stats_data('User ToDos',floatval($res[2]['count']),floatval($res[0]['count']+$res[2]['count']));}
}
