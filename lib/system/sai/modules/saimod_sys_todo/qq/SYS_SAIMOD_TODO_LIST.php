<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_LIST extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM system.todo LEFT JOIN system.user ON system.todo.user = system.user.ID ORDER BY count, time DESC LIMIT 100;',
//mys
'SELECT * FROM system_todo LEFT JOIN system_user ON system_todo.user = system_user.ID ORDER BY count, time DESC LIMIT 100;'
);}}
