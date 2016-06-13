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
 * QQ to check the existance of a system_rights entry
 */
class SYS_SAIMOD_SECURITY_RIGHT_CHECK extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return            
'SELECT * FROM system.rights'.
' WHERE "ID" = $1;';
    }
    public static function mysql(){return 
'SELECT * FROM system_rights'.
' WHERE ID = ?;';
    }
}

