<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\CRON
 */
namespace SYSTEM\CRON;

/**
 * Cronstatus Class provided by System for Cronjob stati.
 */
class cronstatus {
    /** int Cron executed successfully */
    const CRON_STATUS_SUCCESFULLY   = 0;
    /** int Cron is running */
    const CRON_STATUS_RUNNING       = 1;
    /** int Cron execution failed within the Cronjob */
    const CRON_STATUS_FAIL          = 2;
    /** int Cron execution failed because of Problems with the Cron-Class */
    const CRON_STATUS_FAIL_CLASS    = 3;
    
    /** int Placeholder where Userstates should start */
    const CRON_STATUS_USER_STATES   = 99;
    
    /**
     * Convert Cron Status to a text value.
     *
     * @param int $status Value from this Class
     * @return string Returns the requested status as text
     */
    public static function text($status){
        switch($status){
            case self::CRON_STATUS_SUCCESFULLY:
                $status = 'SUCCESFULLY';break;
            case self::CRON_STATUS_RUNNING:
                $status = 'RUNNING';break;
            case self::CRON_STATUS_FAIL:
                $status = 'FAIL';break;
            case self::CRON_STATUS_FAIL_CLASS:
                $status = 'FAIL_CLASS';break;
        }
        return $status;
    }
}