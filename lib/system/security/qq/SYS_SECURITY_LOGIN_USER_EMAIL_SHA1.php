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
 * QQ to check for emails creadentials (login)
 */
class SYS_SECURITY_LOGIN_USER_EMAIL_SHA1 extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'SELECT * FROM '.\SYSTEM\SQL\system_user::NAME_PG.
' WHERE (UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') LIKE UPPER($1) OR UPPER('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') LIKE UPPER($2))'.
' AND '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = $3;';
    }
    public static function mysql(){return
'SELECT * FROM '.\SYSTEM\SQL\system_user::NAME_MYS.
' WHERE (UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') LIKE UPPER(?) OR UPPER('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') LIKE UPPER(?))'.
' AND '.\SYSTEM\SQL\system_user::FIELD_PASSWORD_SHA.' = ?;';
    }
}