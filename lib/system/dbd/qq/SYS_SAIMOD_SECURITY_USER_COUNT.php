<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER_COUNT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT count(*) as count FROM system.user WHERE username LIKE "%$1%" OR email LIKE "%$1%";',
//mys
'SELECT count(*) as count FROM system_user WHERE username LIKE ?;'
);}}

