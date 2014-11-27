<?php
namespace SYSTEM\DBD;

class SYS_LOG_MONTH extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE MONTH(time) = $1 AND YEAR(time) = $2 ORDER BY time ASC',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE MONTH(time) = ? AND YEAR(time) = ? ORDER BY time ASC'
);}}