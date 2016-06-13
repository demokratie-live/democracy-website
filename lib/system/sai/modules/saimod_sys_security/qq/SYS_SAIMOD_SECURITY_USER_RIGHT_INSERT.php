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
class SYS_SAIMOD_SECURITY_USER_RIGHT_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'INSERT INTO system.user_to_rights ("rightID", "userID") VALUES($1, $2);';
    }
    public static function mysql(){return 
'INSERT INTO system_user_to_rights (rightID, userID) VALUES(?, ?);';
    }
}

