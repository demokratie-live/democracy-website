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
 * QQ to update a cronjobs status and lastrun
 */
class SYS_CRON_UPD extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return          
'UPDATE '.\SYSTEM\SQL\system_cron::NAME_PG.' SET '.\SYSTEM\SQL\system_cron::FIELD_STATUS.' = $1,'.\SYSTEM\SQL\system_cron::FIELD_LAST_RUN.' = to_timestamp($2) WHERE '.\SYSTEM\SQL\system_cron::FIELD_CLASS.' = $3;';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\SQL\system_cron::NAME_MYS.' SET '.\SYSTEM\SQL\system_cron::FIELD_STATUS.' = ?,'.\SYSTEM\SQL\system_cron::FIELD_LAST_RUN.' = FROM_UNIXTIME(?)  WHERE '.\SYSTEM\SQL\system_cron::FIELD_CLASS.' = ?;';
    }
}