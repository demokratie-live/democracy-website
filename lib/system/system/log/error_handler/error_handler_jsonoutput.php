<?php

namespace SYSTEM\LOG;

class error_handler_jsonoutput extends \SYSTEM\LOG\error_handler {
    //Only those who die!
    public static function MASK(){ return \E_ALL;} //\E_ERROR | \E_USER_ERROR | \E_CORE_ERROR | \E_COMPILE_ERROR; }
    public static function CALL(\Exception $E, $errno, $thrown){
        if($thrown){
            //TODO move jsonresult into system
            echo \SYSTEM\LOG\JsonResult::error($E);
            die(); //we can have only one json result per page call else -> multiple headers are sent
        }
    }
}