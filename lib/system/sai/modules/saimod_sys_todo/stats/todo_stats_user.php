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
 * todo_stats_user Class provided by System to calculate ToDo user stats.
 */
class todo_stats_user implements todo_stats {
    /**
     * Calculate the User Stats for the closed and open todos.
     * 
     * @return \SYSTEM\SAI\todo_stats_data Returns todo_stats_data object
     */
    public static function stats() {
        $res = array();
        $res[0] = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_TODO_USER::Q1();
        $res[2] = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_DOTO_USER::Q1();
        $count = floatval($res[2]['count']);
        $all = floatval($res[0]['count']+$res[2]['count']);
        return $all == 0 ? new \SYSTEM\SAI\todo_stats_data('User ToDos',1,1) : new \SYSTEM\SAI\todo_stats_data('User ToDos',$count,$all);}
}