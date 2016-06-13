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
class SYS_SAIMOD_TODO_CLOSE_ALL extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'UPDATE '.\SYSTEM\SQL\system_todo::NAME_PG.' SET '.\SYSTEM\SQL\system_todo::FIELD_STATE.'='.\SYSTEM\SQL\system_todo::FIELD_STATE_CLOSED.
' WHERE "'.\SYSTEM\SQL\system_todo::FIELD_TYPE.'"='.\SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION.';';
    }
    public static function mysql(){return
'UPDATE '.\SYSTEM\SQL\system_todo::NAME_MYS.' SET '.\SYSTEM\SQL\system_todo::FIELD_STATE.'='.\SYSTEM\SQL\system_todo::FIELD_STATE_CLOSED.', '.\SYSTEM\SQL\system_todo::FIELD_TIME_CLOSED.'=NOW()'.
' WHERE `'.\SYSTEM\SQL\system_todo::FIELD_TYPE.'`='.\SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION.';';
    }
}