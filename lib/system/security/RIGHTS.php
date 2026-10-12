<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SECURITY
 */
namespace SYSTEM\SECURITY;

/**
 * Rights Class provided by System to define system rights.
 * Extend this class for your own.
 */
class RIGHTS {
    /** int Never use anything with 0 in php */ 
    const SYS_DONOTUSE                  = 0;
    /** int System Administrator Interface */
    const SYS_SAI                       = 1;
    /** int Security Module access */
    const SYS_SAI_SECURITY              = 5;
    /** int Security Module edit rights */
    const SYS_SAI_SECURITY_RIGHTS_EDIT  = 6; //
    /** int Database Text Module */
    const SYS_SAI_LOCALE                = 10;
    /** int Image Module */
    const SYS_SAI_FILES                 = 15;
    /** int Api Module */
    const SYS_SAI_API                   = 20;
    
    /** int Cron jobs */
    const SYS_SAI_CRON                  = 25;
    
    /** int Reserve first 1000 ids. Start from here. */
    const RESERVED_SYS_0_999 = 999;
}