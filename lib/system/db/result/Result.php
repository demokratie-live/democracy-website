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
 * Result Class provided by System to hold Database Query Result Ressources.
 */
abstract class Result {
    /**
     * Counts the Lines in the Resultset
     *
     * @return int Returns number of lines in the result
     */
    public abstract function count();

    /**
     * Counts the affected lines in the Resultset
     *
     * @return int Returns number of affected lines in the result
     */
    public abstract function affectedRows();

    /**
     * Returns the next line in the Resultset
     *
     * @param bool $object Determines if the result will be an object or array
     * @return array Returns an array(object) containing the next line
     */
    public abstract function next($object = false);

    /**
     * Seeks an amount of lines within the Resultset
     *
     * @param int $row_number Lines to seek over
     * @return bool Returns true or false
     */
    public abstract function seek($row_number);

    /**
     * Closes the Resultset
     *
     * @return null Returns null
     */
    public abstract function close();
}