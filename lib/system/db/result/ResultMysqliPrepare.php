<?php

namespace SYSTEM\DB;

class ResultMysqliPrepare extends \SYSTEM\DB\Result{

    private $res = NULL;    
    private $meta = NULL;
    private $binds = array();
    
    //Result from mysql_query
    public function __construct($res){
        $this->res = $res;

        $this->meta = \mysqli_stmt_result_metadata($this->res);

        if(!$this->meta){
            //occurs on insert
            //throw new \Exception("Could not retrieve meta for prepare statement");}
            return;}
        
        while ($field = $this->meta->fetch_field() ) {
            $this->binds[$field->name] = &$this->binds[$field->name];}

        \mysqli_free_result($this->meta);

        call_user_func_array(array($this->res, 'bind_result'), $this->binds);
    }

    public function  __destruct() {
        $this->close();}

    public function close(){
        mysqli_stmt_free_result($this->res);
        mysqli_stmt_close($this->res);
    }

    public function count(){
        return \mysqli_stmt_num_rows($this->res);}

    public function affectedRows(){
        return \mysqli_stmt_affected_rows($this->res);}

    //$object not used
    //$result_type not used!
    public function next($object = false, $result_type = MYSQL_BOTH){        
        if(\mysqli_stmt_fetch($this->res)){
            foreach( $this->binds as $key=>$value ){
                $row[ $key ] = $value;} 
            return $row;}
        return NULL;       
    }

    public function seek($row_number){
        return \mysqli_stmt_data_seek($this->res,$row_number);}
}