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
 * todo_stats_gen Class provided by System to calculate generated ToDo stats.
 */
class todo_stats_gen implements todo_stats {
    /**
     * Calculate the Generated Todos Stats for the closed and open todos.
     * 
     * @return \SYSTEM\SAI\todo_stats_data Returns todo_stats_data object
     */
    public static function stats() {
        $res = array();
        $res[0] = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_TODO_GEN::Q1();
        $res[2] = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_DOTO_GEN::Q1();
        $count = floatval($res[2]['count']);
        $all = floatval($res[0]['count']+$res[2]['count']);
        return $all == 0 ? new \SYSTEM\SAI\todo_stats_data('Generated ToDos',1,1) : new \SYSTEM\SAI\todo_stats_data('Generated ToDos',$count,$all);}
}