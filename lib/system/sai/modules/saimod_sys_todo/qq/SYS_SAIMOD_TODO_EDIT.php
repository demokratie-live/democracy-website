<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_EDIT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_PG.' SET '.\SYSTEM\DBD\system_todo::FIELD_MESSAGE.'= $1'.
' WHERE "'.\SYSTEM\DBD\system_todo::FIELD_ID.'"= $2;',
//mys
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_MYS.' SET '.\SYSTEM\DBD\system_todo::FIELD_MESSAGE.'= ?, '
         .\SYSTEM\DBD\system_todo::FIELD_MESSAGE_HASH.'= SHA1(?)'.
' WHERE '.\SYSTEM\DBD\system_todo::FIELD_ID.'= ?;'
);}}

