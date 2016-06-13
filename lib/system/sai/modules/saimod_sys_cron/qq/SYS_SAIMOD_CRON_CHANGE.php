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
class SYS_SAIMOD_CRON_CHANGE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'UPDATE '.\SYSTEM\SQL\system_cron::NAME_PG.' SET status = $1 WHERE class = $2;';
    }
    public static function mysql(){return 
'UPDATE '.\SYSTEM\SQL\system_cron::NAME_MYS.' SET status = ? WHERE `class` = ?;';
    }
}
