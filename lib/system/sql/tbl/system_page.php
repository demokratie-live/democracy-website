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
 * system_page Class provided by System to describe system_page table
 */
class system_page {
    /** string Tablename in PostgreSQL */
    const NAME_PG                   = 'system.page';
    /** string Tablename in MYSQL */
    const NAME_MYS                  = 'system_page';

    /** string Fieldname for field id */
    const FIELD_ID                  = 'id';
    /** string Fieldname for field name */
    const FIELD_NAME                = 'name';
    /** string Fieldname for field group */
    const FIELD_GROUP               = 'group';
    /** string Fieldname for field state */
    const FIELD_STATE               = 'state';
    /** string Fieldname for field parent_id */
    const FIELD_PARENT_ID           = 'parent_id';
    /** string Fieldname for field login */
    const FIELD_LOGIN               = 'login';
    /** string Fieldname for field type */
    const FIELD_TYPE                = 'type';
    /** string Fieldname for field div */
    const FIELD_DIV                 = 'div';
    /** string Fieldname for field url */
    const FIELD_URL                 = 'url';
    /** string Fieldname for field func */
    const FIELD_FUNC                = 'func';
    
    /** string Fieldvalue for field ID - default */
    const VALUE_ID_DEFAULT          = 'default';
}