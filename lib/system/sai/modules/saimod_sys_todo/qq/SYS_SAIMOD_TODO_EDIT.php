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
 * QQ to update a system_todo entry
 */
class SYS_SAIMOD_TODO_EDIT extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'UPDATE '.\SYSTEM\SQL\system_todo::NAME_PG.' SET '.\SYSTEM\SQL\system_todo::FIELD_MESSAGE.'= $1,'
         .\SYSTEM\SQL\system_todo::FIELD_MESSAGE_HASH.'= encode(digest($2, \'sha1\'), \'hex\')'.
'WHERE "'.\SYSTEM\SQL\system_todo::FIELD_ID.'"= $3;';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\SQL\system_todo::NAME_MYS.' SET '.\SYSTEM\SQL\system_todo::FIELD_MESSAGE.'= ?,'
         .\SYSTEM\SQL\system_todo::FIELD_MESSAGE_HASH.'= SHA1(?)'.
'WHERE '.\SYSTEM\SQL\system_todo::FIELD_ID.'= ?;';
    }
}