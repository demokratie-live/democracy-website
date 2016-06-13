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
 * QQ to count groups of all system_page entrys
 */
class SYS_SAIMOD_PAGE_GROUPS extends \SYSTEM\DB\QQ {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return             
'SELECT "group", count(*) as "count" FROM system.page GROUP BY "group" ORDER BY "group" ASC;';
    }
    public static function mysql(){return 
'SELECT `group`, count(*) as `count` FROM system_page GROUP BY `group` ORDER BY `group` ASC;';
    }
}
