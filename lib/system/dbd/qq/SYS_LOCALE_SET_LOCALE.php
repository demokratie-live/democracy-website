<?php
namespace SYSTEM\DBD;

class SYS_LOCALE_SET_LOCALE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.
' SET '.\SYSTEM\DBD\system_user::FIELD_LOCALE.' = $1'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $2;',
//mys
'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.
' SET '.\SYSTEM\DBD\system_user::FIELD_LOCALE.' = ? '.
'WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?;'
);}}