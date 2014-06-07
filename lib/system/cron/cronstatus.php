<?php
namespace SYSTEM\CRON;

class cronstatus {
    const CRON_STATUS_SUCCESFULLY   = 0;
    const CRON_STATUS_RUNNING       = 1;
    const CRON_STATUS_FAIL          = 2;
    const CRON_STATUS_FAIL_CLASS    = 3;
    
    const CRON_STATUS_USER_STATES   = 99;
    
    public static function decode($status){
        switch($status){
            case self::CRON_STATUS_SUCCESFULLY:
                $status = 'CRON_STATUS_SUCCESFULLY';
                break;
            case self::CRON_STATUS_RUNNING:
                $status = 'CRON_STATUS_RUNNING';
                break;
            case self::CRON_STATUS_FAIL:
                $status = 'CRON_STATUS_FAIL';
                break;
            case self::CRON_STATUS_FAIL_CLASS:
                $status = 'CRON_STATUS_FAIL_CLASS';
                break;
        }
        return $status;
    }
}