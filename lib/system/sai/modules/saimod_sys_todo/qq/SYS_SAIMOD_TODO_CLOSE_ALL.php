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
 * QQ to close all generated system_todo entrys
 */
class SYS_SAIMOD_TODO_CLOSE_ALL extends \SYSTEM\DB\QQ {
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
'UPDATE '.\SYSTEM\SQL\system_todo::NAME_PG.' SET '.\SYSTEM\SQL\system_todo::FIELD_STATE.'='.\SYSTEM\SQL\system_todo::FIELD_STATE_CLOSED.
' WHERE "'.\SYSTEM\SQL\system_todo::FIELD_TYPE.'"='.\SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION.';';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'UPDATE '.\SYSTEM\SQL\system_todo::NAME_MYS.' SET '.\SYSTEM\SQL\system_todo::FIELD_STATE.'='.\SYSTEM\SQL\system_todo::FIELD_STATE_CLOSED.', '.\SYSTEM\SQL\system_todo::FIELD_TIME_CLOSED.'=NOW()'.
' WHERE `'.\SYSTEM\SQL\system_todo::FIELD_TYPE.'`='.\SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION.';';
    }
}