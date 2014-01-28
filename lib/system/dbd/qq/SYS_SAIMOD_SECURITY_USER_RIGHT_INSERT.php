<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_USER_RIGHT_INSERT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'INSERT INTO system_user_to_rights (rightID, userID) VALUES(?, ?);'
);}}

