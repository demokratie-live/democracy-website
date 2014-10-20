<?php
namespace SYSTEM\SAI;

class saimod_sys_todo extends \SYSTEM\SAI\SaiModule {
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close($todo){
        \SYSTEM\DBD\SYS_SAIMOD_TODO_CLOSE::QI(array($todo));
        return \SYSTEM\LOG\JsonResult::ok();}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_open($todo){
        \SYSTEM\DBD\SYS_SAIMOD_TODO_OPEN::QI(array($todo));
        return \SYSTEM\LOG\JsonResult::ok();}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo(){
        $vars = array();        
        $vars['PICPATH'] = \SYSTEM\WEBPATH(new \SYSTEM\PSAI(), 'modules/saimod_sys_log/img/');
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/saimod_sys_todo.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todolist(){
        $result = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_TODO_TODO_LIST::QQ();
        $count = \SYSTEM\DBD\SYS_SAIMOD_TODO_TODO_COUNT::Q1()['count'];
        while($row = $res->next()){
            $row['class_by_type'] = self::trclassbytype($row['type']);
            $row['time_elapsed'] = self::time_elapsed_string(strtotime($row['time']));
            $row['report_type'] = self::reporttype($row['type']);
            $row['state_string'] = self::state($row['count']);
            $row['state_btn'] = self::statebtn($row['count']);
            $result .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list_element.tpl'), $row);            
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list.tpl'), array('todo_list_elements' => $result, 'count' => $count));
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_dotolist(){
        $result = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_TODO_DOTO_LIST::QQ();
        $count = \SYSTEM\DBD\SYS_SAIMOD_TODO_DOTO_COUNT::Q1()['count'];
        while($row = $res->next()){
            $row['class_by_type'] = self::trclassbytype($row['type']);
            $row['time_elapsed'] = self::time_elapsed_string(strtotime($row['time']));
            $row['report_type'] = self::reporttype($row['type']);
            $row['state_string'] = self::state($row['count']);
            $row['state_btn'] = self::statebtn($row['count']);
            $result .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list_element.tpl'), $row);            
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list.tpl'), array('todo_list_elements' => $result, 'count' => $count));
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats(){
        $todo = new \SYSTEM\LOG\TODO('Do ToDo Stats');
        return 'Todo: Do ToDo Stats';
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
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todo($todo){
        $vars = \SYSTEM\DBD\SYS_SAIMOD_TODO_TODO::QQ(array($todo))->next();
        $vars['trace'] = implode('</br>', array_slice(explode('#', $vars['trace']), 1, -1));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/saimod_sys_todo_todo.tpl'), $vars);}
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_todo">ToDo</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_flag_js(){return \SYSTEM\LOG\JsonResult::toString(
            array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/saimod_sys_todo.js')));}
    
    public static function exception(\Exception $E, $thrown){
        try{
            if(\property_exists(get_class($E), 'todo_logged') && $E->todo_logged){                
                return false;} //alrdy logged(this prevents proper thrown value for every system exception)
            
                \SYSTEM\DBD\SYS_SAIMOD_TODO_EXCEPTION_INSERT::Q1(   array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                                            getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),
                                                                            $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                                            array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                                            array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                                            ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null, $thrown ? 1 : 0),
                                                                    array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                                            getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),date('Y-m-d H:i:s', microtime(true)),
                                                                            $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                                            array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                                            array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                                            ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null,$thrown));                        
            if(\property_exists(get_class($E), 'logged')){
                $E->todo_logged = true;} //we just did log
        } catch (\Exception $E){return false;} //Error -> Ignore
        
        return false; //We just log and do not handle the error!
    }
}