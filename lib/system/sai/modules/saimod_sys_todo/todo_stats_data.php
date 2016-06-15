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
 * todo_stats_data Class provided by System as a container for todo stats
 */
class todo_stats_data {
    /** string Variable to store the Name of the ToDo Stats */
    var $name = '';
    /** string Variable to store the Open Todos Value of the ToDo Stats */
    var $open = 0;
    /** string Variable to store the Closed Todos Value of the ToDo Stats */
    var $closed = 0;
    /** string Variable to store all Todos Value of the ToDo Stats */
    var $all = 1;
    /** string Variable to store the Percatnage of Open to Closed of the ToDo Stats */
    var $perc = 0;
    
    /**
     * Create the Datastorage with Data
     * 
     * @param string $name Name of the ToDo Stats
     * @param int $closed Closed Todos Value of the ToDo Stats
     * @param int $all All Todos Value of the ToDo Stats
     */
    public function __construct($name='',$closed=0,$all=1) {
        $this->name = $name;
        $this->open = $all-$closed;
        $this->closed = $closed;
        $this->all = $all;
        $this->perc =  $this->all == 0 ? sprintf("%.2f",100) : sprintf("%.2f", $this->closed / $this->all * 100);
    }
}