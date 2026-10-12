<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM
 */
namespace SYSTEM;

/**
 * System Class provided by System to start the environment (system clock & config
 * aswell as optional includes) and handles the Systemwide Database Credentials
 */
class system {
    /**
     * Start the System Environment. This Function sums up many things needed to
     * be done after include of the autoload file.
     * 
     * Flushes given Config values
     * Starts the internal clock.
     * Sets Error-reporting level according to config
     * (opt)Allows to turn off optional includes which pollute global Namespace.
     * (opt)Register Error-Handler-DB-Writer to log System Events to the Database
     * (opt)Register Error-Handler-JSON-Output to return Errors as JSON.
     * 
     * Config has following format
     * array( array(ID, VALUE), array(ID, VALUE))
     * For IDs @see \SYSTEM\CONFIG\config_ids
     * Extend this class to define your own.
     * 
     * @param array $config Configuration Array passed upon Enviroment Start
     * @param bool $short_exc Include Shortcut for System Log Classes in global Namespace
     * @param bool $short_res Include Shortcut for System Result Classes in global Namespace
     * @param bool $error_db Include Shortcut for System Log Classes in global Namespace
     * @param bool $error_json Include Shortcut for System Log Classes in global Namespace
     * @return null Returns null.
     */
    public static function start($config,$short_exc=true,$short_res=true,$error_db=true,$error_json=true){
        \SYSTEM\CONFIG\config::setArray($config);
        \SYSTEM\time::start();        
        \error_reporting(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_ERRORREPORTING));
        
        if($short_exc){
            require_once \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL).'/log/autoload_exception_shortcut.inc';} //allow ERROR() instead of \SYSTEM\LOG\ERROR()
        if($short_res){
            require_once \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_SYSTEMPATHREL).'/log/autoload_result_shortcut.inc';} //allow JsonResult() instead of \SYSTEM\LOG\JsonResult()
        if($error_db){
            \SYSTEM\system::register_errorhandler_dbwriter();} //write errors to database (must be first errorhandler to register)
        if($error_json){
            \SYSTEM\system::register_errorhandler_jsonoutput();} //print errors as json to caller (must be last errorhandler to register)
    }
    
    /**
     * Returns the Database Connection from System Config.
     * Supports MYSQL and PostgreSQL
     * 
     * @return object Returns \SYSTEM\DB\DBInfoPG or \SYSTEM\DB\DBInfoMYS depending on configrated Database.
     */
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
    
    /**
     * Check if the System-Environment-Wide Database Connection is MYSQL or PostgreSQL
     * 
     * @return bool Returns true if Databaseconnection is PostgreSQL else false.
     */
    public static function isSystemDbInfoPG(){
        return (\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE) == \SYSTEM\CONFIG\config_ids::SYS_CONFIG_DB_TYPE_PG);}
    
    /**
     * Register the JSON Output Error Handle which will print all Errors as JSON
     * to the caller
     * 
     * @return null Returns null
     */
    public static function register_errorhandler_jsonoutput(){
        \SYSTEM\LOG\log::registerHandler('\SYSTEM\LOG\error_handler_jsonoutput');}
    
    /**
     * Register the Database Writer Error Handle which will write all Catched
     * SystemExceptions to the Database
     * 
     * @return null Returns null
     */
    public static function register_errorhandler_dbwriter(){        
        \SYSTEM\LOG\log::registerHandler('\SYSTEM\LOG\error_handler_dbwriter');}       
}