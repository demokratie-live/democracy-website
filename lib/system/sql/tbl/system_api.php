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
 * system_api Class provided by System to describe system_api table
 */
class system_api {
    /** string Tablename in PostgreSQL */
    const NAME_PG                   = 'system.api';
    /** string Tablename in MYSQL */
    const NAME_MYS                  = 'system_api';

    /** string Fieldname for field ID */
    const FIELD_ID                  = 'ID';
    /** string Fieldname for field group */
    const FIELD_GROUP               = 'group';
    /** string Fieldname for field type */
    const FIELD_TYPE                = 'type';
    /** string Fieldname for field parentID */
    const FIELD_PARENTID            = 'parentID';
    /** string Fieldname for field parentValue */
    const FIELD_PARENTVALUE         = 'parentValue';
    /** string Fieldname for field name */
    const FIELD_NAME                = 'name';
    /** string Fieldname for field verify */
    const FIELD_VERIFY              = 'verify';

    /** string Fieldvalue for field type - command */
    const VALUE_TYPE_COMMAND        = 0;
    /** string Fieldvalue for field type - command flag */
    const VALUE_TYPE_COMMAND_FLAG   = 1;
    /** string Fieldvalue for field type - param */
    const VALUE_TYPE_PARAM          = 2;
    /** string Fieldvalue for field type - param ipt */
    const VALUE_TYPE_PARAM_OPT      = 3;
    /** string Fieldvalue for field type - static */
    const VALUE_TYPE_STATIC         = 4;
}