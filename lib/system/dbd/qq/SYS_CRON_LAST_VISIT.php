<?php
namespace SYSTEM\DBD;

class SYS_CRON_LAST_VISIT extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT time FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE class =  \'SYSTEM\LOG\WARNING\' ORDER BY time DESC LIMIT 1;',
//mys
'SELECT time FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE class = "SYSTEM\\\\LOG\\\\CRON" ORDER BY time DESC LIMIT 1'
);}}