<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     system_sql
 */
namespace SYSTEM\SQL;

/**
 * QQ to get System Api Tree by group
 */
class SYS_API_TREE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT * FROM '.\SYSTEM\SQL\system_api::NAME_PG
.' WHERE "'.\SYSTEM\SQL\system_api::FIELD_GROUP.'" = $1'
.' ORDER BY "'.\SYSTEM\SQL\system_api::FIELD_ID.'"';
    }
    public static function mysql(){return
'SELECT * FROM '.\SYSTEM\SQL\system_api::NAME_MYS
.' WHERE `'.\SYSTEM\SQL\system_api::FIELD_GROUP.'` = ?'
.' ORDER BY '.\SYSTEM\SQL\system_api::FIELD_ID;
    }    
}