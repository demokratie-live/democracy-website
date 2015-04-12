<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_PAGE_GET extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT * FROM system_page ORDER BY `group`, `ID` ASC;',
//mys
'SELECT * FROM system_page ORDER BY `group`, `ID` ASC;'
);}}
