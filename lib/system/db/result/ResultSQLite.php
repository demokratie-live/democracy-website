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
 * Result Class provided by System to hold Database Query Result Ressources of SQLite File Querys.
 */
class ResultSQLite extends \SYSTEM\DB\Result{
    /** ressource Variable to store Database Result-ressource */
    private $res = NULL;
    /** ressource Variable to store query statement */
    private $stmt = NULL;
    /** ressource Variable to store current Line either as array or object */
    private $current = NULL;    

    /**
     * Construct the Resultset with a database ressource
     */
    public function __construct($res,$stmt){
        $this->res = $res;
        $this->stmt = $stmt;}

    /**
     * Close Resultset upon destruction
     */
    public function __destruct(){
        $this->close();}

    /**
     * Closes the Resultset
     *
     * @return null Returns null
     */
    public function close(){
        /*if($this->stmt){
            $this->stmt->close();}*/
    }
       
    /**
     * Counts the Lines in the Resultset
     *
     * @return int Returns number of lines in the result
     */
    public function count(){
        throw new Exception("Problem SQLite");
        return mysqli_num_rows($this->res);}

    /**
     * Counts the affected lines in the Resultset
     *
     * @return int Returns number of affected lines in the result
     */
    public function affectedRows(){
        throw new Exception("Problem SQLite");
        return mysqli_affected_rows($this->res);}

    /**
     * Returns the next line in the Resultset
     *
     * @param bool $object Determines if the result will be an object or array
     * @param int $result_type SQLITE Fetch result Type
     * @return array Returns an array(object) containing the next line
     */
    public function next($object = false, $result_type = SQLITE3_ASSOC){        
        if($object){
            throw new Exception("Problem SQLite");
        } else {
            $this->current = $this->res->fetchArray($result_type);
        }
        return $this->current;
    }

    /**
     * Seeks an amount of lines within the Resultset
     *
     * @param int $row_number Lines to seek over
     * @return bool Returns true or false
     */
    public function seek($row_number){
        throw new Exception("Problem SQLite");
        return mysqli_data_seek($this->res,$row_number);}
}