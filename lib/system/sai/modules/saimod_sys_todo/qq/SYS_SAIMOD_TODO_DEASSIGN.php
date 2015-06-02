<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_DEASSIGN extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
'DELETE FROM '.\SYSTEM\DBD\system_todo_assign::NAME_MYS.' WHERE '.\SYSTEM\DBD\system_todo_assign::FIELD_TODO.' = ? AND '.\SYSTEM\DBD\system_todo_assign::FIELD_USER.' = ?;'
);}}

