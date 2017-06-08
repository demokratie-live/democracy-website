<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SQL
 */
namespace SYSTEM\SQL;

/**
 * SCHEMA_SYSTEM Class provided by System to install the Database Schema for system
 */
class SCHEMA_SYSTEM extends \SYSTEM\DB\QI {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    
    /**
     * Get paths of PostgreSQL compatible sql files
     * 
     * @return array Returns paths of PostgreSQL compatible sql files
     */
    public static function files_pgsql(){
        return array(   (new \SYSTEM\PSQL('/pgsql/schema/system_api.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_cache.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_cron.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_log.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_page.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_rights.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_text.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_text_tag.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_todo.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_todo_assign.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_user.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/pgsql/schema/system_user_to_rights.sql'))->SERVERPATH());
    }
    
    /**
     * Get paths of MYSQL compatible sql files
     * 
     * @return array Returns paths of MYSQL compatible sql files
     */
    public static function files_mysql(){
        return array(   (new \SYSTEM\PSQL('/mysql/schema/system_api.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_cache.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_cron.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_log.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_page.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_rights.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_text.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_text_tag.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_todo.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_todo_assign.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_token.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_user.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/mysql/schema/system_user_to_rights.sql'))->SERVERPATH());
    }    
}