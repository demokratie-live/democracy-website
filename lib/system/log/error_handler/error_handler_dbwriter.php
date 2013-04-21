<?php

namespace SYSTEM\LOG;

//Register this before every other handler, cuz this will need to handle every single error.
//And only the first ErrorHandler will be called if he returns true in CALL.
abstract class error_handler_dbwriter extends \SYSTEM\LOG\error_handler {    
    public static function CALL(\Exception $E, $errno, $thrown){
        try{
            $con = new \SYSTEM\DB\Connection(static::getDBInfo());
            $con->prepare( 'sysLogStmt', 'INSERT INTO system.sys_log '.
                            '(class, message, code, file, line, trace, ip, querytime) '.
                            'VALUES ($1, $2, $3, $4, $5, $6, $7, $8);',
                            array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                    getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5)));            
        } catch (\Exception $E){} //Error -> Ignore
        
        return false; //We just log and do not handle the error!
    }
    
    abstract protected static function getDBInfo();
}