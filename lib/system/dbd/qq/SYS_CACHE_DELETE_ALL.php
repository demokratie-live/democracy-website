<?php
namespace SYSTEM\DBD;

class SYS_CACHE_DELETE_ALL extends \SYSTEM\DB\QQ {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'DELETE FROM system.cache;',
//mys
'DELETE FROM system_cache;'
);}}