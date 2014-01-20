<?php
namespace SYSTEM\DBD;

class SYS_SECURITY_UPDATE_PW extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.
' SET '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $1'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2;',
//mys
'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.
' SET '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = ?'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?;'
);}}