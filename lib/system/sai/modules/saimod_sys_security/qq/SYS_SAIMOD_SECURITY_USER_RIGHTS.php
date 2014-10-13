<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER_RIGHTS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM system.rights LEFT JOIN system.user_to_rights ON system.rights."ID" = system.user_to_rights."rightID" WHERE system.user_to_rights."userID" = $1 ORDER BY system.rights."ID" ASC;',
//mys
'SELECT * FROM system_rights LEFT JOIN system_user_to_rights ON system_rights.id = system_user_to_rights.rightID WHERE system_user_to_rights.userID = ? ORDER BY system_rights.id ASC;'
);}}

