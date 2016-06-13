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
class SYS_SAIMOD_SECURITY_USER_RIGHTS extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT * FROM system.rights LEFT JOIN system.user_to_rights ON system.rights."ID" = system.user_to_rights."rightID" WHERE system.user_to_rights."userID" = $1 ORDER BY system.rights."ID" ASC;';
    }
    public static function mysql(){return 
'SELECT * FROM system_rights LEFT JOIN system_user_to_rights ON system_rights.id = system_user_to_rights.rightID WHERE system_user_to_rights.userID = ? ORDER BY system_rights.id ASC;';
    }
}

