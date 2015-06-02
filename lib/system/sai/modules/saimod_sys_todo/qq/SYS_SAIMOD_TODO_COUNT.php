<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_COUNT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_todo::NAME_PG.' WHERE '.\SYSTEM\DBD\system_todo::FIELD_STATE.'=?;',
//mys
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_todo::NAME_MYS.' WHERE '.\SYSTEM\DBD\system_todo::FIELD_STATE.'=?;'
);}}
