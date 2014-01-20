<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_CLASS_SYSTEM extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % $1)) as day,'
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
.' LIMIT 30;',
//mys
'SELECT FROM_UNIXTIME(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.') - MOD(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.'),?)) as day,'
    .'count(*) as count,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' then 1 else 0 end) class_SYSTEM_LOG_COUNTER,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' then 1 else 0 end) class_SYSTEM_LOG_INFO,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' then 1 else 0 end) class_SYSTEM_LOG_DEPRECATED,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\WARNING\' then 1 else 0 end) class_SYSTEM_LOG_WARNING,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\ERROR\' then 1 else 0 end) class_SYSTEM_LOG_ERROR,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\ERROR_EXCEPTION\' then 1 else 0 end) class_SYSTEM_LOG_ERROR_EXCEPTION,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\SHUTDOWN_EXCEPTION\' then 1 else 0 end) class_SYSTEM_LOG_SHUTDOWN_EXCEPTION'
.' FROM '.\SYSTEM\DBD\system_log::NAME_MYS
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;'
);}}

