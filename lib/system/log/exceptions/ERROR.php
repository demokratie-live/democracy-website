<?php

namespace SYSTEM\LOG;

class ERROR extends \Exception {
    public function __construct($message = "", $code = 0, $previous = NULL){                
        parent::__construct($message, $code, $previous);
        \SYSTEM\LOG\LOG::__exception_handler($this,false);
    }
}    