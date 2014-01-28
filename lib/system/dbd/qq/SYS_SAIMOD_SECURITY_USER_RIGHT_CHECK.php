<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'SELECT COUNT(*) as count FROM system_user_to_rights WHERE rightID = ? AND userID = ? LIMIT 1;'
);}}

