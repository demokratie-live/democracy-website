<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_RIGHT_CHECK extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM system.rights'.
' WHERE "ID" = $1;',
//mys
'SELECT * FROM system_rights'.
' WHERE ID = ?;'
);}}

