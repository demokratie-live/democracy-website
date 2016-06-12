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
 * system_todo_assign Class provided by System to describe system_todo_assign table
 */
class system_todo_assign {
    /** string Tablename in PostgreSQL */
    const NAME_PG                   = 'system.todo_assign';
    /** string Tablename in MYSQL */
    const NAME_MYS                  = 'system_todo_assign';

    /** string Fieldname for field todo */
    const FIELD_TODO                = 'todo';
    /** string Fieldname for field user */
    const FIELD_USER                = 'user';
    /** string Fieldname for field time */
    const FIELD_TIME                = 'time';
}