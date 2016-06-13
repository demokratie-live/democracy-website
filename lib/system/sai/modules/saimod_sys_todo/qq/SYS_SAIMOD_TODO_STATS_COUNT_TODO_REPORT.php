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
class SYS_SAIMOD_TODO_STATS_COUNT_TODO_REPORT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT COUNT(*) as count FROM system.todo WHERE state = 0 AND type = 2';
    }
    public static function mysql(){return
'SELECT COUNT(*) as `count` FROM system_todo WHERE state = 0 AND `type` = 2';
    }
}