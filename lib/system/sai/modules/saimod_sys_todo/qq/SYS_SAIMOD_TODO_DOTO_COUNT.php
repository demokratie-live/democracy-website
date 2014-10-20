<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_DOTO_COUNT extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_todo::NAME_PG.' WHERE '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.';',
//mys
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_todo::NAME_MYS.' WHERE '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.';'
);}}
