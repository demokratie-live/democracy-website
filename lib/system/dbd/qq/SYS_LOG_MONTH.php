<?php
namespace SYSTEM\DBD;

class SYS_LOG_MONTH extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT extract(epoch from time) as time_pg,* FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE EXTRACT(MONTH FROM time)::INTEGER = $1 AND EXTRACT(YEAR FROM time)::INTEGER = $2 LIMIT 1000;',//ORDER BY time ASC
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE MONTH(time) = ? AND YEAR(time) = ? ORDER BY time ASC LIMIT 1000;'
);}}