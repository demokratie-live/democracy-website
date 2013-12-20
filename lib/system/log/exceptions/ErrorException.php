<?php
namespace SYSTEM\LOG;

class ErrorException extends \ErrorException {
    public $logged = false;
    public function __construct($message = "", $code = 1, $severity = 0, $filename = "", $lineno = 0, $previous = NULL){
        parent::__construct($message, $code, $severity, $filename, $lineno, $previous);
        \SYSTEM\LOG\log::__exception_handler($this,false);
    }
}