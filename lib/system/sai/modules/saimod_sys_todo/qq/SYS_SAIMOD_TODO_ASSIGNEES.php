<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_ASSIGNEES extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
' SELECT assign.'.\SYSTEM\DBD\system_todo_assign::FIELD_TODO.' as todo_id,'.
    ' assignee.'.\SYSTEM\DBD\system_user::FIELD_USERNAME.' as assignee,'.
    ' assignee.'.\SYSTEM\DBD\system_user::FIELD_ID.' as assignee_id'.
' FROM '.\SYSTEM\DBD\system_todo_assign::NAME_MYS.' as assign'.
' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.' as assignee ON assign.'.\SYSTEM\DBD\system_todo_assign::FIELD_USER.'=assignee.'.\SYSTEM\DBD\system_user::FIELD_ID.
' WHERE assign.'.\SYSTEM\DBD\system_todo_assign::FIELD_TODO.' = ?'.
' ORDER BY case when assign.'.\SYSTEM\DBD\system_todo_assign::FIELD_USER.' = ? then 1 else 2 end'.
' LIMIT 10'
);}}