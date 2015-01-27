<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT COUNT(*) as count FROM system.user_to_rights WHERE "rightID" = $1 AND "userID" = $2 LIMIT 1;',
//mys
'SELECT COUNT(*) as count FROM system_user_to_rights WHERE rightID = ? AND userID = ? LIMIT 1;'
);}}

