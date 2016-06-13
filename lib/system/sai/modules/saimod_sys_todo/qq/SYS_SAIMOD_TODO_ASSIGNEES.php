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
 * QQ to get all system_todo_assign entrys for a todo
 */
class SYS_SAIMOD_TODO_ASSIGNEES extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
' SELECT assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_TODO.' as todo_id,'.
    ' assignee.'.\SYSTEM\SQL\system_user::FIELD_USERNAME.' as assignee,'.
    ' assignee.'.\SYSTEM\SQL\system_user::FIELD_ID.' as assignee_id'.
' FROM '.\SYSTEM\SQL\system_todo_assign::NAME_PG.' as assign'.
' LEFT JOIN '.\SYSTEM\SQL\system_user::NAME_PG.' as assignee ON assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_USER.'=assignee.'.\SYSTEM\SQL\system_user::FIELD_ID.
' WHERE assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_TODO.' = $1'.
' ORDER BY case when assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_USER.' = $2 then 1 else 2 end'.
' LIMIT 10';
    }
    public static function mysql(){return
' SELECT assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_TODO.' as todo_id,'.
    ' assignee.'.\SYSTEM\SQL\system_user::FIELD_USERNAME.' as assignee,'.
    ' assignee.'.\SYSTEM\SQL\system_user::FIELD_ID.' as assignee_id'.
' FROM '.\SYSTEM\SQL\system_todo_assign::NAME_MYS.' as assign'.
' LEFT JOIN '.\SYSTEM\SQL\system_user::NAME_MYS.' as assignee ON assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_USER.'=assignee.'.\SYSTEM\SQL\system_user::FIELD_ID.
' WHERE assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_TODO.' = ?'.
' ORDER BY case when assign.'.\SYSTEM\SQL\system_todo_assign::FIELD_USER.' = ? then 1 else 2 end'.
' LIMIT 10';
    }
}