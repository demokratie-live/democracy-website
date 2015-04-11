<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_PAGE_GROUPS extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT "group", count(*) as "count" FROM system.page GROUP BY "group" ORDER BY "group" ASC;',
//mys
'SELECT `group`, count(*) as `count` FROM system_page GROUP BY `group` ORDER BY `group` ASC;'
);}}
