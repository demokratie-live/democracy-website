<?php
namespace SYSTEM\DBD;

class SYS_SECURITY_CHECK extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\UserRightsTable::NAME_PG.
' WHERE "'.\SYSTEM\DBD\UserRightsTable::FIELD_USERID.'" = $1'.
' AND "'.\SYSTEM\DBD\UserRightsTable::FIELD_RIGHTID.'" = $2;',
//mys
'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\UserRightsTable::NAME_MYS.
' WHERE '.\SYSTEM\DBD\UserRightsTable::FIELD_USERID.' = ?'.
' AND '.\SYSTEM\DBD\UserRightsTable::FIELD_RIGHTID.' = ?;'
);}}