<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_TODO_DOTO_LIST extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_todo::NAME_PG.
        ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_PG.' ON '.\SYSTEM\DBD\system_todo::NAME_PG.'."'.\SYSTEM\DBD\system_todo::FIELD_USER.'"='.\SYSTEM\DBD\system_user::NAME_PG.'."'.\SYSTEM\DBD\system_user::FIELD_ID.'"'.
        ' WHERE '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.
        ' ORDER BY '.\SYSTEM\DBD\system_todo::FIELD_TYPE.' DESC, '.\SYSTEM\DBD\system_todo::FIELD_COUNT.' DESC, '.\SYSTEM\DBD\system_todo::FIELD_TIME.' DESC LIMIT 100;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_todo::NAME_MYS.
        ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.' ON '.\SYSTEM\DBD\system_todo::FIELD_USER.'='.\SYSTEM\DBD\system_user::NAME_MYS.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
        ' WHERE '.\SYSTEM\DBD\system_todo::FIELD_STATE.'='.\SYSTEM\DBD\system_todo::FIELD_STATE_CLOSED.
        ' ORDER BY '.\SYSTEM\DBD\system_todo::FIELD_TYPE.' DESC, '.\SYSTEM\DBD\system_todo::FIELD_COUNT.' DESC, '.\SYSTEM\DBD\system_todo::FIELD_TIME.' DESC LIMIT 100;'
);}}