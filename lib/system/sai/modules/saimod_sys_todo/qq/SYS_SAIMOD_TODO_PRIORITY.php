<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_PRIORITY extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'todo',
//mys
'UPDATE '.\SYSTEM\DBD\system_todo::NAME_MYS.' SET '.\SYSTEM\DBD\system_todo::FIELD_PRIORITY.' = '.\SYSTEM\DBD\system_todo::FIELD_PRIORITY.' + ?'.
' WHERE '.\SYSTEM\DBD\system_todo::FIELD_ID.'= ?;'
);}}

