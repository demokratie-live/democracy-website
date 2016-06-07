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
 * Abstract Connection Class provided by System as a PDO Controller.
 */
abstract class ConnectionAbstr {
    /**
     * Connect to the DB upon Construction.
     *
     * @param DBINFO $dbinfo Database Information Object
     */
    abstract public function __construct(DBInfo $dbinfo);
    
    /**
     * Destruct the Database Connection upon Destruction.
     */
    abstract public function __destruct();
    
    /**
     * Close the Database Connection.
     * 
     * @return bool Returns true or false depending on success
     */
    abstract public function close();
    
    /**
     * Query the Connection using Prepare Statement
     *
     * @param string $stmtName Name of the Statement - espec for PostgreSQL important
     * @param string $stmt SQL string of the Statement
     * @param array $values Array of Prepare Values
     * @return Result Returns Database Query Result.
     */
    abstract public function prepare($stmtName, $stmt, $values);
    
    /**
     * Query the Connection using normal Query Statement
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    abstract public function query($query);
    
    /**
     * Exec Query on Database
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    abstract public function exec($query);
    
    /**
     * Open a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    abstract public function trans();
    
    /**
     * Commit a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    abstract public function commit();
    
    /**
     * Helperfunction to convert Prepared Values to SQL Type identifiers
     *
     * @param string $value Value to be examined regarding Type
     * @return string Returns d,i,s or b depending on the values type.
     */
    protected static function getPrepareValueType($value){
        if(is_double($value)){return 'd';}
        if(is_integer($value)){return 'i';}
        if(is_string($value)){return 's';}
        return 'b';//blob
    }
}