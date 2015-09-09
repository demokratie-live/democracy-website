<?php

namespace SYSTEM\CACHE;

class cache {
    
    public static function get($cache_id, $ident){
        $result = \SYSTEM\SQL\SYS_CACHE_CHECK::Q1(array($cache_id,$ident));
        if(!$result){
            return NULL;}
                                
        return pg_unescape_bytea($result['data']);       
    }
    
    public static function put($cache_id, $ident, $data, $fail_on_exist = false){        
        if((self::get($cache_id,$ident) != NULL)){
            if($fail_on_exist){
                return false;}
            self::del($cache_id, $ident);
        }                
                        
        $result = \SYSTEM\SQL\SYS_CACHE_PUT::Q1(array($cache_id,$ident, pg_escape_bytea($data)));                
        return $result ? $data : NULL;
    }
    
    public static function del($cache_id, $ident){
        $result = \SYSTEM\SQL\SYS_CACHE_DELETE::Q1(array($cache_id,$ident));                
        return $result ? true : false;                                                          
    }
}