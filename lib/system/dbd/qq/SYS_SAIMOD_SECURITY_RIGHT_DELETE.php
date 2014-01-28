<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_RIGHT_DELETE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'DELETE FROM system_rights'.
' WHERE ID = ?;'
);}}

