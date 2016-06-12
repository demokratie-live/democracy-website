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
 * DATA_SYSTEM_API Class provided by System to install the System apis to the Database
 */
class DATA_SYSTEM_API extends \SYSTEM\DB\QI {
    public static function get_class(){return \get_class();}
    public static function files_pgsql(){
        return array(   (new \SYSTEM\PSQL('/qt/pgsql/data/system_api.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/data/system_api_default.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/pgsql/data/system_sai_api.sql'))->SERVERPATH());
    }
    public static function files_mysql(){
        return array(   (new \SYSTEM\PSQL('/qt/mysql/data/system_api.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/data/system_api_default.sql'))->SERVERPATH(),
                        (new \SYSTEM\PSQL('/qt/mysql/data/system_sai_api.sql'))->SERVERPATH());
    }    
}