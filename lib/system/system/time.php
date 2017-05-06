<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM
 */
namespace SYSTEM;

/**
 * Time Class provided by System for Runtime Clock and time sting operations
 */
class time {
    /** int System time - runtime clock*/
    private static $start_time;    
    
    /**
     * Start the Runtime Clock
     *
     * @return null Returns null.
     */
    public static function start(){
        self::$start_time = microtime(true);}
    
    /**
     * Retrieve the Runtime Timestamp
     *
     * @return int Returns the Runtime Timestamp
     */
    public static function getStartTime(){
        return self::$start_time;}
        
    /**
     * Calaculate the time which has passed for given timestamp.
     * Scaling from seconds to years. Required strings from tag
     * 'time' to be included.
     *
     * @param int $time Unixtimestamp to be converted
     * @return string Returns scaled time string.
     */
    public static function time_ago_string($time){
        $etime = time() - $time;
        if ($etime < 1){
            return '0 ${time_ago_second}';}

        $a = array( 12 * 30 * 24 * 60 * 60  =>  '${time_ago_year}',
                    30 * 24 * 60 * 60       =>  '${time_ago_month}',
                    24 * 60 * 60            =>  '${time_ago_day}',
                    60 * 60                 =>  '${time_ago_hour}',
                    60                      =>  '${time_ago_minute}',
                    1                       =>  '${time_ago_second}');

        foreach ($a as $secs => $str){
            $d = $etime / $secs;
            if ($d >= 1){
                $r = round($d);
                return $r . ' ' . $str;}
        }
    }
    
    public static function time_in_string($time){
        $etime = $time - time();
        if ($etime < 1){
            return '${time_in} 0 ${time_in_second}';}

        $a = array( 12 * 30 * 24 * 60 * 60  =>  '${time_in_year}',
                    30 * 24 * 60 * 60       =>  '${time_in_month}',
                    24 * 60 * 60            =>  '${time_in_day}',
                    60 * 60                 =>  '${time_in_hour}',
                    60                      =>  '${time_in_minute}',
                    1                       =>  '${time_in_second}');

        foreach ($a as $secs => $str){
            $d = $etime / $secs;
            if ($d >= 1){
                $r = round($d);
                return '${time_in}' . ' ' . $r . ' ' . $str;}
        }
    }
}