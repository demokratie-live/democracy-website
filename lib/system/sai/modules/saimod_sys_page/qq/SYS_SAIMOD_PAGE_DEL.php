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
 * QQ to delete a system_page entry
 */
class SYS_SAIMOD_PAGE_DEL extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return           
'DELETE FROM '.\SYSTEM\SQL\system_page::NAME_PG.' WHERE `ID` = $1 AND group = $2;';
    }
    public static function mysql(){return 
'DELETE FROM '.\SYSTEM\SQL\system_page::NAME_MYS.' WHERE `ID` = ? AND `group` = ?;';
    }
}