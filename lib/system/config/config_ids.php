<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\CONFIG
 */
namespace SYSTEM\CONFIG;

/**
 * ConfigID Class provided by System for System Environment Config IDs.
 * Extend this class for your own purposes.
 */
class config_ids {
    /** int Error Reporting Level within the Application */
    const SYS_CONFIG_ERRORREPORTING             = 1;    
    /** int Base URL for the Application */
    const SYS_CONFIG_PATH_BASEURL               = 2;
    /** int Base Path for the Application */
    const SYS_CONFIG_PATH_BASEPATH              = 3;
    /** int Relative Path to the System Library based on BASEPATH setting */
    const SYS_CONFIG_PATH_SYSTEMPATHREL         = 4;
    
    /** int Default Result the Application will return*/
    const SYS_CONFIG_DEFAULT_RESULT             = 5;
        /** string Result Type JSON */
        const SYS_CONFIG_DEFAULT_RESULT_JSON    = 'json';
        /** string Result Type MsgPack */
        const SYS_CONFIG_DEFAULT_RESULT_MSGPACK = 'msgpack';
        
    /** int Database Driver to be used */    
    const SYS_CONFIG_DB_TYPE                    = 11;
        /** string Database Driver MYSQL */
        const SYS_CONFIG_DB_TYPE_MYS            = 'mysql';
        /** string Database Driver PostgreSQL */
        const SYS_CONFIG_DB_TYPE_PG             = 'postgresql';
    /** int Default Database Host used by the Application */
    const SYS_CONFIG_DB_HOST                    = 12;
    /** int Default Database Port used by the Application */
    const SYS_CONFIG_DB_PORT                    = 13;
    /** int Default Database User used by the Application */
    const SYS_CONFIG_DB_USER                    = 14;
    /** int Default Database Password used by the Application */
    const SYS_CONFIG_DB_PASSWORD                = 15;
    /** int Default Database Databasename used by the Application */
    const SYS_CONFIG_DB_DBNAME                  = 16;    
    
    /** int Languages supported by the Application */
    const SYS_CONFIG_LANGS                      = 21;
    /** int Default Language of the Application */
    const SYS_CONFIG_DEFAULT_LANG               = 22;
    
    /** int Logextraction path used by the Application */
    const SYS_CRON_LOG2SQLITE_PATH              = 30;
    
    /** int Cache path used by the Application */
    const SYS_CONFIG_PATH_CACHE                 = 31;
    
    /** int Projectname of the Application */
    const SYS_SAI_CONFIG_PROJECT                = 54;
}