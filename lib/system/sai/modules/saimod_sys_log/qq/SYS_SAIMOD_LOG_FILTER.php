<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_FILTER extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_PG.
' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_PG.
' ON '.\SYSTEM\DBD\system_log::NAME_PG.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
' = '.\SYSTEM\DBD\system_user::NAME_PG.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.' LIKE $1'.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.' DESC, '.\SYSTEM\DBD\system_log::NAME_PG.'."'.\SYSTEM\DBD\system_log::FIELD_ID.'" DESC;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.
' ON '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
' = '.\SYSTEM\DBD\system_user::NAME_MYS.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.' LIKE ?'.
' AND ('.\SYSTEM\DBD\system_log::FIELD_MESSAGE.' LIKE ? OR '.\SYSTEM\DBD\system_log::FIELD_FILE.' LIKE ? OR '.\SYSTEM\DBD\system_log::FIELD_IP.' LIKE ?)'.
' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.' DESC, '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_ID.' DESC;'
);}}
