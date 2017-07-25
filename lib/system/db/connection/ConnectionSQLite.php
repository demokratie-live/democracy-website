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
 * SQLite Connection Class provided by System to connect to SQLite Databasefile.
 */
class ConnectionSQLite extends ConnectionAbstr {
    /** ressource Variable to store the open Connection */
    private $connection = NULL;
    
    /**
     * Connect to the DB upon Construction.
     *
     * @param DBINFO $dbinfo Database Information Object
     */
    public function __construct(DBInfo $dbinfo){
        $error = null;
        $this->connection = new \SQLite3($dbinfo->m_database);
        if(!$this->connection){
            die('Could not connect to Database. Check ur Database Settings: '.$error);}
    }

    /**
     * Destruct the Database Connection upon Destruction.
     */
    public function __destruct(){
        $this->close();}
        
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
        $prepStmt = $this->connection->prepare($stmt);
        if(!$prepStmt){
            throw new \SYSTEM\LOG\ERROR('Prepared Statement prepare fail: '. $error);}

        foreach($values as $key=>$val){
            $prepStmt->bindParam($key,$val);}

        if(!($result = $prepStmt->execute())){
            throw new \SYSTEM\LOG\ERROR("Could not execute prepare statement: ".  $error);}

        return new ResultSQLite($result,$prepStmt);
    }

    /**
     * Query the Connection using normal Query Statement
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function query($query){
        $result = $this->connection->query($query);
        if(!$result){
            throw new \SYSTEM\LOG\ERROR('Could not query Database. Check ur Query Syntax or required Rights: '.$this->connection->lastErrorMsg());}
        if($result === TRUE){
            return TRUE;}

        return new ResultSQLite($result,null);
    }
    
    /**
     * Exec Query on Database
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function exec($query){
        return $this->connection->exec($query);}
    
    /**
     * Commit a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function commit(){
        throw new \Exception('Could not start Transaction: not implemented');}
    
    /**
     * Open a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function trans(){
        throw new \Exception('Could not start Transaction: not implemented');}
}