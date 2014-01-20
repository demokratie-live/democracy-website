<?php
namespace SYSTEM\DB;

class QP {                       
    public static function QQ($params,$params_mys = null){
        $query = static::query();        
        $con = new \SYSTEM\DB\Connection($query->dbinfo);                
        if($is_pg = \SYSTEM\system::isSystemDbInfoPG() && $query->dbinfo){
            $is_pg = $query->dbinfo instanceof \SYSTEM\DB\DBInfoPG;}            
        if($is_pg){
            return $con->prepare($query->name,$query->sql_pg,$params);
        } else {
            return $con->prepare($query->name,$query->sql_mys,$params_mys ? $params_mys : $params);}
    }
    
    public static function QA($params,$params_mys = null){
        $res = self::QQ($params,$params_mys);
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
        return $result;
    }
    
    public static function Q1($params,$params_mys = null){
        return self::QQ($params,$params_mys)->next();}
    
    //override this
    protected static function query(){
        throw new \SYSTEM\LOG\ERROR('query function of your QP Class not overwritten!');}
        //return new QQuery();}    
}