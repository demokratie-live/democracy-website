<?php

namespace SYSTEM\SAI;


class saimod_sys_log extends \SYSTEM\SAI\SaiModule {    
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_truncate(){
        if(\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
            $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
            $res = $con->query('TRUNCATE system.sys_log;');
            return true;
        }
        return false;          
    }    
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_visualization(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = $con->query('SELECT  time::date as day,
                                    min(time) as time_min, max(time) as time_max,
                                    count(*) as count,
                                    avg(querytime) as querytime_avg,
                                    max(querytime) as querytime_max,
                                    min(querytime) as querytime_min, 	
                                    count(distinct file) as file_unique,
                                    count(distinct ip) as ip_unique,
                                    count(distinct message) as text_unique,	
                                    count(distinct class) as class_unique,
                                    sum(case when class = \'INFO\' then 1 else 0 end) class_INFO,
                                    sum(case when class = \'DEPRECATED\' then 1 else 0 end) class_DEPRECATED,
                                    sum(case when class = \'WARNING\' then 1 else 0 end) class_WARNING,
                                    sum(case when class = \'ERROR\' then 1 else 0 end) class_ERROR,
                                    sum(case when class = \'AppError\' then 1 else 0 end) class_AppError,
                                    sum(case when class = \'SYSTEM\LOG\INFO\' then 1 else 0 end) class_SYSTEM_LOG_INFO,
                                    sum(case when class = \'SYSTEM\LOG\DEPRECATED\' then 1 else 0 end) class_SYSTEM_LOG_DEPRECATED,
                                    sum(case when class = \'SYSTEM\LOG\WARNING\' then 1 else 0 end) class_SYSTEM_LOG_WARNING,
                                    sum(case when class = \'SYSTEM\LOG\ERROR\' then 1 else 0 end) class_SYSTEM_LOG_ERROR,
                                    sum(case when class = \'SYSTEM\LOG\ErrorException\' then 1 else 0 end) class_SYSTEM_LOG_ErrorException,
                                    sum(case when class = \'SYSTEM\LOG\ShutdownException\' then 1 else 0 end) class_SYSTEM_LOG_ShutdownException,
                                    sum(case when class = \'Exception\' then 1 else 0 end) class_Exception,
                                    sum(case when class = \'RuntimeException\' then 1 else 0 end) class_RuntimeException,
                                    sum(case when class = \'ErrorException\' then 1 else 0 end) class_ErrorException 	
                                from system.sys_log
                                group by day
                                order by day desc
                                limit 365;');
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);    
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_filter($filter = ""){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = null;                
        if($filter !== ""){
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $res = $con->prepare(   'selectSysLogFilter',
                                        'SELECT * FROM system.sys_log WHERE class ILIKE $1 ORDER BY time DESC LIMIT 100;',
                                        array($filter));            
            } else {
                $res = $con->prepare(   'selectSysLogFilter',
                                        'SELECT * FROM system_log WHERE class LIKE ? ORDER BY time DESC LIMIT 100;',
                                        array($filter));
            }
        } else {
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $res = $con->query('SELECT * FROM system.sys_log ORDER BY time DESC LIMIT 100;');                
            } else {
                $res = $con->query('SELECT * FROM system_log ORDER BY time DESC LIMIT 100;');
            }
        }
        
        $now = microtime(true);
        
        $result =   '<table class="table table-hover table-condensed">'.                    
                    '<tr>'.'<th>'.'time ago'.'</th>'.'<th>'.'time'.'</th>'.'<th>'.'class'.'</th>'.'<th>'.'message'.'</th>'.'<th>'.'code'.'</th>'.'<th>'.'file'.'</th>'.'<th>'.'line'.'</th>'.'<th>'.'ip'.'</th>'.'<th>'.'querytime'.'</tr>';
        while($r = $res->next()){
            //TODO make time conversion on database
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $result .= '<tr class="'.self::tablerow_class($r['class']).'">'.'<td>'.self::time_elapsed_string(strtotime($r['time'])).'</td>'.'<td>'.$r['time'].'</td>'.'<td>'.$r['class'].'</td>'.'<td>'.substr($r['message'],0,255).'</td>'.'<td>'.$r['code'].'</td>'.'<td>'.$r['file'].'</td>'.'<td>'.$r['line'].'</td>'.'<td>'.$r['ip'].'</td>'.'<td>'.$r['querytime'].'</td>'.'</tr>';            
            } else {
                $result .= '<tr class="'.self::tablerow_class($r['class']).'">'.'<td>'.self::time_elapsed_string($r['time']).'</td>'.'<td>'.$r['time'].'</td>'.'<td>'.$r['class'].'</td>'.'<td>'.substr($r['message'],0,255).'</td>'.'<td>'.$r['code'].'</td>'.'<td>'.$r['file'].'</td>'.'<td>'.$r['line'].'</td>'.'<td>'.$r['ip'].'</td>'.'<td>'.$r['querytime'].'</td>'.'</tr>';            
            }
        }
        $result .= '</table>';
        
        return $result;
        
    }
    
    private static function time_elapsed_string($ptime){
        $etime = time() - $ptime;
        if ($etime < 1){
            return '0 seconds';}

        $a = array( 12 * 30 * 24 * 60 * 60  =>  'year',
                    30 * 24 * 60 * 60       =>  'month',
                    24 * 60 * 60            =>  'day',
                    60 * 60                 =>  'hour',
                    60                      =>  'minute',
                    1                       =>  'second');

        foreach ($a as $secs => $str){
            $d = $etime / $secs;
            if ($d >= 1){
                $r = round($d);
                return $r . ' ' . $str . ($r > 1 ? 's' : '') . ' ago';}
        }
    }
    
    private static function generate_error_filters(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = $con->query("SELECT class FROM system.sys_log GROUP BY class ORDER BY class;");
        
        $result = "";
        $i = 1;
        while($row = $res->next()){
            $result .= '<button class="btn" href="#" filter="'.$row['class'].'">'.$row['class'].'</button>'.(($i++ % 6 == 0) ? '</br>' : '');}
        
        return $result;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log(){                                                        
        $vars = array();
        $vars['error_filter'] = self::generate_error_filters();
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log.tpl'), $vars);        
    }
    
    private static function tablerow_class($class){
        switch($class){
            case 'SYSTEM\LOG\INFO': case 'INFO':
                return 'success';
            case 'SYSTEM\LOG\DEPRECATED': case 'DEPRECATED':
                return 'info';
            case 'SYSTEM\LOG\ERROR': case 'ERROR':
                return 'error';
            case 'SYSTEM\LOG\WARNING': case 'WARNING':
                return 'warning';
            default:
                return '';
        }        
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_log">Log</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log.js')));}
}