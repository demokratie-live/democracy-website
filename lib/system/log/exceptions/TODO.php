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
 * Todo Class provided by System for logging todos.
 */
class TODO extends \SYSTEM\LOG\SYSTEM_EXCEPTION {
    /**
     * Construct the Error and logs it to the Todo aswell
     *
     * @param string $message Error Message
     * @param int $code Error Code
     * @param \Exception $previous Previous Error leading to this one.
     */
    public function __construct($message = "", $code = 1, $previous = NULL){
        parent::__construct($message, $code, $previous);
        \SYSTEM\SAI\saimod_sys_todo::exception($this,false);}
}