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
 * QQ to create a new user
 */
class SYS_SECURITY_CREATE extends \SYSTEM\DB\QP {
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
'INSERT INTO '.\SYSTEM\SQL\system_user::NAME_PG.
' ('.\SYSTEM\SQL\system_user::FIELD_USERNAME.','.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.','
    .\SYSTEM\SQL\system_user::FIELD_EMAIL.','.\SYSTEM\SQL\system_user::FIELD_LOCALE.')'.
' VALUES ($1, $2, $3, $4);';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'INSERT INTO '.\SYSTEM\SQL\system_user::NAME_MYS.
' ('.\SYSTEM\SQL\system_user::FIELD_USERNAME.','.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.','
    .\SYSTEM\SQL\system_user::FIELD_EMAIL.','.\SYSTEM\SQL\system_user::FIELD_LOCALE.')'.
' VALUES (?, ?, ?, ?);';
    }
}