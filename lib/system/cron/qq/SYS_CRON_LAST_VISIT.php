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
 * QQ to find the cronjob which had ben run the most reacent
 */
class SYS_CRON_LAST_VISIT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT last_run FROM '.\SYSTEM\SQL\system_cron::NAME_PG.' ORDER BY last_run DESC LIMIT 1;';
    }
    public static function mysql(){return
'SELECT last_run FROM '.\SYSTEM\SQL\system_cron::NAME_MYS.' ORDER BY last_run DESC LIMIT 1';
    }
}