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
 * PostgreSQL Connection Class provided by System to connect to PostgreSQL Database.
 */
class ConnectionPG extends ConnectionAbstr {
    /** ressource Variable to store then open Connection */
    private $connection = NULL;

    /**
     * Connect to the DB upon Construction.
     *
     * @param DBINFO $dbinfo Database Information Object
     */
    public function __construct(DBInfo $dbinfo){
        $this->connection = pg_connect("host=".$dbinfo->m_host." port=".$dbinfo->m_port." dbname=".$dbinfo->m_database."
                                        user=".$dbinfo->m_user." password=".$dbinfo->m_password."");
        if(!$this->connection){
            die('Could not connect to Database. Check ur Database Settings');}
    }

    /**
     * Destruct the Database Connection upon Destruction.
     */
    public function __destruct(){}
    
    /**
     * Close the Database Connection.
     * 
     * @return bool Returns true or false depending on success
     */
    public function close(){
        return pg_close($this->connection);}

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
        $result = pg_query_params($this->connection, 'SELECT name FROM pg_prepared_statements WHERE name = $1', array($stmtName));
        //var_dump($stmt);
        //var_dump($values);
        if (pg_num_rows($result) == 0) {
            $result = \pg_prepare($this->connection, $stmtName, $stmt);
            if(($info = \pg_last_notice($this->connection)) != ''){
                new \SYSTEM\LOG\INFO($info);}
        }
        
        if(!$result)
            throw new \SYSTEM\LOG\ERROR('Prepared Statement prepare fail: '. \pg_last_error($this->connection));

        $result = \pg_execute($this->connection, $stmtName, $values);
        if(($info = \pg_last_notice($this->connection)) != ''){
            new \SYSTEM\LOG\INFO($info);}

        if(!$result)
            throw new \SYSTEM\LOG\ERROR("Could not execute prepare statement: ".  \pg_last_error($this->connection));             

        return new ResultPostgres($result,$this);
    }

    /**
     * Query the Connection using normal Query Statement
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function query($query){     
        $result = \pg_query($this->connection, $query);
        if(($info = \pg_last_notice($this->connection)) != ''){
            new \SYSTEM\LOG\INFO($info);}
            
        if(!$result){
            throw new \SYSTEM\LOG\ERROR('Could not query Database. Check ur Query Syntax or required Rights: '.pg_last_error($this->connection));}

        if($result === TRUE){
            return TRUE;}

        return new ResultPostgres($result,$this);
    }
    
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

    /**
     * Exec Query on Database
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function exec($query) {
        throw new \Exception('Could not start Transaction: not implemented');}
        
    public function insert_id(){
        throw new \Exception('Not implemented');}
}