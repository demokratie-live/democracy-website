<?php
namespace SYSTEM\DBD;

class SYS_LOG_MONTH_DEL extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE EXTRACT(MONTH FROM time)::INTEGER = $1 AND EXTRACT(YEAR FROM time)::INTEGER = $2;',
//mys
'DELETE FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE MONTH(time) = ? AND YEAR(time) = ?;'
);}}