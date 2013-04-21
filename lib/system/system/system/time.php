<?php

namespace SYSTEM;

class time {
    private static $instance = null;
    private $start_time = NULL;
    private static function getInstance(){
        if (null === self::$instance) {
            self::$instance = new self;}
        return self::$instance;        
    }
    private function __construct(){}
    private function __clone(){}       
    
    public static function start(){
        self::getInstance()->start_time = microtime(true);}
        
    public static function getStartTime(){
        return self::getInstance()->start_time;}
}