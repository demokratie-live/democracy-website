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
 * Result Class provided by System to hold Database Query Result Ressources of MYSQL prepare Querys.
 */
class ResultMysqliPrepare extends \SYSTEM\DB\Result{
    /** ressource Variable to store Database Result-ressource */
    private $res = NULL;    
    /** ressource Variable to store Metadata of Colums */
    private $meta = NULL;
    /** ressource Variable to store Binding Variables */
    private $binds = array();
    /** ressource Variable to store Database Connection */
    private $connection = NULL;
    
    /**
     * Construct the Resultset with a database ressource
     */
    public function __construct($res,$connection){        
        $this->res = $res;
        $this->connection = $connection;

        $this->meta = \mysqli_stmt_result_metadata($this->res);

        if(!$this->meta){
            //occurs on insert
            //throw new \Exception("Could not retrieve meta for prepare statement");}
            return;}
        
        while ($field = $this->meta->fetch_field() ) {
            $this->binds[$field->table.'.'.$field->name] = &$this->binds[$field->table.'.'.$field->name];} //fix for ambiguous fieldnames

        \mysqli_free_result($this->meta);
        
        call_user_func_array(array($this->res, 'bind_result'), $this->binds); //you need 2 append the parameters - thats the right way to do that.
        $this->res->store_result();
    }

    /**
     * Close Resultset upon destruction
     */
    public function  __destruct() {
        $this->close();}

    /**
     * Closes the Resultset
     *
     * @return null Returns null
     */
    public function close(){
        mysqli_stmt_free_result($this->res);
        return mysqli_stmt_close($this->res);}

    /**
     * Counts the Lines in the Resultset
     *
     * @return int Returns number of lines in the result
     */
    public function count(){
        return \mysqli_stmt_num_rows($this->res);}

    /**
     * Counts the affected lines in the Resultset
     *
     * @return int Returns number of affected lines in the result
     */
    public function affectedRows(){
        return \mysqli_stmt_affected_rows($this->res);}

    /**
     * Returns the next line in the Resultset
     *
     * @param bool $object Determines if the result will be an object or array
     * @param int $result_type Mysql Fetch result Type
     * @return array Returns an array(object) containing the next line
     */
    public function next($object = false, $result_type = MYSQL_BOTH){        
        if(\mysqli_stmt_fetch($this->res)){
            foreach( $this->binds as $key=>$value ){
                $row[substr($key, strpos($key, '.')+1)] = $value;} //fix for ambiguous fieldnames
            return $row;}
        return NULL;       
    }

    /**
     * Seeks an amount of lines within the Resultset
     *
     * @param int $row_number Lines to seek over
     * @return bool Returns true or false
     */
    public function seek($row_number){
        return \mysqli_stmt_data_seek($this->res,$row_number);}
}