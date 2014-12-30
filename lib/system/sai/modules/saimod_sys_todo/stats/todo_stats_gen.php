<?php
namespace SYSTEM\SAI;

class todo_stats_gen extends todo_stats {
    public static function stats() {
        $res = array();
        $res[0] = \SYSTEM\DBD\SYS_SAIMOD_TODO_STATS_COUNT_TODO_GEN::Q1();
        $res[2] = \SYSTEM\DBD\SYS_SAIMOD_TODO_STATS_COUNT_DOTO_GEN::Q1();
        return new \SYSTEM\SAI\todo_stats_data('Generated ToDos',floatval($res[2]['count']),floatval($res[0]['count']+$res[2]['count']));}
}
