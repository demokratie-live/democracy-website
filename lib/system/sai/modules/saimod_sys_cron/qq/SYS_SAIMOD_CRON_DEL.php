<?php
namespace SYSTEM\DBD;
class SYS_SAIMOD_CRON_DEL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return          
'DELETE FROM '.\SYSTEM\DBD\system_cron::NAME_PG.' WHERE class = $1;';
    }
    public static function mysql(){return 
'DELETE FROM '.\SYSTEM\DBD\system_cron::NAME_MYS.' WHERE class = ?;';
    }
}