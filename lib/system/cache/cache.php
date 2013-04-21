<?php

namespace SYSTEM\CACHE;

class cache {
    
    public static function get(\SYSTEM\DB\DBInfo $dbinfo, $cache_id, $ident){
        $con = new \SYSTEM\DB\Connection($dbinfo);
        $res = $con->prepare(   'checkCache',
                                'SELECT "data" FROM system.cache'.
                                ' WHERE "CacheID" = $1 AND'.
                                ' "Ident" = $2;',
                                array($cache_id,$ident));
        if(!($result = $res->next())){
            return NULL;}
                                
        return pg_unescape_bytea($result['data']);       
    }
    
    public static function put(\SYSTEM\DB\DBInfo $dbinfo, $cache_id, $ident, $data, $fail_on_exist = false){        
        if((self::get($dbinfo,$cache_id,$ident) != NULL)){
            if($fail_on_exist){
                return false;}
            self::del($dbinfo, $cache_id, $ident);
        }                
                        
        $con = new \SYSTEM\DB\Connection($dbinfo);
        $res = $con->prepare(   'insertCache',
                                'INSERT INTO system.cache ("CacheID", "Ident", "data")'.
                                ' VALUES ($1,$2,$3);',
                                array($cache_id,$ident,pg_escape_bytea($data)));        
        return $res->next() ? $data : NULL;        
    }
    
    public static function del(\SYSTEM\DB\DBInfo $dbinfo, $cache_id, $ident){
        $con = new \SYSTEM\DB\Connection($dbinfo);
        $res = $con->prepare(   'deleteCache',
                                'DELETE FROM system.cache'.
                                ' WHERE "CacheID" = $1 AND'.
                                ' "Ident" = $2;',
                                array($cache_id,$ident));        
            
        return $res->next() ? true : false;
    }
}