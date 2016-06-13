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
class todo_stats_data {
    var $name = '';
    var $open = 0;
    var $closed = 0;
    var $all = 1;
    var $perc = 0;
    public function __construct($name='',$closed=0,$all=1) {
        $this->name = $name;
        $this->open = $all-$closed;
        $this->closed = $closed;
        $this->all = $all;
        $this->perc =  $this->all == 0 ? sprintf("%.2f",100) : sprintf("%.2f", $this->closed / $this->all * 100);
    }
}
