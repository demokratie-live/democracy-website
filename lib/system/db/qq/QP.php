<?php
namespace SYSTEM\DB;

class QP {
    public static function QQ($params,$dbinfo = null){
        if(!$dbinfo){
            $dbinfo = \SYSTEM\system::getSystemDBInfo();}
        $con = new \SYSTEM\DB\Connection($dbinfo);
        try{
            if($dbinfo instanceof \SYSTEM\DB\DBInfoPG){
                if(!\is_callable(static::get_class().'::pgsql')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no pgsql implementation present.');}
                return $con->prepare(static::get_class(),static::pgsql(),$params);
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoMYS){
                if(!\is_callable(static::get_class().'::mysql')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no mysql implementation present.');}
                return $con->prepare(static::get_class(),static::mysql(),$params);
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoAMQP && is_callable(static::amqp())){
                if(!\is_callable(static::get_class().'::amqp')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no amqp implementation present.');}
                return $con->prepare(static::get_class(),static::amqp(),$params);
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoSQLite){
                if(!\is_callable(static::get_class().'::sqlite')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no sqlite implementation present.');}
                return $con->prepare(static::get_class(),static::sqlite(),$params);
            }
        } catch (\Exception $e){
            throw new \Exception(static::get_class().' failed causing: '.$e->getMessage(),$e->getCode(),$e);}
        throw new \Exception('Could not understand Database Settings. Check ur Database Settings');
    }
    
    public static function QA($params,$dbinfo = null){
        $res = self::QQ($params,$dbinfo);
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
        return $result;
    }
    
    public static function Q1($params,$dbinfo = null){
        return self::QQ($params,$dbinfo)->next();}
    
    public static function QI($params,$dbinfo = null){
        $qq = self::QQ($params,$dbinfo);
        return $qq->affectedRows() != (0||null);}
}