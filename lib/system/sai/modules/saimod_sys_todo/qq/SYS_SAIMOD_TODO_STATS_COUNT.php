<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_STATS_COUNT extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT COUNT(*) as `count` FROM system_todo GROUP BY state, `type` ORDER BY state, `type`;',
//mys
'SELECT COUNT(*) as `count` FROM system_todo GROUP BY state, `type` ORDER BY state, `type`;'
);}}
