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
 * system_cron Class provided by System to describe system_cron table
 */
class system_cron {
    /** string Tablename in PostgreSQL */
    const NAME_PG                   = 'system.cron';
    /** string Tablename in MYSQL */
    const NAME_MYS                  = 'system_cron';

    /** string Fieldname for field class */
    const FIELD_CLASS               = 'class';
    /** string Fieldname for field min */
    const FIELD_MIN                 = 'min';
    /** string Fieldname for field hour */
    const FIELD_HOUR                = 'hour';
    /** string Fieldname for field day */
    const FIELD_DAY                 = 'day';
    /** string Fieldname for field day_week */
    const FIELD_DAY_WEEK            = 'day_week';    
    /** string Fieldname for field month */
    const FIELD_MONTH               = 'month';
    /** string Fieldname for field day_month */
    const FIELD_DAY_MONTH           = 'day_month';
    /** string Fieldname for field last_run */
    const FIELD_LAST_RUN            = 'last_run';
    /** string Fieldname for field status */
    const FIELD_STATUS              = 'status';
}