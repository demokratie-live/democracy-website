<?php

namespace SYSTEM\LOG;

class error_handler_jsonoutput extends \SYSTEM\LOG\error_handler {
    //Only those who die!
    public static function MASK(){ return \E_ALL;} //\E_ERROR | \E_USER_ERROR | \E_CORE_ERROR | \E_COMPILE_ERROR; }
    public static function CALL(\Exception $E, $thrown){        
        if($thrown){     
            try{
                echo \SYSTEM\LOG\JsonResult::error($E);             
            } catch (\Exception $E){} //Error -> Ignore
            return die(); //die is required cuz else some fatals cant be catched properly
        }
    }
}