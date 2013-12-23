<?php

namespace SYSTEM\LOG;

//Register this before every other handler, cuz this will need to handle every single error.
//And only the first ErrorHandler will be called if he returns true in CALL.
class error_handler_dbwriter extends \SYSTEM\LOG\error_handler {    
    public static function CALL(\Exception $E, $thrown){
        try{                        
            if(\property_exists(get_class($E), 'logged') && $E->logged){                
                return false;} //alrdy logged(this prevents proper thrown value for every system exception)
                
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
                $con->prepare(  'sysLogStmt', 'INSERT INTO '.\SYSTEM\DBD\system_log::NAME_PG.
                                '('.\SYSTEM\DBD\system_log::FIELD_CLASS.','.\SYSTEM\DBD\system_log::FIELD_MESSAGE.','.
                                    \SYSTEM\DBD\system_log::FIELD_CODE.','.\SYSTEM\DBD\system_log::FIELD_FILE.','.
                                    \SYSTEM\DBD\system_log::FIELD_LINE.','.\SYSTEM\DBD\system_log::FIELD_TRACE.','.
                                    \SYSTEM\DBD\system_log::FIELD_IP.','.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.','.
                                    \SYSTEM\DBD\system_log::FIELD_SERVER_NAME.','.\SYSTEM\DBD\system_log::FIELD_SERVER_PORT.','.
                                    \SYSTEM\DBD\system_log::FIELD_REQUEST_URI.','.\SYSTEM\DBD\system_log::FIELD_POST.','.
                                    \SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.','.\SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.','.
                                    \SYSTEM\DBD\system_log::FIELD_USER.','.\SYSTEM\DBD\system_log::FIELD_THROWN.')'.
                                'VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);',                                
                                array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                        getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),
                                        $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                        array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,$_SERVER['HTTP_USER_AGENT'],
                                        ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null,$thrown));
            } else {                
                $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
                $con->prepare( 'sysLogStmt', 'INSERT INTO '.\SYSTEM\DBD\system_log::NAME_MYS.
                                '('.\SYSTEM\DBD\system_log::FIELD_CLASS.','.\SYSTEM\DBD\system_log::FIELD_MESSAGE.','.
                                    \SYSTEM\DBD\system_log::FIELD_CODE.','.\SYSTEM\DBD\system_log::FIELD_FILE.','.
                                    \SYSTEM\DBD\system_log::FIELD_LINE.','.\SYSTEM\DBD\system_log::FIELD_TRACE.','.
                                    \SYSTEM\DBD\system_log::FIELD_IP.','.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.','.
                                    \SYSTEM\DBD\system_log::FIELD_TIME.','.\SYSTEM\DBD\system_log::FIELD_SERVER_NAME.','.
                                    \SYSTEM\DBD\system_log::FIELD_SERVER_PORT.','.\SYSTEM\DBD\system_log::FIELD_REQUEST_URI.','.
                                    \SYSTEM\DBD\system_log::FIELD_POST.','.\SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.','.
                                    \SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.','.\SYSTEM\DBD\system_log::FIELD_USER.','.
                                    \SYSTEM\DBD\system_log::FIELD_THROWN.')'.
                                'VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);',
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