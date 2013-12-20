<?php
namespace SYSTEM;

class HEADER {
    
    private static function checkHeader(){
        $file = null;
        $line = null;
        if(headers_sent(&$file, &$line)){
            throw new \SYSTEM\LOG\ERROR('Header already sent @ '.$file.' line '.$line);}
    }
    
    public static function JSON(){
        self::checkHeader();
        header('content-type: application/json');        
        //header('Access-Control-Allow-Methods", "POST, GET, OPTIONS');
        //header('Access-Control-Allow-Headers *');
    }
    public static function PNG(){
        self::checkHeader();
        header('content-type:image/png;');}
}