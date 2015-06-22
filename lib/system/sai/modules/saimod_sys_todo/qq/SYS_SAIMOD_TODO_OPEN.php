<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_TODO_OPEN extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_PG.' SET '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_OPEN.
' WHERE "'.\SYSTEM\DBD\system_todo::FIELD_ID.'"= $1;';
    }
    public static function pqsql(){return
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_MYS.' SET '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_OPEN.
' WHERE '.\SYSTEM\DBD\system_todo::FIELD_ID.'= ?;';
    }
}