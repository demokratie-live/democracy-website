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
 * QQ to check for users rights
 */
class SYS_SECURITY_CHECK extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\system_user_to_rights::NAME_PG.
' WHERE "'.\SYSTEM\SQL\system_user_to_rights::FIELD_USERID.'" = $1'.
' AND "'.\SYSTEM\SQL\system_user_to_rights::FIELD_RIGHTID.'" = $2;';
    }
    public static function mysql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\system_user_to_rights::NAME_MYS.
' WHERE '.\SYSTEM\SQL\system_user_to_rights::FIELD_USERID.' = ?'.
' AND '.\SYSTEM\SQL\system_user_to_rights::FIELD_RIGHTID.' = ?;';
    }
}