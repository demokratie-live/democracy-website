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
 * system_user Class provided by System to describe system_user table
 */
class system_user {
    /** string Tablename in PostgreSQL */
    const NAME_PG = 'system.user';
    /** string Tablename in MYSQL */
    const NAME_MYS = 'system_user';   

    /** string Fieldname for field id */
    const FIELD_ID = 'id';
    /** string Fieldname for field username */
    const FIELD_USERNAME = 'username';
    /** string Fieldname for field password_sha1 */
    const FIELD_PASSWORD_SHA = 'password_sha1';
    /** string Fieldname for field email */
    const FIELD_EMAIL = 'email';
    /** string Fieldname for field joindate */
    const FIELD_JOINDATE = 'joindate';
    /** string Fieldname for field locale */
    const FIELD_LOCALE = 'locale';
    /** string Fieldname for field last_active */
    const FIELD_LAST_ACTIVE = 'last_active';
    /** string Fieldname for field email_confirmed */
    const FIELD_EMAIL_CONFIRMED = 'email_confirmed';
}