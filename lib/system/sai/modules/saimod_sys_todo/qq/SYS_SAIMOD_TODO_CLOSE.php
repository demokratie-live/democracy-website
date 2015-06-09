<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_CLOSE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_PG.' SET '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.
' WHERE "'.\SYSTEM\DBD\system_todo::FIELD_ID.'"= $1;',
//mys
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_MYS.' SET '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.', '.\SYSTEM\DBD\system_todo::FIELD_TIME_CLOSED.'=NOW()'.
' WHERE '.\SYSTEM\DBD\system_todo::FIELD_ID.'= ?;'
);}}

