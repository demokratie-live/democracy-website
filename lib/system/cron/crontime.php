<?php
namespace SYSTEM\CRON;

//http://coderzone.org/library/PHP-PHP-Cron-Parser-Class_1084.htm
class crontime {
    public static function next($base_time,$min,$hour,$day,$day_week,$month){
        list( $now_min, $now_hour, $now_day, $now_month, $now_day_week ) = preg_split( "/ /", date("i H d n N", $base_time ) );
        list( $next_min, $next_hour, $next_day, $next_month, $next_year) = preg_split( "/ /", date("i H d n Y", $base_time ) );
        if($month){
            if($month < $now_month){ $next_year += 1;}
            $next_month = $month;}
        if($day){
            if($day < $now_day){ $next_month += 1;}
            $next_day = $day;}
        if($hour){
            if($hour < $now_hour){ $next_day += 1;}
            $next_hour = $hour;}
        if($min){
            if($min < $now_min){ $next_hour += 1;}
            $next_min = $min;}
        if($day_week){
            $day_week = $day_week % 6; // 7 and 0 both mean Sunday
            $now_day_week = $now_day_week % 6; // 7 and 0 both mean Sunday
            $next_day += abs($day_week - $now_day_week);}
        return mktime($next_hour, $next_min, 0, $next_month, $next_day, $next_year);
    }
    public static function last($base_time,$min,$hour,$day,$day_week,$month){
        list( $now_min, $now_hour, $now_day, $now_month, $now_day_week ) = preg_split( "/ /", date("i H d n N", $base_time ) );
        list( $last_min, $last_hour, $last_day, $last_month, $last_year) = preg_split( "/ /", date("i H d n Y", $base_time ) );
        if($month){
            if($month > $now_month){ $last_year -= 1;}
            $last_month = $month;}
        if($day){
            if($day > $now_day){ $last_month -= 1;}
            $last_day = $day;}
        if($hour){
            if($hour > $now_hour){ $last_day -= 1;}
            $last_hour = $hour;}
        if($min){
            if($min > $now_min){ $last_hour -= 1;}
            $last_min = $min;}
        if($day_week){
            $day_week = $day_week % 6; // 7 and 0 both mean Sunday
            $now_day_week = $now_day_week % 6; // 7 and 0 both mean Sunday
            $last_day -= abs($day_week - $now_day_week);}
        return mktime($last_hour, $last_min, 0, $last_month, $last_day, $last_year);
    }
    public static function check($base_time,$last_run,$min,$hour,$day,$day_week,$month){
        return self::next($last_run, $min, $hour, $day, $day_week, $month) < $base_time ? true : false;}
    public static function next_now($min,$hour,$day,$day_week,$month){
        self::next(time(),$min,$hour,$day,$day_week,$month);}
    public static function last_now($min,$hour,$day,$day_week,$month){
        return self::last(time(),$min,$hour,$day,$day_week,$month);}
    public static function check_now($last_run,$min,$hour,$day,$day_week,$month){
        return self::check(time(),$last_run,$min,$hour,$day,$day_week,$month);}
}