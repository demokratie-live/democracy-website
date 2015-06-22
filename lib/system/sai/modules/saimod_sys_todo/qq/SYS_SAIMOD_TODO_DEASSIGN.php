<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_TODO_DEASSIGN extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM '.\SYSTEM\DBD\system_todo_assign::NAME_MYS.' WHERE '.\SYSTEM\DBD\system_todo_assign::FIELD_TODO.' = ? AND '.\SYSTEM\DBD\system_todo_assign::FIELD_USER.' = ?;';
    }
}