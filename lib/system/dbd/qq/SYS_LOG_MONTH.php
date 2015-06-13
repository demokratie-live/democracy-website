<?php
namespace SYSTEM\DBD;

class SYS_LOG_MONTH extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'todo',
//mys
'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.' WHERE MONTH(time) = ? AND YEAR(time) = ? ORDER BY time DESC LIMIT 10000;'
);}}