<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_STATS_COUNT_TODO_ASSIGNED extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
'SELECT COUNT(*) as `count` FROM system_todo'.
' LEFT JOIN system_todo_assign ON system_todo.id = system_todo_assign.todo'.
' WHERE state = 0 AND `type` = 1 AND system_todo_assign.user IS NOT NULL;'
);}}
