<?php
namespace SYSTEM\SQL;
class SYS_CACHE_PUT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'WITH upsert AS (UPDATE system.cache SET type=$3, data=$4 WHERE cache = $1 AND ident = $2 RETURNING *) '.
' INSERT INTO system.cache ("cache", "ident", "type", "data")'.
' SELECT $1,$2,$3,$4 WHERE NOT EXISTS (SELECT * FROM upsert);';
    }
    public static function mysql(){return           
'REPLACE INTO system_cache (cache, ident, type, data)'.
' VALUES (?,?,?,?);';
    }
}