<?php
namespace SYSTEM\SQL;
class SYS_CACHE_PUT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'INSERT INTO system.cache ("CacheID", "Ident", "data")'.
' VALUES ($1,$2,$3);';
    }
}