<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER_RIGHT_DELETE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM system.user_to_rights WHERE "rightID" = $1 and "userID" = $2;',
//mys
'DELETE FROM system_user_to_rights WHERE rightID = ? and userID = ?;'
);}}

