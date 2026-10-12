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
 * todo_stats_report Class provided by System to calculate ToDo report stats.
 */
class todo_stats_report implements todo_stats {
    /**
     * Calculate the Stats for the report todos.
     * 
     * @return \SYSTEM\SAI\todo_stats_data Returns todo_stats_data object
     */
    public static function stats() {
        $res = array();
        $res[0] = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_TODO_REPORT::Q1();
        $res[2] = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_COUNT_DOTO_REPORT::Q1();
        $count = floatval($res[2]['count']);
        $all = floatval($res[0]['count']+$res[2]['count']);
        return $all == 0 ? new \SYSTEM\SAI\todo_stats_data('Reports',1,1) : new \SYSTEM\SAI\todo_stats_data('Reports',$count,$all);}
}
