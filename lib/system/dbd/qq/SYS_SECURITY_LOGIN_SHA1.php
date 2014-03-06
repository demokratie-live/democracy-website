<?php
namespace SYSTEM\DBD;

class SYS_SECURITY_LOGIN_SHA1 extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_user::NAME_PG.
' WHERE (lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') LIKE lower($1) OR lower('.\SYSTEM\DBD\system_user::FIELD_EMAIL.') LIKE lower($1))'.
' AND '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = $2;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_user::NAME_MYS.
' WHERE (lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') LIKE lower(?) OR lower('.\SYSTEM\DBD\system_user::FIELD_EMAIL.') LIKE lower(?))'.
' AND '.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.' = ?;'
);}}