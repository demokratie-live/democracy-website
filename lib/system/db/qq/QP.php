<?php
namespace SYSTEM\DB;

class QP {                       
    public static function QQ($params){
        $query = static::query();        
        $con = new \SYSTEM\DB\Connection($query->dbinfo);                
        if($is_pg = \SYSTEM\system::isSystemDbInfoPG() && $query->dbinfo){
            $is_pg = $query->dbinfo instanceof \SYSTEM\DB\DBInfoPG;}            
        if($is_pg){
            return $con->prepare($query->name,$query->sql_pg,$params);
        } else {
            return $con->prepare($query->name,$query->sql_mys,$params);}
    }
    
    public static function QA($params){
        $res = self::QQ($params);
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
        return $result;
    }
    
    //override this
    protected static function query(){
        throw new \SYSTEM\LOG\ERROR('query function of your QQ Object not overritten!');}
        //return new QQuery();}    
}