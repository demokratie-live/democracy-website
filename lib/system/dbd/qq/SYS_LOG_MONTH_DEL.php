<?php
namespace SYSTEM\DBD;

class SYS_LOG_MONTH_DEL extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE MONTH(time) = $1 AND YEAR(time) = $2;',
//mys
'DELETE FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE MONTH(time) = ? AND YEAR(time) = ?;'
);}}