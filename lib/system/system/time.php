<?php

namespace SYSTEM;

class time {    
    private static $start_time;    
    
    public static function start(){
        self::$start_time = microtime(true);}
        
    public static function getStartTime(){
        return self::$start_time;}
}