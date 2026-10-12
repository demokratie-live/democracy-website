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
 * QQ to change a user password
 */
class SYS_SECURITY_UPDATE_PW extends \SYSTEM\DB\QP {
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
    public static function pqsql(){return
'UPDATE '.\SYSTEM\SQL\system_user::NAME_PG.
' SET '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = $1'.
' WHERE '.\SYSTEM\SQL\system_user::FIELD_ID.' = $2;';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'UPDATE '.\SYSTEM\SQL\system_user::NAME_MYS.
' SET '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = ?'.
' WHERE '.\SYSTEM\SQL\system_user::FIELD_ID.' = ?;';
    }
}