<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_BASIC_QUERYTIME extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % $1)) as day,'
    .'count(*) as count,'
    .'count(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_unique,'
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique'                                        
.' FROM '.\SYSTEM\DBD\system_log::NAME_PG
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;',
//mys
'SELECT FROM_UNIXTIME(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.') - MOD(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.'),?)) as day,'
    .'count(*) as count,'                                                                                
    .'avg('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_avg,'
    .'max('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_max,'
    .'min('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_min,'
    .'variance('.\SYSTEM\DBD\system_log::FIELD_QUERYTIME.') as querytime_var'
.' FROM '.\SYSTEM\DBD\system_log::NAME_MYS
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;'
);}}

