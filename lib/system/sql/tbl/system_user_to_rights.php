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
 * system_user_to_rights Class provided by System to describe system_user_to_rights table
 */
class system_user_to_rights {
    /** string Tablename in PostgreSQL */
    const NAME_PG = 'system.user_to_rights';
    /** string Tablename in MYSQL */
    const NAME_MYS = 'system_user_to_rights';

    /** string Fieldname for field userID */
    const FIELD_USERID = 'userID';
    /** string Fieldname for field rightID */
    const FIELD_RIGHTID = 'rightID';
}