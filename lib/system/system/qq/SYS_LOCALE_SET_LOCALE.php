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
 * QQ to set a users language setting
 */
class SYS_LOCALE_SET_LOCALE extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'UPDATE '.\SYSTEM\SQL\system_user::NAME_PG.
' SET '.\SYSTEM\SQL\system_user::FIELD_LOCALE.' = $1'.
' WHERE '.\SYSTEM\SQL\system_user::FIELD_ID.' = $2;';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\SQL\system_user::NAME_MYS.
' SET '.\SYSTEM\SQL\system_user::FIELD_LOCALE.' = ? '.
'WHERE '.\SYSTEM\SQL\system_user::FIELD_ID.' = ?;';
    }
}