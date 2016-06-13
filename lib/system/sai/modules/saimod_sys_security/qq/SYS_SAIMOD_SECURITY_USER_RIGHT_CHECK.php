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
class SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT COUNT(*) as count FROM system.user_to_rights WHERE "rightID" = $1 AND "userID" = $2 LIMIT 1;';
    }
    public static function mysql(){return 
'SELECT COUNT(*) as count FROM system_user_to_rights WHERE rightID = ? AND userID = ? LIMIT 1;';
    }
}