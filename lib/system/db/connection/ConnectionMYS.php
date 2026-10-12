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
 * MYSQL Connection Class provided by System to connect to MYSQL Database.
 */
class ConnectionMYS extends ConnectionAbstr {
    /** ressource Variable to store then open Connection */
    private $connection = NULL;
    
    /**
     * Connect to the DB upon Construction.
     *
     * @param DBINFO $dbinfo Database Information Object
     * @param bool $new_link Force new Connection
     * @param int $client_flag Client Flag transmitted on connection
     */
    public function __construct(DBInfo $dbinfo, $new_link = false, $client_flag = 0){
        $this->connection = @\mysqli_connect($dbinfo->m_host, $dbinfo->m_user, $dbinfo->m_password, $new_link, $client_flag);
        if(!$this->connection){
            die('Could not connect to Database. Check ur Database Settings.');}
            
        if(!\mysqli_select_db($this->connection, $dbinfo->m_database)){
            die('Could not select Database. Check ur Database Settings.');}
            
        \mysqli_set_charset($this->connection, 'utf8');
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
        return \mysqli_close($this->connection);}    
        
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
        $prepStmt = \mysqli_prepare($this->connection, $stmt);
        if(!$prepStmt){
            throw new \Exception('Prepared Statement prepare fail: '. \mysqli_error($this->connection));}

        $types_ = '';
        $binds = array($prepStmt,null);
        for($i =0; $i < \count($values);$i++){
            $types_ .= self::getPrepareValueType($values[$i]);
            $binds[] = &$values[$i];}
        $binds[1] = $types ? $types : $types_;
        \call_user_func_array('mysqli_stmt_bind_param', $binds); //you need 2 append the parameters - thats the right way to do that.

        if(!\mysqli_stmt_execute($prepStmt)){
            throw new \SYSTEM\LOG\ERROR("Could not execute prepare statement: ".  \mysqli_stmt_error($prepStmt));}

        return new \SYSTEM\DB\ResultMysqliPrepare($prepStmt,$this);
    }

    /**
     * Query the Connection using normal Query Statement
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function query($query){
        $result = \mysqli_query($this->connection, $query);
        if(!$result){
            throw new \Exception('Could not query Database. Check ur Query Syntax or required Rights: '.\mysqli_error($this->connection));}
        return $result === true ? $result : new \SYSTEM\DB\ResultMysqli($result);
    }
    
    /**
     * Exec Query on Database
     *
     * @param string $query SQL string of the Statement
     * @return Result Returns Database Query Result.
     */
    public function exec($query){
        throw new \Exception('Could not start Transaction: not implemented');}
   
    /**
     * Commit a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function commit(){
        if(!\mysqli_commit($this->connection)){
            throw new \Exception('Could not start Transaction: '.\mysqli_error($this->connection));}
        return true;}
    
    /**
     * Open a Transaction on the Database Connection
     *
     * @return bool Returns true or false depending on success.
     */
    public function trans(){
        if(!\mysqli_begin_transaction($this->connection,MYSQLI_TRANS_START_WITH_CONSISTENT_SNAPSHOT)){
            throw new \Exception('Could not start Transaction: '.\mysqli_error($this->connection));}
        return true;}
        
    public function insert_id(){
        return \mysqli_insert_id($this->connection);
    }
}