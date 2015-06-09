<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_ASSIGN extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
'INSERT INTO '.\SYSTEM\DBD\system_todo_assign::NAME_MYS.
' ('.\SYSTEM\DBD\system_todo_assign::FIELD_TODO.','.\SYSTEM\DBD\system_todo_assign::FIELD_USER.','.\SYSTEM\DBD\system_todo_assign::FIELD_TIME.')'.
' VALUES(?,?, NOW());'
);}}

