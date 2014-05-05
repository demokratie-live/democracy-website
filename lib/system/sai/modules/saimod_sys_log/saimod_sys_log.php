<?php
namespace SYSTEM\SAI;

class saimod_sys_log extends \SYSTEM\SAI\SaiModule {    
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_truncate(){        
        \SYSTEM\DBD\SYS_SAIMOD_LOG_TRUNCATE::QQ();
        return \SYSTEM\LOG\JsonResult::ok();}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats(){
        $vars = array();        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_stats.tpl'), $vars);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_admin(){
        $vars = array();        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_admin.tpl'), $vars);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_class_system($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_CLASS_SYSTEM::QA(array($filter));            
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_class_other($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_CLASS_OTHER::QA(array($filter));
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_class_basic($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_CLASS_BASIC::QA(array($filter));
        return \SYSTEM\LOG\JsonResult::toString($result);}    
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_basic($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_UNIQUE_BASIC::QA(array($filter));
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_request($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_UNIQUE_REQUEST::QA(array($filter));            
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_exception($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_UNIQUE_EXCEPTION::QA(array($filter));        
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_referer($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_UNIQUE_REFERER::QA(array($filter));            
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_basic_visitor($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_BASIC_VISITOR::QA(array($filter));            
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_basic_sucess($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_BASIC_SUCCESS::QA(array($filter));
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_basic_querytime($filter){
        $result = \SYSTEM\DBD\SYS_SAIMOD_LOG_BASIC_QUERYTIME::QA(array($filter));            
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_error($error){
        $vars = \SYSTEM\DBD\SYS_SAIMOD_LOG_ERROR::QQ(array($error))->next();        
        $vars['trace'] = implode('</br>', array_slice(explode('#', $vars['trace']), 1, -1));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_error.tpl'), $vars);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_filter($filter = "%"){
        $count = \SYSTEM\DBD\SYS_SAIMOD_LOG_FILTER_COUNT::Q1(array($filter));
        $res = \SYSTEM\DBD\SYS_SAIMOD_LOG_FILTER::QQ(array($filter));
        $table='';
        while($r = $res->next()){     
            //print_r($r);
            $r['class_row'] = self::tablerow_class($r['class']);
            $r['time'] = self::time_elapsed_string(strtotime($r['time']));
            $r['message'] = substr($r['message'],0,255);
            $table .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_table_row.tpl'),$r);                                         
        }
        $vars = array();
        $vars['count'] = $count['count'];
        $vars['table'] = $table;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_table.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_log(){
        $vars = array();
        $vars['table'] = self::sai_mod__SYSTEM_SAI_saimod_sys_log_action_filter();        
        $vars['error_filter'] = self::generate_error_filters();
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_filter.tpl'), $vars);
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
        $res = \SYSTEM\DBD\SYS_SAIMOD_LOG_FILTERS::QQ();        
        $result = '';        
        while($row = $res->next()){
            $result .= '<li><a href="#" filter="'.$row['class'].'">'.$row['class'].'</a></li>';}
        return $result;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log(){
        $vars = array();        
        $vars['PICPATH'] = \SYSTEM\WEBPATH(new \SYSTEM\PSAI(), 'modules/saimod_sys_log/img/');
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log.tpl'), $vars);        
    }
    
    public static function tablerow_class($class){
        switch($class){
            case 'SYSTEM\LOG\INFO': case 'INFO': case 'SYSTEM\LOG\COUNTER':
                return 'success';
            case 'SYSTEM\LOG\DEPRECATED': case 'DEPRECATED':
                return 'info';
            case 'SYSTEM\LOG\ERROR': case 'ERROR': case 'Exception': case 'SYSTEM\LOG\ERROR_EXCEPTION':
            case 'ErrorException': case 'SYSTEM\LOG\SHUTDOWN_EXCEPTION':
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