<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * todo_statsn Interface provided by System to calculate ToDo stats.
 */
interface todo_stats {
    /**
     * Calculate Function
     * 
     * @return \SYSTEM\SAI\todo_stats_data Returns todo_stats_data object
     */
    public static function stats();
}