<?php

namespace SYSTEM\LOG;

abstract class error_handler {
    //Error Mask E_ALL, E_NOTICE ...
    abstract public static function MASK();
    //Errorhandler
    abstract public static function CALL(\Exception $E, $errno, $thrown);
}