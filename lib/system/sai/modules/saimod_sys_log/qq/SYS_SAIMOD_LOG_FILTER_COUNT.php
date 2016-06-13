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
 * QQ to count filtered data from system_log
 */
class SYS_SAIMOD_LOG_FILTER_COUNT extends \SYSTEM\DB\QP {
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
'SELECT COUNT(*) as count'.
' FROM '.\SYSTEM\SQL\system_log::NAME_PG.
' WHERE '.\SYSTEM\SQL\system_log::FIELD_CLASS.' LIKE $1'.
' AND ('.\SYSTEM\SQL\system_log::FIELD_MESSAGE.' LIKE $2 OR '.\SYSTEM\SQL\system_log::FIELD_FILE.' LIKE $3 OR '.\SYSTEM\SQL\system_log::FIELD_IP.' LIKE $4);';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'SELECT COUNT(*) as count'.
' FROM '.\SYSTEM\SQL\system_log::NAME_MYS.
' WHERE '.\SYSTEM\SQL\system_log::FIELD_CLASS.' LIKE ?'.
' AND ('.\SYSTEM\SQL\system_log::FIELD_MESSAGE.' LIKE ? OR '.\SYSTEM\SQL\system_log::FIELD_FILE.' LIKE ? OR '.\SYSTEM\SQL\system_log::FIELD_IP.' LIKE ?);';
    }
}