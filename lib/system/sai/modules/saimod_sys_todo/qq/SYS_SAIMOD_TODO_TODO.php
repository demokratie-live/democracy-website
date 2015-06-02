<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_TODO extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
'SELECT * FROM('.
    ' SELECT todo.*, assignee.'.\SYSTEM\DBD\system_user::FIELD_ID.' as assignee_id, assignee.'.\SYSTEM\DBD\system_user::FIELD_USERNAME.' as assignee, creator.'.\SYSTEM\DBD\system_user::FIELD_USERNAME.' as username'.
    ' FROM '.\SYSTEM\DBD\system_todo::NAME_MYS.' as todo'.
    ' LEFT JOIN '.\SYSTEM\DBD\system_todo_assign::NAME_MYS.' as assign ON todo.'.\SYSTEM\DBD\system_todo::FIELD_ID.' = assign.'.\SYSTEM\DBD\system_todo_assign::FIELD_TODO.
    ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.' as creator ON todo.'.\SYSTEM\DBD\system_todo::FIELD_USER.' = creator.'.\SYSTEM\DBD\system_user::FIELD_ID.
    ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.' as assignee ON assign.'.\SYSTEM\DBD\system_todo_assign::FIELD_USER.' = assignee.'.\SYSTEM\DBD\system_user::FIELD_ID.
    ' WHERE todo.'.\SYSTEM\DBD\system_todo::FIELD_ID.' = ?'.
    ' ORDER BY case when assign.'.\SYSTEM\DBD\system_todo_assign::FIELD_USER.' = ? then 1 else 2 end'.
') as a'.
' GROUP BY '.\SYSTEM\DBD\system_todo::FIELD_ID.';'
);}}

