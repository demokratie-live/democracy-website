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
 * Connection Class provided by System to open a Connection to a Database.
 */
class Connection extends ConnectionAbstr{
    /** ressource Variable to store then open Connection */
    private $connection = NULL;

    /**
     * Connect to the DB upon Construction.
     *
     * @param DBINFO $dbinfo Database Information Object or Null for default Connection
     */
    public function __construct(DBInfo $dbinfo = null){
        if(!$dbinfo){
            $dbinfo = \SYSTEM\system::getSystemDBInfo();}

        if($dbinfo instanceof \SYSTEM\DB\DBInfoPG){
            $this->connection = new \SYSTEM\DB\ConnectionPG($dbinfo);
        } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoMYS){
            $this->connection = new \SYSTEM\DB\ConnectionMYS($dbinfo);
        } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoAMQP){
            $this->connection = new \SYSTEM\DB\ConnectionAMQP($dbinfo);
        } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoSQLite){
            $this->connection = new \SYSTEM\DB\ConnectionSQLite($dbinfo);
        } else {
            throw new \Exception('Could not understand Database Settings. Check ur Database Settings');}
    }
    
    /**
     * Destruct the Database Connection upon Destruction.
     */
    public function __destruct(){
        unset($this->connection);}

    /**
     * Close the Database Connection.
     * 
     * @return bool Returns true or false depending on success
     */
    public function close(){
        return $this->connection->close();}    
        
    /**
     * Query the Connection using Prepare Statement
     *
     * @param string $stmtName Name of the Statement - espec for PostgreSQL important
     * @param string $stmt SQL string of the Statement
     * @param array $values Array of Prepare Values
     * @param string $types types sql prepare string
     * @return Result Returns Database Query Result.
     */
    public function prepare($stmtName, $stmt, $values, $types = null){
        return $this->connection->prepare($stmtName, $stmt, $values, $types);}
        
    /**
     * Query the Connection using normal Query Statement
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function query($query){
        return $this->connection->query($query);}
    
    /**
     * Exec Query on Database
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function exec($query){
        return $this->connection->exec($query);}
        
    /**
     * Open a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function trans(){
        return $this->connection->trans();}
    
    /**
     * Commit a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function commit(){
        return $this->connection->commit();}

    public function insert_id(){
        return $this->connection->insert_id();}
}