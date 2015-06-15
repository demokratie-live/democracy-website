<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USERS_FILTER extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'todo',
//mys
'SELECT id,username,email,joindate,locale,unix_timestamp(last_active)as last_active, account_flag'.
' FROM system_user'.
' LEFT JOIN system_user_to_rights ON system_user.ID = system_user_to_rights.userID'.
' WHERE (username LIKE ? OR email LIKE ?) AND rightID = ?'.
' ORDER BY last_active DESC;'
);}}