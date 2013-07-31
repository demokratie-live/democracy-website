<?php

namespace SYSTEM;

class system {
    //array( array(ID, VALUE), array(ID, VALUE))
    public static function start($config){

        \SYSTEM\CONFIG\config::setArray($config);
        
        self::_start_time();        
        self::_start_errorreporting();        
    }
    public static function _start_time(){
        \SYSTEM\time::start();}
    public static function _start_errorreporting(){
        \error_reporting(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_ERRORREPORTING));}
        
    public static function getSystemDBInfo(){
        if(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE) == \SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE_PG){
            return new \SYSTEM\DB\DBInfoPG( \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_DBNAME),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_USER),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PASSWORD),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_HOST),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PORT));            
        } else {
            return new \SYSTEM\DB\DBInfoMYS(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_DBNAME),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_USER),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PASSWORD),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_HOST),
                                            \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_PORT));
        }
    }
    
    public static function isSystemDbInfoPG(){
        return (\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE) == \SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE_PG);}
        
    public static function include_ExceptionShortcut(){
        require_once 'system/log/register_exception_shortcut.php';
    }
    
    public static function include_ResultShortcut(){
        require_once 'system/log/register_result_shortcut.php';
    }
    
    public static function register_errorhandler_jsonoutput(){
        require_once 'system/log/register_errorhandler_jsonoutput.php';
    }
    
    public static function register_errorhandler_dbwriter(){
        require_once 'system/log/register_errorhandler_dbwriter.php';
    }
}