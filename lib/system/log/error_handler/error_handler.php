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
 * Error handler Interface provided by System to derive your own loghandlers from.
 */
interface error_handler {
    /**
     * Call function to handle exceptions
     *
     * @param \Exception $E Thrown Execption to be handled
     * @param bool $thrown Was the Exception thrown?
     * @return bool Returns true or false.
     */
    static function CALL($E, $thrown);
}