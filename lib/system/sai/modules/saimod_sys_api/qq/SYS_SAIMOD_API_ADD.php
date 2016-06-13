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
class SYS_SAIMOD_API_ADD extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'INSERT INTO '.\SYSTEM\SQL\system_api::NAME_PG.' (ID, group, type, parentID, parentValue, name, verify) VALUES ($1, $2, $3, $4, $5, $6, $7);';
    }
    public static function mysql(){return
'INSERT INTO '.\SYSTEM\SQL\system_api::NAME_MYS.' (`ID`, `group`, `type`, `parentID`, `parentValue`, `name`, `verify`) VALUES (?, ?, ?, ?, ?, ?, ?);';
    }
}
