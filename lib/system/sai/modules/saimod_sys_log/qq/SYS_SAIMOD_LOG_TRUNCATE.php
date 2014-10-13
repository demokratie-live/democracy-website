<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_TRUNCATE extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'TRUNCATE '.\SYSTEM\DBD\system_log::NAME_PG.';',
//mys
'TRUNCATE '.\SYSTEM\DBD\system_log::NAME_MYS.';'
);}}

