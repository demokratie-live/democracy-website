<?php
namespace SYSTEM\CRON;

class cronjobtest extends cronjob {
    public static function run(){
        new \SYSTEM\LOG\WARNING("Unimplemented!");
        return \SYSTEM\CRON\cronstatus::CRON_STATUS_SUCCESFULLY;
    }
}