<?php
namespace SYSTEM\DBD;
class SYS_CRON_LAST_VISIT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'SELECT time FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE class =  \'SYSTEM\LOG\WARNING\' ORDER BY time DESC LIMIT 1;';
    }
    public static function mysql(){return
'SELECT time FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE class = "SYSTEM\\\\LOG\\\\CRON" ORDER BY time DESC LIMIT 1';
    }
}