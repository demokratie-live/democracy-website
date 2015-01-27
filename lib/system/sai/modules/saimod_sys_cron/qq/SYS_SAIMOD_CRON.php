<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_CRON extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM '.\SYSTEM\DBD\system_cron::NAME_PG.' ORDER BY class;',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_cron::NAME_MYS.' ORDER BY class;'
);}}
