<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\LOG
 */
namespace SYSTEM\LOG;

/**
 * System Exception Class provided by System for logging all kinds of System Exceptions.
 * All other log Classes are derived from this.
 */
class SYSTEM_EXCEPTION extends \Exception {
    /** bool Variable to store if the Exception was logged already */
    public $logged = false;
    /** bool Variable to store if the Exceptions was logged as Todo */
    public $todo_logged = false;
    
    /**
     * Construct the Error
     *
     * @param string $message Error Message
     * @param int $code Error Code
     * @param \Exception $previous Previous Error leading to this one.
     */
    public function __construct($message = "", $code = 1, $previous = NULL){
        parent::__construct($message, $code, $previous);
        \SYSTEM\LOG\log::__exception_handler($this,false);
    }
}