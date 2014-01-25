<?php
namespace SYSTEM\SAI;

class saimod_sys_security extends \SYSTEM\SAI\SaiModule {
    
    public static function html_content_groups(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_groups.tpl'),array());}
    
    public static function html_content_rights(){
        $rows = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHTS::QQ();                
        while($r = $res->next()){
            $rows .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_right.tpl'),$r);}        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_rights.tpl'),array('rows' => $rows));
    }
    
    public static function html_content_users($search = null){
        $search = '%'.$search.'%';
        $count = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_COUNT::Q1(array($search));
        $rows = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USERS::QQ(array($search));                
        while($r = $res->next()){
            $r['class'] = self::tablerow_class($r['last_active']);
            $r['time_elapsed'] = self::time_elapsed_string($r['last_active']);
            $rows .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_user.tpl'),$r);            
        }        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_users.tpl'),array('rows' => $rows, 'count' => $count['count']));
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security(){
        $vars = array();
        $vars['content_users'] = self::html_content_users();
        $vars['content_rights'] = self::html_content_rights();
        $vars['content_groups'] = self::html_content_groups();
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security.tpl'), $vars);
    }
    
    private static function tablerow_class($last_active){
        $time = time() - strtotime($last_active);
        
        if($time <= 60*60){
            return 'success';}
        if($time <= 60*60*24){
            return 'info';}
        if($time <= 60*60*24*7){
            return 'warning';}
        
        return 'error';
    }
    
    private static function time_elapsed_string($ptime)
    {
        $etime = time() - $ptime;

        if ($etime < 1)
        {
            return '0 seconds';
        }

        $a = array( 12 * 30 * 24 * 60 * 60  =>  'year',
                    30 * 24 * 60 * 60       =>  'month',
                    24 * 60 * 60            =>  'day',
                    60 * 60                 =>  'hour',
                    60                      =>  'minute',
                    1                       =>  'second'
                    );

        foreach ($a as $secs => $str)
        {
            $d = $etime / $secs;
            if ($d >= 1)
            {
                $r = round($d);
                return $r . ' ' . $str . ($r > 1 ? 's' : '') . ' ago';
            }
        }
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_security">Security</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_flag_css(){return \SYSTEM\LOG\JsonResult::toString(
                                     array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security.css')));}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_flag_js(){ return \SYSTEM\LOG\JsonResult::toString(
                                     array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security.js')));}
}