<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER_COUNT_FILTER extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TODO',
//mys
'SELECT count(*) as count FROM system_user'.
' LEFT JOIN system_user_to_rights ON system_user.ID = system_user_to_rights.userID'.
' WHERE (username LIKE ? OR email LIKE ?) AND rightID = ?;'
);}}

