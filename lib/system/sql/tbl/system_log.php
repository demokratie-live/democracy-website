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
 * system_log Class provided by System to describe system_log table
 */
class system_log {
    /** string Tablename in PostgreSQL */
    const NAME_PG                   = 'system.log';
    /** string Tablename in MYSQL */
    const NAME_MYS                  = 'system_log';

    /** string Fieldname for field ID */
    const FIELD_ID                  = 'ID';
    /** string Fieldname for field class */
    const FIELD_CLASS               = 'class';
    /** string Fieldname for field message */
    const FIELD_MESSAGE             = 'message';
    /** string Fieldname for field code */
    const FIELD_CODE                = 'code';
    /** string Fieldname for field file */
    const FIELD_FILE                = 'file';
    /** string Fieldname for field line */
    const FIELD_LINE                = 'line';
    /** string Fieldname for field trace */
    const FIELD_TRACE               = 'trace';
    /** string Fieldname for field ip */
    const FIELD_IP                  = 'ip';
    /** string Fieldname for field querytime */
    const FIELD_QUERYTIME           = 'querytime';
    /** string Fieldname for field time */
    const FIELD_TIME                = 'time';
    /** string Fieldname for field server_name */
    const FIELD_SERVER_NAME         = 'server_name';
    /** string Fieldname for field server_port */
    const FIELD_SERVER_PORT         = 'server_port';
    /** string Fieldname for field request_uri */
    const FIELD_REQUEST_URI         = 'request_uri';
    /** string Fieldname for field post */
    const FIELD_POST                = 'post';
    /** string Fieldname for field http_referer */
    const FIELD_HTTP_REFERER        = 'http_referer';
    /** string Fieldname for field http_user_agent */
    const FIELD_HTTP_USER_AGENT     = 'http_user_agent';
    /** string Fieldname for field user */
    const FIELD_USER                = 'user';
    /** string Fieldname for field thrown */
    const FIELD_THROWN              = 'thrown';
}