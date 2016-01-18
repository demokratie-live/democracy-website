<?php
namespace SYSTEM\SQL;
class SYS_CACHE_CHECK extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pTsql(){return          
'SELECT "data" FROM system.cache'.
' WHERE "CacheID" = $1 AND'.
' "Ident" = $2;';
    }
    public static function mysql(){return          
'SELECT * FROM system_cache'.
' WHERE cache = ? AND ident = ?;';
    } 
}