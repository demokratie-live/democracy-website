<?php

namespace SYSTEM;

class HEADER {
    public static function JSON(){
        header('content-type: application/json');
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods", "POST, GET, OPTIONS');
        header('Access-Control-Allow-Headers *');
    }
    public static function PNG(){
        header('content-type:image/png;');}
}