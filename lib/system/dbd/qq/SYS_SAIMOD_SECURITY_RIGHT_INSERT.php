<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_SECURITY_RIGHT_INSERT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'INSERT IGNORE INTO system_rights (ID, name, description)'.
' VALUES(?, ?, ?);'
);}}

