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
 * QQ to assgin a system_todo entry to a user
 */
class SYS_SAIMOD_TODO_ASSIGN extends \SYSTEM\DB\QP {
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
'INSERT INTO '.\SYSTEM\SQL\system_todo_assign::NAME_PG.
' ('.\SYSTEM\SQL\system_todo_assign::FIELD_TODO.',"'.\SYSTEM\SQL\system_todo_assign::FIELD_USER.'",'.\SYSTEM\SQL\system_todo_assign::FIELD_TIME.')'.
' VALUES($1,$2, NOW());';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'INSERT INTO '.\SYSTEM\SQL\system_todo_assign::NAME_MYS.
' ('.\SYSTEM\SQL\system_todo_assign::FIELD_TODO.','.\SYSTEM\SQL\system_todo_assign::FIELD_USER.','.\SYSTEM\SQL\system_todo_assign::FIELD_TIME.')'.
' VALUES(?,?, NOW());';
    }
}