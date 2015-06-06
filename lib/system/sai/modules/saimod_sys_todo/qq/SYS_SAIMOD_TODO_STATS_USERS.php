<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_STATS_USERS extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
'SELECT username, 
 sum(case when state = 0 then 1 else 0 end) state_open,
 sum(case when state = 1 then 1 else 0 end) state_closed,
 COUNT(*) as count
FROM system_todo_assign 
LEFT JOIN system_todo ON system_todo_assign.todo = system_todo.id
LEFT JOIN system_user ON system_todo_assign.user = system_user.id
GROUP BY system_todo_assign.user
ORDER BY count DESC;'
);}}
