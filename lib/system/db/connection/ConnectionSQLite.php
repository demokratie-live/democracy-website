<?php

namespace SYSTEM\DB;

class ConnectionSQLite extends ConnectionAbstr {
    private $connection = NULL;
    
    public function __construct(DBInfo $dbinfo, $new_link = false, $client_flag = 0){
        $error = null;
        $this->connection = new \SQLite3($dbinfo->m_database);
        if(!$this->connection){
            throw new \Exception('Could not connect to Database. Check ur Database Settings: '.$error);}
    }

    public function __destruct(){
        $this->close();}

    public function prepare($stmtName, $stmt, $values){
        $prepStmt = \sqlite_prepare($this->connection, $stmt,$error);
        if(!$prepStmt){
            throw new \SYSTEM\LOG\ERROR('Prepared Statement prepare fail: '. $error);}

        $types = '';
        $binds = array($prepStmt,null);
        for($i =0; $i < \count($values);$i++){
            $types .= self::getPrepareValueType($values[$i]);
            $binds[] = &$values[$i];}
        $binds[1] = $types;
        \call_user_func_array('sqlite_stmt_bind_param', $binds); //you need 2 append the parameters - thats the right way to do that.

        if(!sqlite_stmt_execute($prepStmt,$error)){
            throw new \SYSTEM\LOG\ERROR("Could not execute prepare statement: ".  $error);}

        return new ResultSQLite($prepStmt,$this);
    }

    public function close(){
        return $this->connection->close();}

    public function query($query){
        $result = $this->connection->query($query);
        if(!$result){
            throw new \SYSTEM\LOG\ERROR('Could not query Database. Check ur Query Syntax or required Rights: '.$this->connection->lastErrorMsg());}
        if($result === TRUE){
            return TRUE;}

        return new ResultSQLite($result);
    }
    
    public function exec($query){
        return $this->connection->exec($query);
    }
}