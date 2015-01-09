<?php
namespace SYSTEM\DBD;

class SYS_LOG_OLDEST extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT  EXTRACT(MONTH FROM time)::INTEGER as month, EXTRACT(YEAR FROM time)::INTEGER as year FROM '.\SYSTEM\DBD\system_log::NAME_PG.' ORDER BY time ASC LIMIT 1',
//mys
'SELECT MONTH(time) as month, YEAR(time) as year FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' ORDER BY time ASC LIMIT 1'
);}}