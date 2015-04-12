<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_CRON_CHANGE extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'UPDATE '.\SYSTEM\DBD\system_cron::NAME_PG.' SET status = $1 WHERE class = $2;',
//mys
'UPDATE '.\SYSTEM\DBD\system_cron::NAME_MYS.' SET status = ? WHERE `class` = ?;'
);}}
