<?php
namespace SYSTEM\SAI;

class saimod_sys_todo extends \SYSTEM\SAI\SaiModule {
    private static $stats = array(); //only strings!
    
    private static function check_stats($stats){
        if( !\class_exists($stats) ||
            !\is_array($parents = \class_parents($stats)) ||
            !\array_search('SYSTEM\SAI\todo_stats', $parents)){
            return false;}
        return true;}
    
    public static function register($stats){
        if(!self::check_stats($stats)){
            throw new \SYSTEM\LOG\ERROR('Problem with your TodoStats class: '.$stats);}
        array_push(self::$stats,$stats);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close($todo){
        \SYSTEM\DBD\SYS_SAIMOD_TODO_CLOSE::QI(array($todo));
        return \SYSTEM\LOG\JsonResult::ok();}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_open($todo){
        \SYSTEM\DBD\SYS_SAIMOD_TODO_OPEN::QI(array($todo));
        return \SYSTEM\LOG\JsonResult::ok();}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_add($todo){
        self::exception(new \Exception($todo), false, true);
        return \SYSTEM\LOG\JsonResult::ok();}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TODO);
        $vars['PICPATH'] = \SYSTEM\WEBPATH(new \SYSTEM\PSAI(), 'modules/saimod_sys_log/img/');
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/saimod_sys_todo.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_new(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TODO);
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/saimod_sys_todo_new.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todolist(){
        $result = $result_user = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_TODO_TODO_LIST::QQ();
        $count = \SYSTEM\DBD\SYS_SAIMOD_TODO_TODO_COUNT::Q1()['count'];
        while($row = $res->next()){
            $row['class_row'] = self::trclass($row['type'],$row['class']);
            $row['time_elapsed'] = self::time_elapsed_string(strtotime($row['time']));
            //$row['report_type'] = self::reporttype($row['type']);
            $row['state_string'] = self::state($row['count']);
            $row['state_btn'] = self::statebtn($row['count']);
            $row['message'] = htmlspecialchars($row['message']);
            $row['request_uri'] = htmlspecialchars($row['request_uri']);
            $row['openclose'] = 'close';
            if($row['type'] == \SYSTEM\DBD\system_todo::FIELD_TYPE_USER){
                $row['message'] = str_replace("\n", '<br/>', $row['message']);
                $result_user .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_user_list_element.tpl'), $row);
            } else {
                $result .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list_element.tpl'), $row);
            }    
        }
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TODO);
        $vars['todo_user_list_elements'] = $result_user;
        $vars['todo_list_elements'] = $result;
        $vars['count'] = $count;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_dotolist(){
        $result = $result_user = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_TODO_DOTO_LIST::QQ();
        $count = \SYSTEM\DBD\SYS_SAIMOD_TODO_DOTO_COUNT::Q1()['count'];
        while($row = $res->next()){
            $row['class_row'] = self::trclass($row['type'],$row['class']);
            $row['time_elapsed'] = self::time_elapsed_string(strtotime($row['time']));
            $row['state_string'] = self::state($row['count']);
            $row['state_btn'] = self::statebtn($row['count']);
            $row['message'] = htmlspecialchars($row['message']);
            $row['request_uri'] = htmlspecialchars($row['request_uri']);
            $row['openclose'] = 'open';
            if($row['type'] == \SYSTEM\DBD\system_todo::FIELD_TYPE_USER){
                $row['message'] = str_replace("\r", '<br/>', $row['message']);
                $result_user .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_user_list_element.tpl'), $row);
            } else {
                $result .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list_element.tpl'), $row);
            }
        }
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TODO);
        $vars['todo_user_list_elements'] = $result_user;
        $vars['todo_list_elements'] = $result;
        $vars['count'] = $count;
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_list.tpl'), $vars);
    }
    
    public static function statistics(){
        $result = array();
        $result['project'] = 0;
        $result['project_count'] = 0;
        $result['project_all'] = 0;
        $result['data'] = array();
        foreach(self::$stats as $stat){
            $data = \call_user_func(array($stat, 'stats'));
            $result['data'][] = $data;
            $result['project'] += $data->perc;
            $result['project_count'] += $data->part;
            $result['project_all'] += $data->whole;
        }
        $result['project'] = round($result['project'] / (count($result['data'])),2);
        return $result;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats(){
        $vars = self::statistics();
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TODO));
        $vars['entries'] = '';
        foreach($vars['data'] as $stat){
            $vars['entries'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_stats_entry.tpl'), $stat);
        }
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/todo_stats.tpl'), $vars);}
    
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
    
    private static function trclass($type,$class){
        if($type == \SYSTEM\DBD\system_todo::FIELD_TYPE_USER){
            return 'success';}
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
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close_all(){
        \SYSTEM\DBD\SYS_SAIMOD_TODO_CLOSE_ALL::QI();
        return \SYSTEM\LOG\JsonResult::ok();}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_edit($todo, $message){
        \SYSTEM\DBD\SYS_SAIMOD_TODO_EDIT::QI(array($message,$message,$todo));
        return \SYSTEM\LOG\JsonResult::ok();}
        
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todo($todo){
        $vars = \SYSTEM\DBD\SYS_SAIMOD_TODO_TODO::Q1(array($todo));
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_TODO));
        $vars['trace'] = implode('</br>', array_slice(explode('#', $vars['trace']), 1, -1));
        return $vars[\SYSTEM\DBD\system_todo::FIELD_TYPE] == \SYSTEM\DBD\system_todo::FIELD_TYPE_USER ?
               \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/saimod_sys_todo_todo_user.tpl'), $vars) :
               \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/tpl/saimod_sys_todo_todo.tpl'), $vars);}
    
    public static function html_li_menu(){return '<li><a id="menu_todo" href="#!todo">${sai_menu_todo}</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    //public static function css(){}
    public static function js(){
        return array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_todo/js/saimod_sys_todo.js'));}
    
    public static function exception(\Exception $E, $thrown, $user = false){
        try{
            if(\property_exists(get_class($E), 'todo_logged') && $E->todo_logged){                
                return false;} //alrdy logged(this prevents proper thrown value for every system exception)
                if($user){
                    \SYSTEM\DBD\SYS_SAIMOD_TODO_USER_EXCEPTION_INSERT::Q1(  array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                                                    getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),
                                                                                    $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                                                    array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                                                    array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                                                    ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null, $thrown ? 1 : 0, sha1($E->getMessage())),
                                                                            array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                                                    getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),date('Y-m-d H:i:s', microtime(true)),
                                                                                    $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                                                    array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                                                    array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                                                    ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null,$thrown,$E->getMessage()));
                } else {
                    \SYSTEM\DBD\SYS_SAIMOD_TODO_EXCEPTION_INSERT::Q1(   array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                                                getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),
                                                                                $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                                                array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                                                array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                                                ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null, $thrown ? 1 : 0, sha1($E->getMessage())),
                                                                        array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                                                getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),date('Y-m-d H:i:s', microtime(true)),
                                                                                $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                                                array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                                                array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                                                ($user = \SYSTEM\SECURITY\Security::getUser()) ? $user->id : null,$thrown,$E->getMessage()));
                }
            if(\property_exists(get_class($E), 'logged')){
                $E->todo_logged = true;} //we just did log
        } catch (\Exception $E){return false;} //Error -> Ignore
        
        return false; //We just log and do not handle the error!
    }
}