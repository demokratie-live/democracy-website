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
 * system_text Class provided by System to describe system_text table
 */
class system_text {
    /** string Tablename in PostgreSQL */
    const NAME_PG               = 'system.text';
    /** string Tablename in MYSQL */
    const NAME_MYS              = 'system_text';

    /** string Fieldname for field id */
    const FIELD_ID              = 'id';
    /** string Fieldname for field text */
    const FIELD_TEXT            = 'text';

    /** string Tag value for tag basic */
    const TAG_BASIC             = 'basic';
    /** string Tag value for tag time */
    const TAG_TIME              = 'time';
    /** string Tag value for tag table */
    const TAG_TABLE             = 'table';
    
    /** string Tag value for tag sai */
    const TAG_SAI               = 'sai';
    /** string Tag value for tag sai_default */
    const TAG_SAI_DEFAULT       = 'sai_default';
    /** string Tag value for tag sai_start */
    const TAG_SAI_START         = 'sai_start';
    /** string Tag value for tag sai_api */
    const TAG_SAI_API           = 'sai_api';
    /** string Tag value for tag sai_cache */
    const TAG_SAI_CACHE         = 'sai_cache';
    /** string Tag value for tag sai_config */
    const TAG_SAI_CONFIG        = 'sai_config';
    /** string Tag value for tag sai_cron */
    const TAG_SAI_CRON          = 'sai_cron';
    /** string Tag value for tag sai_docu */
    const TAG_SAI_DOCU          = 'sai_docu';
    /** string Tag value for tag sai_files */
    const TAG_SAI_FILES         = 'sai_files';
    /** string Tag value for tag sai_langswitcher */
    const TAG_SAI_LANGSWITCHER  = 'sai_langswitcher';
    /** string Tag value for tag sai_log */
    const TAG_SAI_LOG           = 'sai_log';
    /** string Tag value for tag sai_login */
    const TAG_SAI_LOGIN         = 'sai_login';
    /** string Tag value for tag sai_mod */
    const TAG_SAI_MOD           = 'sai_mod';
    /** string Tag value for tag sai_page */
    const TAG_SAI_PAGE          = 'sai_page';
    /** string Tag value for tag sai_security */
    const TAG_SAI_SECURITY      = 'sai_security';
    /** string Tag value for tag sai_text */
    const TAG_SAI_TEXT          = 'sai_text';
    /** string Tag value for tag sai_todo */
    const TAG_SAI_TODO          = 'sai_todo';
    /** string Tag value for tag sai_git */
    const TAG_SAI_GIT           = 'sai_git';
}