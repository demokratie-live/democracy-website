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
 * QQ to get a system_cron entry
 */
class SYS_SAIMOD_CRON_SINGLE_SELECT extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT * FROM '.\SYSTEM\SQL\system_cron::NAME_PG.'  WHERE class = $1;';
    }
    public static function mysql(){return 
'SELECT * FROM '.\SYSTEM\SQL\system_cron::NAME_MYS.' WHERE class = ?;';
    }
}
