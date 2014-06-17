<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_CRON extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'SELECT * FROM system_cron ORDER BY class;'
);}}
