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
 * saimod_sys_log Class provided by System as saimod to manage the system_log table
 */
class saimod_sys_analytics extends \SYSTEM\SAI\sai_module {
    /**
     * Deletes the Log Entries
     * 
     * @return json Returns json with status ok
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_truncate(){        
        \SYSTEM\SQL\SYS_SAIMOD_LOG_TRUNCATE::QQ();
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Generates HTML for one Log Analytics Entry
     *
     * @return string Returns HTML
     */
    public static function analytics(){
        $vars = array();
        $data = \SYSTEM\SQL\SYS_SAIMOD_LOG_ANALYTICS::Q1(array(86400));
        $vars['log_today'] = $data['count'];
        $vars['ip_today'] = $data['ip_unique'];
        $vars['user_today'] = $data['user_unique'];
        $data = \SYSTEM\SQL\SYS_SAIMOD_LOG_ANALYTICS::Q1(array(604800));
        $vars['log_week'] = $data['count'];
        $vars['ip_week'] = $data['ip_unique'];
        $vars['user_week'] = $data['user_unique'];
        $data = \SYSTEM\SQL\SYS_SAIMOD_LOG_ANALYTICS::Q1(array(2692000));
        $vars['log_month'] = $data['count'];
        $vars['ip_month'] = $data['ip_unique'];
        $vars['user_month'] = $data['user_unique'];
        $vars['page_value'] =   \round(  $vars['log_today']+$vars['ip_today']*10+$vars['user_today']*100+
                                        ($vars['log_week']+$vars['ip_week']*10+$vars['user_week']*100)/7+
                                        ($vars['log_month']+$vars['ip_month']*10+$vars['user_week']*100)/31,0);
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_analytics/tpl/saimod_sys_analytics_analytics.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Get Log Analytics Data for class system
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_class_system($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_CLASS_SYSTEM::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('class_system',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\COUNTER" then 1 else 0 end) class_SYSTEM_LOG_COUNTER,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\INFO" then 1 else 0 end) class_SYSTEM_LOG_INFO,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\DEPRECATED" then 1 else 0 end) class_SYSTEM_LOG_DEPRECATED,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\WARNING" then 1 else 0 end) class_SYSTEM_LOG_WARNING,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\ERROR" then 1 else 0 end) class_SYSTEM_LOG_ERROR,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\ERROR_EXCEPTION" then 1 else 0 end) class_SYSTEM_LOG_ERROR_EXCEPTION,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\SHUTDOWN_EXCEPTION" then 1 else 0 end) class_SYSTEM_LOG_SHUTDOWN_EXCEPTION'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);    
    }
    
    /**
     * Get Log Analytics Data for class other
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_class_other($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_CLASS_OTHER::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('class_other',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'                                                                                
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'Exception\' then 1 else 0 end) class_Exception,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'RuntimeException\' then 1 else 0 end) class_RuntimeException,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'ErrorException\' then 1 else 0 end) class_ErrorException'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Get Log Analytics Data for class basic
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_class_basic($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_CLASS_BASIC::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('class_basic',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'                                                                                
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'ERROR\' then 1 else 0 end) class_ERROR,'                                        
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'WARNING\' then 1 else 0 end) class_WARNING,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'INFO\' then 1 else 0 end) class_INFO,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'DEPRECATED\' then 1 else 0 end) class_DEPRECATED,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = \'AppError\' then 1 else 0 end) class_AppError'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Get Log Analytics Data for unique basic
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_unique_basic($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_UNIQUE_BASIC::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('unique_basic',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_USER.') as user_unique,'                                        
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_IP.') as ip_unique,'                                                                     
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_SERVER_NAME.') as server_name_unique'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Get Log Analytics Data for unique request
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_unique_request($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_UNIQUE_REQUEST::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('unique_request',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'                                        
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_SERVER_NAME.') as server_name_unique,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_SERVER_PORT.') as server_port_unique,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_REQUEST_URI.') as request_uri_unique,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_POST.') as post_unique'                                        
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Get Log Analytics Data for unqiue exception
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_unique_exception($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_UNIQUE_EXCEPTION::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('unique_exception',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'                                        
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_FILE.') as file_unique,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_LINE.') as line_unique,'                                        
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_CLASS.') as class_unique'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Get Log Analytics Data for unique referer
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_unique_referer($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_UNIQUE_REFERER::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('unique_referer',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_USER.') as user_unique,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_IP.') as ip_unique,'                                        
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_HTTP_REFERER.') as http_referer_unique,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_HTTP_USER_AGENT.') as http_user_agent_unique'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Get Log Analytics Data for basic visitor
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_basic_visitor($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_BASIC_VISITOR::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('basic_visitor',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_USER.') as user_unique,'                                        
                                    .'count(distinct '.\SYSTEM\SQL\system_log::FIELD_IP.') as ip_unique'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    /**
     * Get Log Analytics Data for basic success
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_basic_sucess($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_BASIC_SUCCESS::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('basic_sucess',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'                                                                                
                                    .'sum(case when not '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\COUNTER" and'
                                    .' not '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\INFO" and'
                                    .' not '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "INFO" and'
                                    .' not '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\DEPRECATED" and'
                                    .' not '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "DEPRECATED" and '
                                    .' not '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\WARNING" and '
                                    .' not '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "PreprocessingLog" '
                                    .'then 1 else 0 end) class_fail,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\COUNTER" or '
                                    .\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\INFO" or '
                                    .\SYSTEM\SQL\system_log::FIELD_CLASS.' = "INFO" or '
                                    .\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\DEPRECATE" or '
                                    .\SYSTEM\SQL\system_log::FIELD_CLASS.' = "DEPRECATED" or '
                                    .\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\WARNING" or '
                                    .\SYSTEM\SQL\system_log::FIELD_CLASS.' = "PreprocessingLog" '
                                    .'then 1 else 0 end) class_log,'
                                    .'sum(case when '.\SYSTEM\SQL\system_log::FIELD_CLASS.' = "SYSTEM\\LOG\\COUNTER" then 1 else 0 end) class_sucess'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
        /**
     * Get Log Analytics Data for basic querytime
     * 
     * @param int $filter Timeiterval in seconds to cluster upon
     * @param string $db DB to operate on
     * @return json Returns json with data
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics_action_stats_name_basic_querytime($filter,$db=null){
        $result = array();
        if(!$db){
            $result = \SYSTEM\SQL\SYS_SAIMOD_LOG_BASIC_QUERYTIME::QA(array($filter));
        } else {
            $con = new \SYSTEM\DB\Connection(new \SYSTEM\DB\DBInfoSQLite(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH).$db));
            $res = $con->prepare('basic_querytime',
                                'SELECT datetime(strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.') - strftime("%s",'.\SYSTEM\SQL\system_log::FIELD_TIME.')%:filter,"unixepoch", "localtime")  as day,'
                                    .'count(*) as count,'                                                                                
                                    .'avg('.\SYSTEM\SQL\system_log::FIELD_QUERYTIME.') as querytime_avg,'
                                    .'max('.\SYSTEM\SQL\system_log::FIELD_QUERYTIME.') as querytime_max,'
                                    .'min('.\SYSTEM\SQL\system_log::FIELD_QUERYTIME.') as querytime_min'
                                .' FROM '.\SYSTEM\SQL\system_log::NAME_MYS
                                .' GROUP BY day'
                                .' ORDER BY day DESC'
                                .' LIMIT 30;',
                                array(':filter' => $filter));
            while($row = $res->next()){
                $result[] = $row;}
        }
        return \SYSTEM\LOG\JsonResult::toString($result);}
    
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_analytics(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_LOG);
        $vars['dbfile_entries'] = '';
        if( \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH) &&
            file_exists(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH))){
            $scanned_directory = array_diff(scandir(\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CRON_LOG2SQLITE_PATH)), array('..', '.', 'undefined', '.gitkeep'));
            foreach($scanned_directory as $file){
                $vars['dbfile_entries'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_analytics/tpl/saimod_sys_analytics_menu.tpl'))->SERVERPATH(), array('file' => $file));}
        }
        //positioning problem
        //$vars['analytics'] = self::analytics();
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_analytics/tpl/saimod_sys_analytics.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function menu(){
        return new sai_module_menu( 1,
                                    sai_module_menu::POISITION_LEFT,
                                    sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_analytics/tpl/menu.tpl'))->SERVERPATH()));}
    
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
        return array(new \SYSTEM\PSAI('modules/saimod_sys_analytics/js/saimod_sys_analytics.js'));}
}