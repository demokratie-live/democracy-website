<?php
namespace SYSTEM\SQL;
class SCHEMA_SYSTEM extends \SYSTEM\DB\QI {
    public static function get_class(){return \get_class();}
    public static function files_pgsql(){
        return array(   (new \SYSTEM\PSQL('/qt/pgsql/schema/system_api.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_cache.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_cron.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_log.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_page.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_rights.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_text.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_text_tag.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_todo.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_todo_assign.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_user.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/schema/system_user_to_rights.sql'))->SERVERPATH());
    } 
    public static function files_mysql(){
        return array(   (new \SYSTEM\PSQL('/qt/mysql/schema/system_api.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_cache.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_cron.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_log.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_page.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_rights.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_text.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_text_tag.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_todo.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_todo_assign.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_user.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/schema/system_user_to_rights.sql'))->SERVERPATH());
    }    
}