<?php
namespace SYSTEM\SAI;
class todo_stats_data {
    var $name = '';
    var $part = 0;
    var $whole = 1;
    var $perc = 0;
    public function __construct($name='',$part=0,$whole=1) {
        $this->name = $name;
        $this->part = $part;
        $this->whole = $whole;
        $this->perc =  round($this->part / $this->whole * 100,2);
    }
}
