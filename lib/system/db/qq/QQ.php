<?php
namespace SYSTEM\DB;

class QQ {                       
    public static function QQ(){
        $query = static::query();        
        $con = new \SYSTEM\DB\Connection($query->dbinfo);                
        if($is_pg = \SYSTEM\system::isSystemDbInfoPG() && $query->dbinfo){
            $is_pg = $query->dbinfo instanceof \SYSTEM\DB\DBInfoPG;}            
        if($is_pg){
            return $con->query($query->sql_pg);
        } else {
            return $con->query($query->sql_mys);}
    }
    
    public static function QA(){
        $res = self::QQ();
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
        return $result;
    }
    
    public static function Q1(){
        return self::QQ()->next();}
    public static function QI($params,$params_mys = null){
        $qq = self::QQ($params,$params_mys);
        return $qq->affectedRows() != (0||null);}
    //override this
    protected static function query(){
        throw new \SYSTEM\LOG\ERROR('query function of your QQ Class not overwritten!');}
        //return new QQuery();}    
}