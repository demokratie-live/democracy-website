<?php
namespace SYSTEM\SAI;

class sai_module_menu {
    const POISITION_LEFT = 0;
    const POISITION_RIGHT = 1;
    const DIVIDER_NONE = 0;
    const DIVIDER_LEFT = 1;
    const DIVIDER_RIGHT = 2;
    
    var $order = null;
    var $position = null;
    var $divider = null;
    var $html = null;
    
    public function __construct($order,$position,$divider,$html) {
        $this->order = $order;
        $this->position = $position;
        $this->divider = $divider;
        $this->html = $html;
    }
    
    private static function divider(){
        return  '<li class="divider-vertical"></li>'.
                '<li class="dropdown-divider"></li>';
    }
    
    public function html(){
        $result = '';
        if($this->divider == self::DIVIDER_LEFT){
            $result .= self::divider();}
        $result .= $this->html;
        if($this->divider == self::DIVIDER_RIGHT){
            $result .= self::divider();}
        return  $result;
    }
}