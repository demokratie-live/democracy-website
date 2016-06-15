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
 * todo_stats_assign Class provided by System to calculate assigned ToDo stats.
 */
class todo_stats_assign implements todo_stats {
    /**
     * Calculate the Assigned Todos Stats.
     * 
     * @return \SYSTEM\SAI\todo_stats_data Returns todo_stats_data object
     */
    public static function stats() {
        $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_TODO_NOT_ASSIGNED::Q1()['count'];
        $all = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_TODO_USER::Q1()['count'];
        return new \SYSTEM\SAI\todo_stats_data('Assigned ToDos',$all-$count,$all);}
}
