<?php
namespace SYSTEM\DBD;
class SYS_CRON_LIST extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return
'SELECT * FROM '.\SYSTEM\DBD\system_cron::NAME_PG.';';
    }
    public static function mysql(){return
'SELECT * FROM '.\SYSTEM\DBD\system_cron::NAME_MYS.';';
    }
}