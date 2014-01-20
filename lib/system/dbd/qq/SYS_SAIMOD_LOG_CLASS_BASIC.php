<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_CLASS_BASIC extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % $1)) as day,'
    .'count(*) as count,'                                                                                
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'ERROR\' then 1 else 0 end) class_ERROR,'                                        
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'WARNING\' then 1 else 0 end) class_WARNING,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' then 1 else 0 end) class_INFO,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'DEPRECATED\' then 1 else 0 end) class_DEPRECATED,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'AppError\' then 1 else 0 end) class_AppError'
.' FROM '.\SYSTEM\DBD\system_log::NAME_PG
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;',
//mys
'SELECT FROM_UNIXTIME(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.') - MOD(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.'),?)) as day,'
    .'count(*) as count,'                                                                                
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'ERROR\' then 1 else 0 end) class_ERROR,'                                        
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'WARNING\' then 1 else 0 end) class_WARNING,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' then 1 else 0 end) class_INFO,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'DEPRECATED\' then 1 else 0 end) class_DEPRECATED,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'AppError\' then 1 else 0 end) class_AppError'
.' FROM '.\SYSTEM\DBD\system_log::NAME_MYS
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;'
);}}

