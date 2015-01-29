<?php
namespace SYSTEM\DBD;

class SYS_LOG_DEL extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE "ID" = $1;',
//mys
'DELETE FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE ID = ?;'
);}}