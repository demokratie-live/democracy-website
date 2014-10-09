<?php
namespace SYSTEM\SAI;

class saimod_sys_todo extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo(){
        $result = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_TODO_LIST::QQ();
        while($row = $res->next()){
            $row['class_by_type'] = self::trclassbytype($row['type']);
            $row['time_elapsed'] = self::time_elapsed_string(strtotime($row['time']));
            $row['report_type'] = self::reporttype($row['type']);
            $row['state_string'] = self::state($row['state']);
            $row['state_btn'] = self::statebtn($row['state']);
            $result .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list_element.tpl'), $row);            
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list.tpl'), array('todo_list_elements' => $result));
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
    
    private static function state($state){
        if($state == 1){
            return 'Closed';}
        return 'Open';}
    
    private static function statebtn($state){
        if($state == 1){
            return '<input type="submit" class="btn-danger" value="reopen">';}
        return '<input type="submit" class="btn-danger" value="close">';}
    
    private static function reporttype($type){
        switch($type){
            case 0: return 'Feature Request';
            case 1: return 'Error Report';
            case 2: return 'Unasigned Category';            
            default: return 'Note';
        }
    }
    
    private static function trclassbytype($type){
        switch($type){
            case 0: return 'info';
            case 1: return 'error';
            case 2: return 'warning';
            case 3: return 'success';
            default: return '';
        }
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_todo">ToDo</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_flag_js(){}
}