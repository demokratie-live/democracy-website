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
class SYS_SAIMOD_SECURITY_RIGHT_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'INSERT INTO system.rights ("ID", name, description)'.
' VALUES($1, $2, $3);';
    }
    public static function mysql(){return 
'INSERT IGNORE INTO system_rights (ID, name, description)'.
' VALUES(?, ?, ?);';
    }
}