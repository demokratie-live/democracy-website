<?php
namespace SYSTEM\SAI;

class saimod_sys_security extends \SYSTEM\SAI\SaiModule {
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_groups(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_groups.tpl'),array());}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_newright(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_newright.tpl'),array());}
        
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_rights(){
        $rows = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHTS::QQ();                
        while($r = $res->next()){
            $rows .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_right.tpl'),$r);}        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_rights.tpl'),array('rows' => $rows));
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_addright($id,$name,$description){
        //TODO rightcheck
        return \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHT_INSERT::QI(array($id,$name,$description));}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleterightconfirm($id){
        //TODO rightcheck
        $vars = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHT_CHECK::Q1(array($id));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_deleteright.tpl'),$vars);}
        
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleteright($id){
        //TODO rightcheck
        return \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHT_DELETE::QI(array($id));}
        
    private static function user_actions($userid){
        $count = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_LOG_COUNT::Q1(array($userid));
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_LOG::QQ(array($userid));
        $table='';
        while($r = $res->next()){            
            $r['class_row'] = \SYSTEM\SAI\saimod_sys_log::tablerow_class($r['class']);
            $r['time'] = self::time_elapsed_string(strtotime($r['time']));
            $r['message'] = substr($r['message'],0,255);
            $table .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_table_row.tpl'),$r);
        }
        $vars = array();
        $vars['count'] = $count['count'];
        $vars['table'] = $table;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_table.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_stats(){
         return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_stats.tpl'),array());
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_user($username){        
        $vars = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER::Q1(array($username));
        $vars['time_elapsed'] = self::time_elapsed_string($vars['last_active']);
        $vars['user_actions'] = array_key_exists('id', $vars) ? self::user_actions($vars['id']) : '';
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_user_view.tpl'),$vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_users($search = null){        
        $search = '%'.$search.'%';        
        $count = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_COUNT::Q1(array($search),array($search,$search));
        $rows = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USERS::QQ(array($search),array($search,$search));                
        while($r = $res->next()){
            $r['class'] = self::tablerow_class($r['last_active']);
            $r['time_elapsed'] = self::time_elapsed_string($r['last_active']);
            $rows .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_user.tpl'),$r);            
        }        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security_users.tpl'),array('rows' => $rows, 'count' => $count['count']));
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security(){
        $vars = array();
        $vars['PICPATH'] = \SYSTEM\WEBPATH(new \SYSTEM\PSAI(), 'modules/saimod_sys_log/img/');
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security.tpl'), $vars);}
    
    private static function tablerow_class($last_active){
        $time = time() - $last_active;
        
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