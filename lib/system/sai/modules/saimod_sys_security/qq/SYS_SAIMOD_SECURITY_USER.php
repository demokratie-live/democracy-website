<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT id,username,email,joindate,locale, EXTRACT(EPOCH FROM last_active) as last_active ,account_flag FROM system.user WHERE username = $1 LIMIT 1;',
//mys
'SELECT id,username,email,joindate,locale,last_active,account_flag FROM system_user WHERE username = ? LIMIT 1;'
);}}

