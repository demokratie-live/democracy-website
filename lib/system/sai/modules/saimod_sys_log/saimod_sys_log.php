<?php
namespace SYSTEM\SAI;

class saimod_sys_log extends \SYSTEM\SAI\SaiModule {    
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_truncate(){        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $con->query('TRUNCATE '.\SYSTEM\DBD\system_log::NAME_PG.';');
        } else {
            $con->query('TRUNCATE '.\SYSTEM\DBD\system_log::NAME_MYS.';');}
        return \SYSTEM\LOG\JsonResult::ok();
    }    
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats(){
        $vars = array();        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_stats.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_admin(){
        $vars = array();        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_admin.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_class_system($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' then 1 else 0 end) class_SYSTEM_LOG_COUNTER,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' then 1 else 0 end) class_SYSTEM_LOG_INFO,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' then 1 else 0 end) class_SYSTEM_LOG_DEPRECATED,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\WARNING\' then 1 else 0 end) class_SYSTEM_LOG_WARNING,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\ERROR\' then 1 else 0 end) class_SYSTEM_LOG_ERROR,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\ERROR_EXCEPTION\' then 1 else 0 end) class_SYSTEM_LOG_ERROR_EXCEPTION,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\SHUTDOWN_EXCEPTION\' then 1 else 0 end) class_SYSTEM_LOG_SHUTDOWN_EXCEPTION'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_class_other($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'                                                                                
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'Exception\' then 1 else 0 end) class_Exception,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'RuntimeException\' then 1 else 0 end) class_RuntimeException,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'ErrorException\' then 1 else 0 end) class_ErrorException'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_class_basic($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'                                                                                
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'ERROR\' then 1 else 0 end) class_ERROR,'                                        
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'WARNING\' then 1 else 0 end) class_WARNING,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' then 1 else 0 end) class_INFO,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'DEPRECATED\' then 1 else 0 end) class_DEPRECATED,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'AppError\' then 1 else 0 end) class_AppError'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_basic_sucess($filter){
        /*
        $children  = array();
        is_subclass_of
        foreach(get_declared_classes() as $class){
            if($class instanceof foo) $children[] = $class;
        }
        */
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'                                                                                
                                        .'sum(case when not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' and'
                                        .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' and'
                                        .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' and'
                                        .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' and'
                                        .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'DEPRECATED\' and '
                                        .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'PreprocessingLog\' '
                                        .'then 1 else 0 end) class_fail,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' or '
                                        .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' or '
                                        .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' or '
                                        .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' or '
                                        .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'DEPRECATED\' or '
                                        .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'PreprocessingLog\' '
                                        .'then 1 else 0 end) class_log,'
                                        .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' then 1 else 0 end) class_sucess'                                        
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_basic_querytime($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'                                                                                
                                        .'avg('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_avg,'
                                        .'max('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_max,'
                                        .'min('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_min,'
                                        .'variance('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_var'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_basic($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'
                                        .'count(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_unique,'                                        
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_FILE.') as file_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_LINE.') as line_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TRACE.') as trace_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_MESSAGE.') as text_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_CLASS.') as class_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TIME.') as time_unique,'                                        
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_NAME.') as server_name_unique'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_PORT.') as server_port_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_REQUEST_URI.') as request_uri_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_POST.') as post_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.') as http_referer_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.') as http_user_agent_unique'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_request($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'
                                        //.'count(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_FILE.') as file_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_LINE.') as line_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TRACE.') as trace_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_MESSAGE.') as text_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_CLASS.') as class_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TIME.') as time_unique,'                                        
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_NAME.') as server_name_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_PORT.') as server_port_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_REQUEST_URI.') as request_uri_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_POST.') as post_unique'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.') as http_referer_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.') as http_user_agent_unique'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_exception($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'
                                        //.'count(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_FILE.') as file_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_LINE.') as line_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TRACE.') as trace_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_MESSAGE.') as text_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_CLASS.') as class_unique'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TIME.') as time_unique,'                                        
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_NAME.') as server_name_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_PORT.') as server_port_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_REQUEST_URI.') as request_uri_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_POST.') as post_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.') as http_referer_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.') as http_user_agent_unique'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_unique_referer($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'
                                        .'count(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_FILE.') as file_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_LINE.') as line_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TRACE.') as trace_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_MESSAGE.') as text_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_CLASS.') as class_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_TIME.') as time_unique,'                                        
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_NAME.') as server_name_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_PORT.') as server_port_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_REQUEST_URI.') as request_uri_unique,'
                                        //.'count(distinct '.\SYSTEM\DBD\system_log::FIELD_POST.') as post_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_REFERER.') as http_referer_unique,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_HTTP_USER_AGENT.') as http_user_agent_unique'
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_stats_name_basic_visitor($filter){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());        
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % '.$filter.')) as day,'
                                        .'count(*) as count,'
                                        .'count(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_unique,'
                                        //.'variance(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_var,'
                                        .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique'                                        
                                    .' FROM '.\SYSTEM\DBD\system_log::NAME_PG
                                    .' GROUP BY day'
                                    .' ORDER BY day DESC'
                                    .' LIMIT 30;');
        } else {            
        }
        $result = array();
        while($row = $res->next()){
            $result[] = $row;}
            
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_error($error){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){                
                $res = $con->prepare(   'selectSysLogError',
                                        'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_PG.
                                        ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_PG.
                                        ' ON '.\SYSTEM\DBD\system_log::NAME_PG.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
                                        ' = '.\SYSTEM\DBD\system_user::NAME_PG.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
                                        ' WHERE '.\SYSTEM\DBD\system_log::NAME_PG.'."'.\SYSTEM\DBD\system_log::FIELD_ID.'" = $1;',
                                        array($error));
        } else {                
                $res = $con->prepare(   'selectSysLogError',
                                        'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
                                        ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.
                                        ' ON '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
                                        ' = '.\SYSTEM\DBD\system_user::NAME_MYS.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
                                        ' WHERE '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_ID.' = ?;',
                                        array($error));
        }
        
        $vars = $res->next();
        $vars['trace'] = implode('</br>', array_slice(explode('#', $vars['trace']), 1, -1));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_log/saimod_sys_log_error.tpl'), $vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_log_action_filter($filter = ""){        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = null;                
        if($filter !== ""){
            if(\SYSTEM\system::isSystemDbInfoPG()){                
                $res = $con->prepare(   'selectCountSysLogFilter',
                                        'SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_log::NAME_PG.' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.' LIKE $1;',
                                        array($filter))->next();
                $count = $res['count'];
                $res = $con->prepare(   'selectSysLogFilter',
                                        'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_PG.
                                        ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_PG.
                                        ' ON '.\SYSTEM\DBD\system_log::NAME_PG.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
                                        ' = '.\SYSTEM\DBD\system_user::NAME_PG.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
                                        ' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.' LIKE $1'.
                                        ' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.' DESC LIMIT 100;',
                                        array($filter));
            } else {
                $res = $con->prepare(   'selectCountSysLogFilter',
                                        'SELECT COUNT(*) as count'.
                                        ' FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
                                        ' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.' LIKE ?;',
                                        array(mysql_escape_string($filter)))->next();
                $count = $res['count'];
                $res = $con->prepare(   'selectSysLogFilter',
                                        'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
                                        ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.
                                        ' ON '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
                                        ' = '.\SYSTEM\DBD\system_user::NAME_MYS.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
                                        ' WHERE '.\SYSTEM\DBD\system_log::FIELD_CLASS.' LIKE ?'.
                                        ' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.' DESC LIMIT 100;',
                                        array(mysql_escape_string($filter)));
            }
        } else {
            if(\SYSTEM\system::isSystemDbInfoPG()){                
                $res = $con->query('SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_log::NAME_PG)->next();
                $count = $res['count'];
                $res = $con->query( 'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_PG.
                                    ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_PG.
                                    ' ON '.\SYSTEM\DBD\system_log::NAME_PG.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
                                    ' = '.\SYSTEM\DBD\system_user::NAME_PG.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
                                    ' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.
                                    ' DESC LIMIT 100;');
            } else {
                $res = $con->query('SELECT COUNT(*) as count FROM '.\SYSTEM\DBD\system_log::NAME_MYS)->next();
                $count = $res['count'];
                $res = $con->query( 'SELECT * FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
                                    ' LEFT JOIN '.\SYSTEM\DBD\system_user::NAME_MYS.
                                    ' ON '.\SYSTEM\DBD\system_log::NAME_MYS.'.'.\SYSTEM\DBD\system_log::FIELD_USER.
                                    ' = '.\SYSTEM\DBD\system_user::NAME_MYS.'.'.\SYSTEM\DBD\system_user::FIELD_ID.
                                    ' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_TIME.
                                    ' DESC LIMIT 100;');
            }
        }
        
        $now = microtime(true);
        
        $table='';
        while($r = $res->next()){     
            //print_r($r);
            $table .=  '<tr class="sai_log_error '.self::tablerow_class($r['class']).'" error="'.$r['ID'].'">'.
                            '<td>'.self::time_elapsed_string(strtotime($r['time'])).'</td>'.                            
                            '<td>'.$r['class'].'</td>'.
                            '<td style="word-break: break-all;">'.substr($r['message'],0,255).'</td>'.                            
                            '<td style="word-break: break-all;">'.$r['file'].'</td>'.
                            '<td>'.$r['line'].'</td>'.
                            '<td>'.$r['ip'].'</td>'.
                            '<td style="word-break: break-all;">'.$r['server_name'].':'.$r['server_port'].$r['request_uri'].'</td>'.
                            '<td>'.$r['username'].'</td>'.
                            '<td>'.$r['querytime'].'</td>'.
                        '</tr>';                        
        }                                
        $vars = array();
        $vars['count'] = $count;
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
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query( 'SELECT '.\SYSTEM\DBD\system_log::FIELD_CLASS.
                                ' FROM '.\SYSTEM\DBD\system_log::NAME_PG.
                                ' GROUP BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.
                                ' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.';');
        }else{
            $res = $con->query( 'SELECT '.\SYSTEM\DBD\system_log::FIELD_CLASS.
                                ' FROM '.\SYSTEM\DBD\system_log::NAME_MYS.
                                ' GROUP BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.
                                ' ORDER BY '.\SYSTEM\DBD\system_log::FIELD_CLASS.';');
        }
        
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
    
    private static function tablerow_class($class){
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