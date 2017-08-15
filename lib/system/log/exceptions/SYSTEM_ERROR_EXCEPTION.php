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
 * All other error exception Classes are derived from this.
 */
class SYSTEM_ERROR_EXCEPTION extends \ErrorException {
    /**
     * Construct the Error
     *
     * @param string $message Error Message
     * @param int $code Error Code
     * @param int $severity Severity of the Error
     * @param string $filename Filename where the Error occurred
     * @param int $lineno Line number where the Error occurred
     * @param \Exception $previous Previous Error leading to this one.
     */
    public function __construct($message = "", $code = 1, $severity = 0, $filename = "", $lineno = 0, $previous = NULL){
        parent::__construct($message, $code, $severity, $filename, $lineno, $previous);
        \SYSTEM\LOG\log::__exception_handler($this,false);
    }
}