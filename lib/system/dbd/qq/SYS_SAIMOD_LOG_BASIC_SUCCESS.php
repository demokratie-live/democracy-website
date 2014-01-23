<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_BASIC_SUCCESS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT to_char(to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % $1)), \'YYYY/MM/DD HH24:MI:SS\') as day,'
    .'count(*) as count,'
    .'sum(case when not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'EPRECATED\' '
    .'then 1 else 0 end) class_fail,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'EPRECATED\' '
    .'then 1 else 0 end) class_log,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' then 1 else 0 end) class_sucess'
.' FROM '.\SYSTEM\DBD\system_log::NAME_PG
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;',
//mys
'SELECT FROM_UNIXTIME(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.') - MOD(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.'),?)) as day,'
    .'count(*) as count,'                                                                                
    .'sum(case when not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' and'
    .' not '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'EPRECATED\' '
    .'then 1 else 0 end) class_fail,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\INFO\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'INFO\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\DEPRECATED\' or '
    .\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'EPRECATED\' '
    .'then 1 else 0 end) class_log,'
    .'sum(case when '.\SYSTEM\DBD\system_log::FIELD_CLASS.' = \'SYSTEM\LOG\COUNTER\' then 1 else 0 end) class_sucess'
.' FROM '.\SYSTEM\DBD\system_log::NAME_MYS
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;'
);}}

