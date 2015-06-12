<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USERS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT id,username,email,joindate,locale, EXTRACT(EPOCH FROM last_active) as last_active, account_flag FROM system.user WHERE username LIKE $1 OR email LIKE $1 ORDER BY last_active DESC;',
//mys
'SELECT id,username,email,joindate,locale,unix_timestamp(last_active)as last_active, account_flag FROM system_user WHERE username LIKE ? OR email LIKE ? ORDER BY last_active DESC;'
);}}