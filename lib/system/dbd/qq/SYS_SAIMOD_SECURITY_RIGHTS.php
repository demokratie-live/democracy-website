<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_RIGHTS extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM system.rights ORDER BY "ID" ASC;',
//mys
'SELECT * FROM system_rights ORDER BY ID ASC;'
);}}

