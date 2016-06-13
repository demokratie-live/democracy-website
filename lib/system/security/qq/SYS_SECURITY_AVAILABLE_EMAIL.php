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
 * QQ to check for username || email combination availibility
 */
class SYS_SECURITY_AVAILABLE_EMAIL extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\system_user::NAME_PG.
' WHERE UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') like UPPER($1) OR UPPER('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') = UPPER($2);';
    }
    public static function mysql(){return
'SELECT COUNT(*) as count FROM '.\SYSTEM\SQL\system_user::NAME_MYS.
' WHERE UPPER('.\SYSTEM\SQL\system_user::FIELD_USERNAME.') like UPPER(?) OR UPPER('.\SYSTEM\SQL\system_user::FIELD_EMAIL.') = UPPER(?);';
    }
}