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
 * QQ to get all system_rights entrys of a user
 */
class SYS_SAIMOD_SECURITY_USER_RIGHTS extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    
    /**
     * Get QQs PostgreSQL Query String
     * 
     * @return string Returns PostgreSQL Query String
     */
    public static function pgsql(){return 
'SELECT * FROM system.rights LEFT JOIN system.user_to_rights ON system.rights."ID" = system.user_to_rights."rightID" WHERE system.user_to_rights."userID" = $1 ORDER BY system.rights."ID" ASC;';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return 
'SELECT * FROM system_rights LEFT JOIN system_user_to_rights ON system_rights.id = system_user_to_rights.rightID WHERE system_user_to_rights.userID = ? ORDER BY system_rights.id ASC;';
    }
}

