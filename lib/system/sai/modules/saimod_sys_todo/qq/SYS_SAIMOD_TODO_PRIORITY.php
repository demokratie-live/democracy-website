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
class SYS_SAIMOD_TODO_PRIORITY extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE '.\SYSTEM\SQL\system_todo::NAME_MYS.' SET '.\SYSTEM\SQL\system_todo::FIELD_PRIORITY.' = '.\SYSTEM\SQL\system_todo::FIELD_PRIORITY.' + ?'.
' WHERE '.\SYSTEM\SQL\system_todo::FIELD_ID.'= ?;';
    }
}

