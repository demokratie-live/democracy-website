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
 * QQ to check a system_user_to_rights entry for existance
 */
class SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK extends \SYSTEM\DB\QP {
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
'SELECT COUNT(*) as count FROM system.user_to_rights WHERE "rightID" = $1 AND "userID" = $2 LIMIT 1;';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return 
'SELECT COUNT(*) as count FROM system_user_to_rights WHERE rightID = ? AND userID = ? LIMIT 1;';
    }
}