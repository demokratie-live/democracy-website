<?php
namespace SYSTEM\DBD;

class SYS_SECURITY_CREATE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'INSERT INTO '.\SYSTEM\DBD\system_user::NAME_PG.
' ('.\SYSTEM\DBD\system_user::FIELD_USERNAME.','.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.','
    .\SYSTEM\DBD\system_user::FIELD_EMAIL.','.\SYSTEM\DBD\system_user::FIELD_LOCALE.','.\SYSTEM\DBD\system_user::FIELD_ACCOUNT_FLAG.')'.
' VALUES ($1, $2, $3, $4, $5);',
//mys
'INSERT INTO '.\SYSTEM\DBD\system_user::NAME_MYS.
' ('.\SYSTEM\DBD\system_user::FIELD_USERNAME.','.\SYSTEM\DBD\system_user::FIELD_PASSWORD_SHA.','
    .\SYSTEM\DBD\system_user::FIELD_EMAIL.','.\SYSTEM\DBD\system_user::FIELD_LOCALE.','.\SYSTEM\DBD\system_user::FIELD_ACCOUNT_FLAG.')'.
' VALUES (?, ?, ?, ?, ?);'
);}}