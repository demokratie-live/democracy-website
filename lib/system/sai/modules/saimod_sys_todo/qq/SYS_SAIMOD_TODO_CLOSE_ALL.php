<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_TODO_CLOSE_ALL extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_PG.' SET '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.
' WHERE "'.\SYSTEM\DBD\system_todo::FIELD_TYPE.'"='.\SYSTEM\DBD\system_todo::FIELD_TYPE_EXCEPTION.';';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_MYS.' SET '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.', '.\SYSTEM\DBD\system_todo::FIELD_TIME_CLOSED.'=NOW()'.
' WHERE `'.\SYSTEM\DBD\system_todo::FIELD_TYPE.'`='.\SYSTEM\DBD\system_todo::FIELD_TYPE_EXCEPTION.';';
    }
}