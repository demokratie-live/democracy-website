<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_TODO_EDIT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_PG.' SET '.\SYSTEM\DBD\system_todo::FIELD_MESSAGE.'= $1'.
' WHERE "'.\SYSTEM\DBD\system_todo::FIELD_ID.'"= $2;';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_MYS.' SET '.\SYSTEM\DBD\system_todo::FIELD_MESSAGE.'= ?, '
         .\SYSTEM\DBD\system_todo::FIELD_MESSAGE_HASH.'= SHA1(?)'.
' WHERE '.\SYSTEM\DBD\system_todo::FIELD_ID.'= ?;';
    }
}