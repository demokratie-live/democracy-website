<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_UNIQUE_EXCEPTION extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'SELECT to_timestamp(extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int - (extract(epoch from '.\SYSTEM\DBD\system_log::FIELD_TIME.')::int % $1)) as day,'
    .'count(*) as count,'
    .'count(distinct "'.\SYSTEM\DBD\system_log::FIELD_USER.'") as user_unique,'                                        
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique,'                                      
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_SERVER_NAME.') as server_name_unique'
.' FROM '.\SYSTEM\DBD\system_log::NAME_PG
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;',
//mys
'SELECT FROM_UNIXTIME(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.') - MOD(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.'),?)) as day,'
    .'count(*) as count,'                                        
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_FILE.') as file_unique,'
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_LINE.') as line_unique,'                                        
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_CLASS.') as class_unique'                                        
.' FROM '.\SYSTEM\DBD\system_log::NAME_MYS
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;'
);}}

