<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * saimod_sys_todo Class provided by System as saimod to manage the system_todo, system_todo_assign table
 */
class saimod_sys_todo extends \SYSTEM\SAI\SaiModule {
    /** array Variable to store all registred todo_stats*/
    private static $stats = array(); //only strings!
    
    /**
     * Check if a todo_stats is valid
     *
     * @param string $stats Classname of the todo_stats
     * @return bool Returns true or false.
     */
    private static function check_stats($stats){
        if( !\class_exists($stats) ||
            !((new $stats) instanceof \SYSTEM\SAI\todo_stats)){
            return false;}
        return true;}
    
    /**
     * Register a todo_stats
     *
     * @param string $stats Classname of the todo_stats
     * @return null Returns null.
     */
    public static function register($stats){
        if(!self::check_stats($stats)){
            throw new \SYSTEM\LOG\ERROR('Problem with your TodoStats class: '.$stats);}
        array_push(self::$stats,$stats);}
    
    /**
     * Assign a Todo to the User
     * 
     * @param int $todo Id of the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_assign($todo){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_ASSIGN::QI(array($todo,\SYSTEM\SECURITY\security::getUser()->id));
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Deassign a Todo from the User
     * 
     * @param int $todo Id of the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_deassign($todo){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_DEASSIGN::QI(array($todo,\SYSTEM\SECURITY\security::getUser()->id));
        return \SYSTEM\LOG\JsonResult::ok();}
        
        
    /**
     * Close a Todo
     * 
     * @param int $todo Id of the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close($todo){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_CLOSE::QI(array($todo));
        return \SYSTEM\LOG\JsonResult::ok();}
        
    /**
     * Open a Todo
     * 
     * @param int $todo Id of the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_open($todo){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_OPEN::QI(array($todo));
        return \SYSTEM\LOG\JsonResult::ok();}
        
    /**
     * Add a new Todo
     * 
     * @param string $todo text of the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_add($todo){
        self::exception(new \Exception($todo), false, \SYSTEM\SQL\system_todo::FIELD_TYPE_USER);
        return \SYSTEM\LOG\JsonResult::ok();}
        
    /**
     * Increase the Priority of a Todo
     * 
     * @param int $todo Id of the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_priority_up($todo){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_PRIORITY::QI(array(+1,$todo));
        return \SYSTEM\LOG\JsonResult::ok();}
        
    /**
     * Decrease the Priority of a Todo
     * 
     * @param int $todo Id of the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_priority_down($todo){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_PRIORITY::QI(array(-1,$todo));
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TODO);
        $vars['PICPATH'] = (new \SYSTEM\PSAI('modules/saimod_sys_log/img/'))->WEBPATH(false);
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/saimod_sys_todo.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate the HTML for the form to add a new Todo
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_new(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TODO);
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/saimod_sys_todo_new.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate the HTML for the list of open Todos
     * 
     * @param string $filter Category Filter
     * @param string $search Search Parameter
     * @param int $page Page Number (returns only 100)
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todolist($filter='all',$search='%',$page=0){
        return self::generate_list(\SYSTEM\SQL\system_todo::FIELD_STATE_OPEN,$filter,$search,$page);}
    
    /**
     * Generate the HTML for the list of closed Todos
     * 
     * @param string $filter Category Filter
     * @param string $search Search Parameter
     * @param int $page Page Number (returns only 100)
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_dotolist($filter='all',$search='%',$page=0){
        return self::generate_list(\SYSTEM\SQL\system_todo::FIELD_STATE_CLOSED,$filter,$search,$page);}
    
    /**
     * Internal Function to generate the HTML for the todo list
     * 
     * @param int $state Todo State
     * @param string $filter Category Filter
     * @param string $search Search Parameter
     * @param int $page Page Number (returns only 100)
     * @return string Returns HTML
     */
    private static function generate_list($state,$filter,$search,$page){
        $vars = array();
        $vars['filter'] = $filter;
        $vars['search'] = $search;
        $vars['page'] = $page;
        $search = $search;
        $vars['todo_list_elements'] = $vars['filter_mine'] =
            $vars['filter_free'] = $vars['filter_others'] = $vars['filter_gen'] =
            $vars['filter_user'] = $vars['filter_report'] = '';
        $userid = \SYSTEM\SECURITY\security::getUser()->id;
        switch($filter){
            case 'mine':
                $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_MINE::Q1(array($state,$userid,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_LIST_MINE::QQ(array($state,$userid,$search,$search,$search));
                $vars['filter_mine'] = 'active';
                break;
            case 'free':
                $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_FREE::Q1(array($state,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_LIST_FREE::QQ(array($state,$search,$search,$search));
                $vars['filter_free'] = 'active';
                break;
            case 'others':
                $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_OTHERS::Q1(array($state,$userid,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_LIST_OTHERS::QQ(array($state,$userid,$search,$search,$search));
                $vars['filter_others'] = 'active';
                break;
            case 'gen':
                $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_TYPE::Q1(array($state,\SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_LIST_TYPE::QQ(array($state,\SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION,$search,$search,$search,$userid));
                $vars['filter_gen'] = 'active';
                break;
            case 'user':
                $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_TYPE::Q1(array($state,\SYSTEM\SQL\system_todo::FIELD_TYPE_USER,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_LIST_TYPE::QQ(array($state,\SYSTEM\SQL\system_todo::FIELD_TYPE_USER,$search,$search,$search,$userid));
                $vars['filter_user'] = 'active';
                break;
            case 'report':
                $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT_TYPE::Q1(array($state,\SYSTEM\SQL\system_todo::FIELD_TYPE_REPORT,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_LIST_TYPE::QQ(array($state,\SYSTEM\SQL\system_todo::FIELD_TYPE_REPORT,$search,$search,$search,$userid));
                $vars['filter_report'] = 'active';
                break;
            default:
                $count = \SYSTEM\SQL\SYS_SAIMOD_TODO_COUNT::Q1(array($state,$search,$search,$search))['count'];
                $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_LIST::QQ(array($state,$search,$search,$search,$userid));
                $vars['filter_all'] = 'active';
                break;
        }
        $count_filtered = 0;
        $res->seek(100*$page);
        while(($row = $res->next()) && ($count_filtered < 100)){
            $row['class_row'] = self::trclass($row['type'],$row['class'],$row['assignee_id'],$userid);
            $row['time_elapsed'] = \SYSTEM\time::time_ago_string(strtotime($row['time']));
            $row['state_string'] = self::state($row['count']);
            $row['state_btn'] = self::statebtn($row['count']);
            $row['message'] = $row['message'];
            $row['request_uri'] = htmlspecialchars($row['request_uri']);
            $row['openclose'] = $state == \SYSTEM\SQL\system_todo::FIELD_STATE_OPEN ? 'close' : 'open';
            $row['message'] = str_replace("\n", '<br/>', $row['message']);
            $vars['todo_list_elements'] .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/todo_user_list_element.tpl'))->SERVERPATH(), $row);
            $count_filtered++;
        }
        $vars['pagination'] = '';
        $vars['page_last'] = ceil($count/100)-1;
        for($i=0;$i < ceil($count/100);$i++){
            $data = array('page' => $i,'search' => $search, 'filter' => $filter, 'active' => ($i == $page) ? 'active' : '');
            $vars['pagination'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/todo_list_pagination.tpl'))->SERVERPATH(), $data);
        }
        $vars['count'] = $count_filtered.'/'.$count;
        $vars['state'] = $state == \SYSTEM\SQL\system_todo::FIELD_STATE_OPEN ? 'todo' : 'todo(doto)';
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TODO));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/todo_list.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generates an array with values from all registered Todo Stats and Summary
     *
     * @return array Returns array with todo stats
     */
    public static function statistics(){
        $result = array();
        $result['project'] = 0;
        $result['project_closed'] = 0;
        $result['project_open'] = 0;
        $result['project_all'] = 0;
        $result['data'] = array();
        foreach(self::$stats as $stat){
            $data = \call_user_func(array($stat, 'stats'));
            $result['data'][] = $data;
            $result['project'] += $data->perc;
            $result['project_open'] += $data->open;
            $result['project_closed'] += $data->closed;
            $result['project_all'] += $data->all;
        }
        $result['project'] = sprintf("%.2f",$result['project'] / (count($result['data'])),2);
        return $result;
    }
    
    /**
     * Generate the HTML for the statistics of the ToDos
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats(){
        $vars = self::statistics();
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TODO));
        $vars['entries'] = '';
        foreach($vars['data'] as $stat){
            $vars['entries'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/todo_stats_entry.tpl'))->SERVERPATH(), $stat);
        }
        $vars['userstats'] = '';
        $userstats = \SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_USERS::QQ();
        while($stat = $userstats->next()){
            $stat['perc'] = sprintf("%.2f",($stat['state_closed'] / ($stat['state_open']+$stat['state_closed']))*100);
            $vars['userstats'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/todo_stats_users_entry.tpl'))->SERVERPATH(), $stat);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/todo_stats.tpl'))->SERVERPATH(), $vars);        
    }
    
    /**
     * Internal Function to generate the text for Todo Status Open & Closed
     * 
     * @param int $state State of the Todo
     * @return string Returns open or closed string
     */
    private static function state($state){
        if($state == 1){
            return 'Closed';}
        return 'Open';}
    
    /**
     * Internal Function to generate the Buttons for Todo Status Open & Closed
     * 
     * @param int $state State of the Todo
     * @return string Returns the HTML of the open clase buttons
     */
    private static function statebtn($state){
        if($state == 1){
            return '<input type="submit" class="btn-danger" value="reopen">';}
        return '<input type="submit" class="btn-danger" value="close">';}
    
    /**
     * Internal Function to generate the Trclass(color) for the Todo
     * 
     * @param int $type Type of the Todo
     * @param string $class Class of the Todo
     * @param int $assignee Userid of the assigned for this Todo
     * @param int $userid Userid of the Current logged in User
     * @return string Returns the HTML of the open clase buttons
     */
    private static function trclass($type,$class,$assignee,$userid){
        if($type == \SYSTEM\SQL\system_todo::FIELD_TYPE_USER){
            if($assignee == $userid){ return 'success';}
            if($assignee){ return 'danger';}
            return 'warning';
        }
        switch($class){
            case 'SYSTEM\LOG\INFO': case 'INFO': case 'SYSTEM\LOG\COUNTER':
                return 'success';
            case 'SYSTEM\LOG\DEPRECATED': case 'DEPRECATED':
                return 'info';
            case 'SYSTEM\LOG\ERROR': case 'ERROR': case 'Exception': case 'SYSTEM\LOG\ERROR_EXCEPTION':
            case 'ErrorException': case 'SYSTEM\LOG\SHUTDOWN_EXCEPTION':
                return 'danger';
            case 'SYSTEM\LOG\WARNING': case 'WARNING':
                return 'warning';
            default:
                return '';
        }
    }
    
    /**
     * Close all Generated ToDos
     * 
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_close_all(){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_CLOSE_ALL::QI();
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Edit the message of a Todo
     * 
     * @param int $todo Id of the Todo
     * @param string $message Message for the Todo
     * @return JSON Returns Json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_edit($todo, $message){
        \SYSTEM\SQL\SYS_SAIMOD_TODO_EDIT::QI(array($message,$message,$todo));
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Calculate the Stats of closed ToDos
     * 
     * @param string $filter Filter for the Calculation
     * @return JSON Returns Json with stats data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats_name_closed($filter){
        return \SYSTEM\LOG\JsonResult::toString(\SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_CLOSED::QA(array($filter)));}
    
    /**
     * Calculate the Stats of assigned ToDos
     * 
     * @param string $filter Filter for the Calculation
     * @return JSON Returns Json with stats data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_stats_name_assigned($filter){
        return \SYSTEM\LOG\JsonResult::toString(\SYSTEM\SQL\SYS_SAIMOD_TODO_STATS_ASSIGNED::QA(array($filter)));}
        
    /**
     * Returns the HTML for a ToDo
     * 
     * @param int $todo Id of the Todo
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_action_todo($todo){
        $userid = \SYSTEM\SECURITY\security::getUser()->id;
        $vars = \SYSTEM\SQL\SYS_SAIMOD_TODO_TODO::Q1(array($todo,$userid));
        $vars['trace'] = implode('</br>', array_slice(explode('#', $vars['trace']), 1, -1));
        $vars['display_assign'] = $vars['assignee_id'] != $userid ? '' : 'display: none;';
        $vars['display_deassign'] = $vars['assignee_id'] == $userid ? '' : 'display: none;';
        $vars['assignees'] = '';
        $res = \SYSTEM\SQL\SYS_SAIMOD_TODO_ASSIGNEES::QQ(array($todo,$userid));
        while($row = $res->next()){
            $vars['assignees'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/saimod_sys_todo_todo_user_assignee.tpl'))->SERVERPATH(), $row);
        }
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_TODO));
        return $vars[\SYSTEM\SQL\system_todo::FIELD_TYPE] == \SYSTEM\SQL\system_todo::FIELD_TYPE_USER ?
               \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/saimod_sys_todo_todo_user.tpl'))->SERVERPATH(), $vars) :
               \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/saimod_sys_todo_todo.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_todo/tpl/menu.tpl'))->SERVERPATH());}
    
    /**
     * Returns if the Saimod is public(access for everyone)
     * 
     * @return boolean Returns if the Saimod is public(true) or not(false)
     */
    public static function right_public(){return false;}
    
    /**
     * Returns if the requesting user has the required rights to access the Saimod
     * 
     * @return boolean Returns true if the user can access
     */
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_todo/js/saimod_sys_todo.js'));}
    
    /**
     * Save a Report to the ToDo Database
     * 
     * @param string $message Message of the Report
     * @param array/JSON $data Data for the Report
     * @return JSON Returns json with status true
     */
    public static function report($message,$data){
        $_POST = $data; //save data in post
        self::exception(new \Exception($message), false, \SYSTEM\SQL\system_todo::FIELD_TYPE_REPORT);
        return \SYSTEM\LOG\JsonResult::ok();}
        
    /**
     * Save a Exception as ToDo in the Database
     * This is used as Errorhandler in some form.
     * 
     * @param \Exception $E Exception to be saved
     * @param bool $thrown Was the Exception thrown?
     * @param int $type Type of the Todo(Exception)
     * @return bool Returns false
     */
    public static function exception(\Exception $E, $thrown, $type = \SYSTEM\SQL\system_todo::FIELD_TYPE_EXCEPTION){
        try{
            if(\property_exists(get_class($E), 'todo_logged') && $E->todo_logged){                
                return false;} //alrdy logged(this prevents proper thrown value for every system exception)
            \SYSTEM\SQL\SYS_SAIMOD_TODO_EXCEPTION_INSERT::Q1(   array(  get_class($E), $E->getMessage(), $E->getCode(), $E->getFile(), $E->getLine(), $E->getTraceAsString(),
                                                                        getenv('REMOTE_ADDR'),round(microtime(true) - \SYSTEM\time::getStartTime(),5),date('Y-m-d H:i:s', microtime(true)),
                                                                        $_SERVER["SERVER_NAME"],$_SERVER["SERVER_PORT"],$_SERVER['REQUEST_URI'], serialize($_POST),
                                                                        array_key_exists('HTTP_REFERER', $_SERVER) ? $_SERVER['HTTP_REFERER'] : null,
                                                                        array_key_exists('HTTP_USER_AGENT',$_SERVER) ? $_SERVER['HTTP_USER_AGENT'] : null,
                                                                        ($user = \SYSTEM\SECURITY\security::getUser()) ? $user->id : null,$thrown ? 1 : 0,$E->getMessage(),$type));
            if(\property_exists(get_class($E), 'logged')){
                $E->todo_logged = true;} //we just did log
        } catch (\Exception $E){return false;} //Error -> Ignore
        return false; //We just log and do not handle the error!
    }
}