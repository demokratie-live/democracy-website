<?php

namespace SYSTEM\LOG;

//Register this before every other handler, cuz this will need to handle every single error.
//And only the first ErrorHandler will be called if he returns true in CALL.
class error_handler_dbwriter extends \SYSTEM\LOG\error_handler {    
    public static function CALL(\Exception $E, $thrown){
        try{                        
            if(\property_exists(get_class($E), 'logged') && $E->logged){                
                return false;} //alrdy logged
                
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
                $con->prepare( 'sysLogStmt', 'INSERT INTO system.sys_log '.
                                '(class, message, code, file, line, trace, ip, querytime) '.
                                'VALUES ($1, $2, $3, $4, $5, $6, $7, $8);',
                                array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                        getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5)));            
            } else {                
                $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
                $con->prepare( 'sysLogStmt', 'INSERT INTO system_log '.
                                '(class, message, code, file, line, trace, ip, querytime, time, server_name, server_port, request_uri, post, http_referer, http_user_agent, user, thrown) '.
                                'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',                        
                                array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                        getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),date('Y-m-d H:i:s', microtime(true)),
                                        $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                        array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,$_SERVER['HTTP_USER_AGENT'],
                                        ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null,$thrown));
            }
            
            if(\property_exists(get_class($E), 'logged')){
                $E->logged = true;} //we just did log
        } catch (\Exception $E){} //Error -> Ignore
        
        return false; //We just log and do not handle the error!
    }    
}