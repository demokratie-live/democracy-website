<?php
namespace SYSTEM\DBD;

class SYS_SECURITY_AVAILABLE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_user::NAME_PG.
' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') like lower($1) ;',
//mys
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_user::NAME_MYS.
' WHERE lower('.\SYSTEM\DBD\system_user::FIELD_USERNAME.') like lower(?) ;'
);}}