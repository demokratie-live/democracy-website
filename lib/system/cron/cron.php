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
 * Cron Class provided by System for Tasks occurring repeateadly.
 */
class cron {
    /**
     * Check if given Class is a compatible Cronjob
     *
     * @param class $class Cronclass extending cronjob
     * @return bool Returns true or false
     */
    public static function check($class){
        if( !\class_exists($class) ||
            !((new $class) instanceof \SYSTEM\CRON\cronjob)){
            return false;}
        return true;}
    
    /**
     * Run all registered Cronjobs if its time to do so.
     *
     * @return JSON Returns Json::ok()
     */
    public static function run(){
        $crons = \SYSTEM\SQL\SYS_CRON_LIST::QQ();
        while($cron = $crons->next()){
            //check module
            if(!self::check($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS])){
                self::status($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS], \SYSTEM\CRON\cronstatus::CRON_STATUS_FAIL_CLASS);
                continue;}
            //time to execute?
            if(!\SYSTEM\CRON\crontime::check_now(   strtotime($cron[\SYSTEM\SQL\system_cron::FIELD_LAST_RUN]),
                                                    $cron[\SYSTEM\SQL\system_cron::FIELD_MIN],
                                                    $cron[\SYSTEM\SQL\system_cron::FIELD_HOUR],
                                                    $cron[\SYSTEM\SQL\system_cron::FIELD_DAY],
                                                    $cron[\SYSTEM\SQL\system_cron::FIELD_DAY_WEEK],
                                                    $cron[\SYSTEM\SQL\system_cron::FIELD_MONTH])){
                                                    continue;}
            //Status is ok?
            if($cron[\SYSTEM\SQL\system_cron::FIELD_STATUS] != \SYSTEM\CRON\cronstatus::CRON_STATUS_SUCCESFULLY){
                new \SYSTEM\LOG\CRON('Cron for Class '.$cron[\SYSTEM\SQL\system_cron::FIELD_CLASS].' could not execute cuz Status aint good: '. \SYSTEM\CRON\cronstatus::text($cron[\SYSTEM\SQL\system_cron::FIELD_STATUS]));
                continue;}
            //set running
            self::status($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS], \SYSTEM\CRON\cronstatus::CRON_STATUS_RUNNING);
            self::status($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS], call_user_func(array($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS],'run')));
        }
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Run a specific registered Cronjob by classname if its time to do so.
     *
     * @param string Classname of the cronjob
     * @return JSON Returns Json::ok()
     */
    public static function run_class($class){
        $cron = \SYSTEM\SQL\SYS_SAIMOD_CRON_SINGLE_SELECT::Q1(array($class));
        if(!$cron){
            return \SYSTEM\LOG\JsonResult::fail();}
        //check module
        if(!self::check($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS])){
            self::status($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS], \SYSTEM\CRON\cronstatus::CRON_STATUS_FAIL_CLASS);
            return \SYSTEM\LOG\JsonResult::fail();}
        //time to execute?
        if(!\SYSTEM\CRON\crontime::check_now(   strtotime($cron[\SYSTEM\SQL\system_cron::FIELD_LAST_RUN]),
                                                $cron[\SYSTEM\SQL\system_cron::FIELD_MIN],
                                                $cron[\SYSTEM\SQL\system_cron::FIELD_HOUR],
                                                $cron[\SYSTEM\SQL\system_cron::FIELD_DAY],
                                                $cron[\SYSTEM\SQL\system_cron::FIELD_DAY_WEEK],
                                                $cron[\SYSTEM\SQL\system_cron::FIELD_MONTH])){
                                                return \SYSTEM\LOG\JsonResult::fail();}
        //Status is ok?
        if($cron[\SYSTEM\SQL\system_cron::FIELD_STATUS] != \SYSTEM\CRON\cronstatus::CRON_STATUS_SUCCESFULLY){
            new \SYSTEM\LOG\CRON('Cron for Class '.$cron[\SYSTEM\SQL\system_cron::FIELD_CLASS].' could not execute cuz Status aint good: '. \SYSTEM\CRON\cronstatus::text($cron[\SYSTEM\SQL\system_cron::FIELD_STATUS]));
            return \SYSTEM\LOG\JsonResult::fail();}
        //set running
        self::status($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS], \SYSTEM\CRON\cronstatus::CRON_STATUS_RUNNING);
        self::status($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS], call_user_func(array($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS],'run')));
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Determine next run of a given Cronjob
     *
     * @param class $class Cronjob class
     * @return time Returns the requested time
     */
    public static function next($class){
        $cron = \SYSTEM\SQL\SYS_CRON_GET::Q1(array($class));
        //check module
        if(!self::check($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS])){
            throw new \SYSTEM\LOG\ERROR("Given class is not a cronjob");}
        //time
        return \SYSTEM\CRON\crontime::next( strtotime($cron[\SYSTEM\SQL\system_cron::FIELD_LAST_RUN]),
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_MIN],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_HOUR],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_DAY],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_DAY_WEEK],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_MONTH]);
    }
    
    /**
     * Determine last run of a given Cronjob
     *
     * @param class $class Cronjob class
     * @return time Returns the requested time
     */
    public static function last($class){
        $cron = \SYSTEM\SQL\SYS_CRON_GET::Q1(array($class));
        //check module
        if(!self::check($cron[\SYSTEM\SQL\system_cron::FIELD_CLASS])){
            throw new \SYSTEM\LOG\ERROR("Given class is not a cronjob");}
        //time
        return \SYSTEM\CRON\crontime::last( strtotime($cron[\SYSTEM\SQL\system_cron::FIELD_LAST_RUN]),
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_MIN],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_HOUR],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_DAY],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_DAY_WEEK],
                                            $cron[\SYSTEM\SQL\system_cron::FIELD_MONTH]);
    }
    
    /**
     * Updates the Status of a Cronjob 
     *
     * @param class $class Cronjob class
     * @param int $status Status to be written 
     * @return bool Returns true or false
     */
    private static function status($class, $status){
        return \SYSTEM\SQL\SYS_CRON_UPD::QI(array($status,time(),$class));}
    
    /**
     * Determines the time when the System-Cronjobs were executed the last time.
     *
     * @return time Returns the time last visited
     */
    public static function last_visit(){
        return \SYSTEM\SQL\SYS_CRON_LAST_VISIT::Q1()['last_run'];}
}