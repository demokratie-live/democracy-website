<?php

namespace SYSTEM\DB;

class Connection extends ConnectionAbstr{

    //The open Connection, either ConnectionPG or ConnectionMYS
    private $connection = NULL;
    //private $dbinfo = NULL;

    //Connects to DB, dependent on DBInfo a connection to a PG or MYS will be established
    public function __construct(DBInfo $dbinfo = null){
        //$this->dbinfo = $dbinfo;
        if(!$dbinfo){
            $dbinfo = \SYSTEM\system::getSystemDBInfo();}

        if($dbinfo instanceof \SYSTEM\DB\DBInfoPG){
            $this->connection = new \SYSTEM\DB\ConnectionPG($dbinfo);
        } else if ($dbinfo instanceof \SYSTEM\DB\DBInfoMYS){
            $this->connection = new \SYSTEM\DB\ConnectionMYS($dbinfo);
        }  else if ($dbinfo instanceof \SYSTEM\DB\DBInfoAMQP){
            $this->connection = new \SYSTEM\DB\ConnectionAMQP($dbinfo);
        } else {
            throw new \Exception('Could not understand Database Settings. Check ur Database Settings');}
    }
    
    //Destruct connection object.
    public function __destruct(){
        unset($this->connection);}

    //Query connected Database with prepared statements, $stmt = sql string with ?; $values = array of values
    public function prepare($stmtName, $stmt, $values){
        return $this->connection->prepare($stmtName, $stmt, $values);}

    //Close Connection
    public function close(){
        return $this->connection->close();}
        
    //Query connected Database
    public function query($query){
        return $this->connection->query($query);}
}