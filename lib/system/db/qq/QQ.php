<?php
namespace SYSTEM\DB;

class QQ {                       
    public static function QQ($dbinfo = null){
        if(!$dbinfo){
            $dbinfo = \SYSTEM\system::getSystemDBInfo();}
        $con = new \SYSTEM\DB\Connection($dbinfo);
        
        try{
            if($dbinfo instanceof \SYSTEM\DB\DBInfoPG){
                if(!\is_callable(static::get_class().'::pgsql')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no pgsql implementation present.');}
                return $con->query(static::pgsql());
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoMYS){
                if(!\is_callable(static::get_class().'::mysql')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no mysql implementation present.');}
                return $con->query(static::mysql());
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoAMQP){
                if(!\is_callable(static::get_class().'::amqp')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no amqp implementation present.');}
                return $con->query(static::amqp());
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoSQLite){
                if(!\is_callable(static::get_class().'::sqlite')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no sqlite implementation present.');}
                return $con->query(static::sqlite());
            }
        } catch (\Exception $e){
            throw new \Exception(static::get_class().' failed causing: '.$e->getMessage(),$e->getCode(),$e);}
        
        throw new \Exception('Could not understand Database Settings. Check ur Database Settings');
    }
    
    public static function QA($dbinfo = null){
        $res = self::QQ($dbinfo);
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
        return $result;
    }
    
    public static function Q1($dbinfo = null){
        return self::QQ($dbinfo)->next();}
    public static function QI($dbinfo = null){
        return self::QQ($dbinfo);}
}