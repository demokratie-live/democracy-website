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
 * QQ to get data for a system_log entry
 */
class SYS_SAIMOD_LOG_ERROR extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return             
'SELECT * FROM '.\SYSTEM\SQL\system_log::NAME_PG.
' LEFT JOIN '.\SYSTEM\SQL\system_user::NAME_PG.
' ON '.\SYSTEM\SQL\system_log::NAME_PG.'.'.\SYSTEM\SQL\system_log::FIELD_USER.
' = '.\SYSTEM\SQL\system_user::NAME_PG.'.'.\SYSTEM\SQL\system_user::FIELD_ID.
' WHERE '.\SYSTEM\SQL\system_log::NAME_PG.'."'.\SYSTEM\SQL\system_log::FIELD_ID.'" = $1;';
    }
    public static function mysql(){return 
'SELECT * FROM '.\SYSTEM\SQL\system_log::NAME_MYS.
' LEFT JOIN '.\SYSTEM\SQL\system_user::NAME_MYS.
' ON '.\SYSTEM\SQL\system_log::NAME_MYS.'.'.\SYSTEM\SQL\system_log::FIELD_USER.
' = '.\SYSTEM\SQL\system_user::NAME_MYS.'.'.\SYSTEM\SQL\system_user::FIELD_ID.
' WHERE '.\SYSTEM\SQL\system_log::NAME_MYS.'.'.\SYSTEM\SQL\system_log::FIELD_ID.' = ?;';
    }
}