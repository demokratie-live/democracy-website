<?php

namespace SYSTEM\LOG;

//Register this before every other handler, cuz this will need to handle every single error.
//And only the first ErrorHandler will be called if he returns true in CALL.
class error_handler_dbwriter extends \SYSTEM\LOG\error_handler {    
    public static function CALL(\Exception $E, $errno, $thrown){
        try{
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
                                '(class, message, code, file, line, trace, ip, querytime, time) '.
                                'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);',                        
                                array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                        getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),microtime(true)));
            }
        } catch (\Exception $E){} //Error -> Ignore
        
        return false; //We just log and do not handle the error!
    }        
    public static function MASK(){
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_ERRORREPORTING);}
}