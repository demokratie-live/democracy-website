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
 * QQ to find the month of the oldest log entry
 */
class SYS_LOG_OLDEST extends \SYSTEM\DB\QQ {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    
    /**
     * Get QQs PostgreSQL Query String
     * 
     * @return string Returns PostgreSQL Query String
     */
    public static function pgsql(){return
'SELECT EXTRACT(MONTH FROM time)::INTEGER as month, EXTRACT(YEAR FROM time)::INTEGER as year FROM '.\SYSTEM\SQL\system_log::NAME_PG.' ORDER BY time ASC LIMIT 1';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'SELECT MONTH(time) as month, YEAR(time) as year FROM '.\SYSTEM\SQL\system_log::NAME_MYS.' ORDER BY time ASC LIMIT 1';
    }
}