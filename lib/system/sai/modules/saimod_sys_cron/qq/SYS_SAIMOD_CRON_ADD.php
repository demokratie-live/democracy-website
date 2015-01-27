<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_CRON_ADD extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'INSERT INTO '.\SYSTEM\DBD\system_cron::NAME_PG.' (class, min, hour, day, day_week, month) VALUES ($1, $2, $3, $4, $5, $6);',
//mys
'INSERT INTO '.\SYSTEM\DBD\system_cron::NAME_MYS.' (class, min, hour, day, day_week, month) VALUES (?, ?, ?, ?, ?, ?)'.
' ON DUPLICATE KEY UPDATE `min`=VALUES(`min`),`hour`=VALUES(`hour`),`day`=VALUES(`day`),`day_week`=VALUES(`day_week`),`month`=VALUES(`month`);'
);}}
