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
 * QQ to get analytics of users system_todo entrys
 */
class SYS_SAIMOD_TODO_STATS_USERS extends \SYSTEM\DB\QQ {
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
'SELECT *, state_closed/(state_open+state_closed) as best '.
'FROM ('.
    'SELECT username,'.
    ' sum(case when state = 0 then 1 else 0 end) state_open, '.
    ' sum(case when state = 1 then 1 else 0 end) state_closed, '.
    ' COUNT(*) as count '.
    'FROM system.todo_assign '.
    'LEFT JOIN system.todo ON system.todo_assign.todo = system.todo."ID" '.
    'LEFT JOIN system.user ON system.todo_assign.user = system.user.id '.
    'GROUP BY system.user.username '.
    'ORDER BY count DESC'.
') a '.
'ORDER BY best DESC;';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'SELECT *, state_closed/(state_open+state_closed) as best '.
'FROM ('.
    'SELECT username,'.
    ' sum(case when state = 0 then 1 else 0 end) state_open, '.
    ' sum(case when state = 1 then 1 else 0 end) state_closed, '.
    ' COUNT(*) as count '.
    'FROM system_todo_assign '.
    'LEFT JOIN system_todo ON system_todo_assign.todo = system_todo.id '.
    'LEFT JOIN system_user ON system_todo_assign.user = system_user.id '.
    'GROUP BY system_todo_assign.user '.
    'ORDER BY count DESC'.
') a '.
'ORDER BY best DESC;';
    }
}