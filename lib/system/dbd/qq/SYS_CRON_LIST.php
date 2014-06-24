<?php
namespace SYSTEM\DBD;

class SYS_CRON_LIST extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_cron::NAME_PG.';',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_cron::NAME_MYS.';'
);}}