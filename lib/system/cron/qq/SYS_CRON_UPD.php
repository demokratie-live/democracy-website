<?php
namespace SYSTEM\DBD;
class SYS_CRON_UPD extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pqsql(){return          
'UPDATE '.\SYSTEM\DBD\system_cron::NAME_PG.' SET '.\SYSTEM\DBD\system_cron::FIELD_STATUS.' = $1,'.\SYSTEM\DBD\system_cron::FIELD_LAST_RUN.' = to_timestamp($2) WHERE '.\SYSTEM\DBD\system_cron::FIELD_CLASS.' = $3;';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\DBD\system_cron::NAME_MYS.' SET '.\SYSTEM\DBD\system_cron::FIELD_STATUS.' = ?,'.\SYSTEM\DBD\system_cron::FIELD_LAST_RUN.' = FROM_UNIXTIME(?)  WHERE '.\SYSTEM\DBD\system_cron::FIELD_CLASS.' = ?;';
    }
}