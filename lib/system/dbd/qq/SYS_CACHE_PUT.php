<?php
namespace SYSTEM\DBD;

class SYS_CACHE_PUT extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'INSERT INTO system.cache ("CacheID", "Ident", "data")'.
' VALUES ($1,$2,$3);'
//mys
);}}