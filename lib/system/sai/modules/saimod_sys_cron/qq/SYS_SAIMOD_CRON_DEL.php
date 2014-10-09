<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_CRON_DEL extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM '.\SYSTEM\DBD\system_cron::NAME_PG.' WHERE class = $1;',
//mys
'DELETE FROM '.\SYSTEM\DBD\system_cron::NAME_MYS.' WHERE class = ?;'
);}}
