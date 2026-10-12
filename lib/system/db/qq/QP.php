<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\DB
 */
namespace SYSTEM\DB;

/**
 * QQ Class provided by System to execute quick prepare statements.
 */
class QP {
    /**
     * Executes stored action and return Database Object
     *
     * @param array $params Parameter passed to the prepare-query
     * @param DBINFO $dbinfo Database Info or Null for Default DB
     * @return Result Returns Database Result Object
     */
    public static function QQ($params,$dbinfo = null){
        if(!$dbinfo){
            $dbinfo = \SYSTEM\system::getSystemDBInfo();}
        $con = new \SYSTEM\DB\Connection($dbinfo);
        try{
            if($dbinfo instanceof \SYSTEM\DB\DBInfoPG){
                if(!\is_callable(static::get_class().'::pgsql')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no pgsql implementation present.');}
                return $con->prepare(static::get_class(),static::pgsql(),$params, \is_callable(static::get_class().'::types') ? static::types() : null);
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoMYS){
                if(!\is_callable(static::get_class().'::mysql')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no mysql implementation present.');}
                return $con->prepare(static::get_class(),static::mysql(),$params, \is_callable(static::get_class().'::types') ? static::types() : null);
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoAMQP && is_callable(static::amqp())){
                if(!\is_callable(static::get_class().'::amqp')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no amqp implementation present.');}
                return $con->prepare(static::get_class(),static::amqp(),$params, \is_callable(static::get_class().'::types') ? static::types() : null);
            } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoSQLite){
                if(!\is_callable(static::get_class().'::sqlite')){
                    throw new \SYSTEM\LOG\ERROR(static::get_class().' failed: no sqlite implementation present.');}
                return $con->prepare(static::get_class(),static::sqlite(),$params, \is_callable(static::get_class().'::types') ? static::types() : null);
            }
        } catch (\Exception $e){
            throw new \SYSTEM\LOG\ERROR(static::get_class().' failed causing: '.$e->getMessage(),$e->getCode(),$e);}
        throw new \Exception('Could not understand Database Settings. Check ur Database Settings');
    }
    
    /**
     * Executes stored action and return all Data found
     *
     * @param array $params Parameter passed to the prepare-query
     * @param DBINFO $dbinfo Database Info or Null for Default DB
     * @return array Returns array with all lines of Database Query
     */
    public static function QA($params,$dbinfo = null){
        $res = self::QQ($params,$dbinfo);
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
        return $result;
    }
    
    /**
     * Executes stored action and return one line of Data found
     *
     * @param array $params Parameter passed to the prepare-query
     * @param DBINFO $dbinfo Database Info or Null for Default DB
     * @return array Returns array with all field of one lines of the Database Query
     */
    public static function Q1($params,$dbinfo = null){
        return self::QQ($params,$dbinfo)->next();}
    
    /**
     * Executes stored action and return Database Result Object.
     * Use this function if the Result is either true or false (update/delete/insert)
     *
     * @param array $params Parameter passed to the prepare-query
     * @param DBINFO $dbinfo Database Info or Null for Default DB
     * @return bool Returns true or false (or Result if used incorrectly)
     */
    public static function QI($params,$return_id = false,$dbinfo = null){
        $qq = self::QQ($params,$dbinfo);
        return $return_id ? $qq->insert_id() : $qq->affectedRows() != (0||null);}
}