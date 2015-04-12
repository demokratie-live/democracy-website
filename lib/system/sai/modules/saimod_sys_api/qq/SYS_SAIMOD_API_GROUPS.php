<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_API_GROUPS extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT "group", count(*) as "count" FROM system.api GROUP BY "group" ORDER BY "group" ASC;',
//mys
'SELECT `group`, count(*) as `count` FROM system_api GROUP BY `group` ORDER BY `group` ASC;'
);}}
