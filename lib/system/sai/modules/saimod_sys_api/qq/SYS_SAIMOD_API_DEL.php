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
 * QQ to delete a system_api entry
 */
class SYS_SAIMOD_API_DEL extends \SYSTEM\DB\QP {
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
'DELETE FROM '.\SYSTEM\SQL\system_api::NAME_PG.' WHERE `ID` = $1 AND group = $2;';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'DELETE FROM '.\SYSTEM\SQL\system_api::NAME_MYS.' WHERE `ID` = ? AND `group` = ?;';
    }
}
