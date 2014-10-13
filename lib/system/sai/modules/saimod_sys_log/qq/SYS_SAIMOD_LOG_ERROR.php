<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_ERROR extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_PG.
' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_PG.
' ON '.\SYSTEM\DBD\system_log::NAME_PG.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
' = '.\SYSTEM\DBD\system_user::NAME_PG.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
' WHERE '.\SYSTEM\DBD\system_log::NAME_PG.'."'.\SYSTEM\DBD\system_log::FIELD_ID.'" = $1;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.
' ON '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
' = '.\SYSTEM\DBD\system_user::NAME_MYS.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
' WHERE '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_ID.' = ?;'
);}}

