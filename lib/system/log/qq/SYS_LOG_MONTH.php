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
 * QQ to find all long entries for this month, limited by 10000
 */
class SYS_LOG_MONTH extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT * FROM '.\SYSTEM\SQL\system_log::NAME_PG.' WHERE EXTRACT(MONTH FROM time)::INTEGER = $1 AND EXTRACT(YEAR FROM time)::INTEGER = $2 ORDER BY time ASC LIMIT 10000;';
    }
    public static function mysql(){return
'SELECT * FROM '.\SYSTEM\SQL\system_log::NAME_MYS.' WHERE MONTH(time) = ? AND YEAR(time) = ? ORDER BY time ASC LIMIT 10000;';
    }
}