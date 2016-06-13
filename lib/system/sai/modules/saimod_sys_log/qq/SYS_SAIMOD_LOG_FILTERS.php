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
 * QQ to find all classfilters from system_log
 */
class SYS_SAIMOD_LOG_FILTERS extends \SYSTEM\DB\QQ {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT '.\SYSTEM\SQL\system_log::FIELD_CLASS.
' FROM '.\SYSTEM\SQL\system_log::NAME_PG.
' GROUP BY '.\SYSTEM\SQL\system_log::FIELD_CLASS.
' ORDER BY '.\SYSTEM\SQL\system_log::FIELD_CLASS.';';
    }
    public static function mysql(){return
'SELECT '.\SYSTEM\SQL\system_log::FIELD_CLASS.
' FROM '.\SYSTEM\SQL\system_log::NAME_MYS.
' GROUP BY '.\SYSTEM\SQL\system_log::FIELD_CLASS.
' ORDER BY '.\SYSTEM\SQL\system_log::FIELD_CLASS.';';
    }
}