<?php
namespace SYSTEM\DBD;

class SYS_SECURITY_TRACK_LOGINS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.
' SET '.\SYSTEM\DBD\system_user::FIELD_LAST_ACTIVE.'= to_timestamp($1)'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2;',
//mys
'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.
' SET '.\SYSTEM\DBD\system_user::FIELD_LAST_ACTIVE.'= ?'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?;'
);}}