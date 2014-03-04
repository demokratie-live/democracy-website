<?php
namespace SYSTEM\DBD;

//using QI:
//this does not return true nessecary,
//since if called in a very short time twice
//the affected row count could be zero and therefore return false!
class SYS_SECURITY_UPDATE_LASTACTIVE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'UPDATE '.\SYSTEM\DBD\system_user::NAME_PG.
' SET '.\SYSTEM\DBD\system_user::FIELD_LAST_ACTIVE.' = NOW()'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = $1;',
//mys
'UPDATE '.\SYSTEM\DBD\system_user::NAME_MYS.
' SET '.\SYSTEM\DBD\system_user::FIELD_LAST_ACTIVE.' = NOW()'.
' WHERE '.\SYSTEM\DBD\system_user::FIELD_ID.' = ?;'
);}}