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
 * Info Log Class provided by System for logging Infos.
 */
class INFO extends \SYSTEM\LOG\SYSTEM_EXCEPTION {
    /** Property to store if the Exception should not be logged */
    public $do_not_todo_log;
}