<?php
namespace SYSTEM\DBD;

class SYS_SAIMOD_LOG_ANALYTICS extends \SYSTEM\DB\QP {
    protected static function query(){
        return new \SYSTEM\DB\QQuery(get_class(),
//pg            
'',
//mys
'SELECT DATE_FORMAT(FROM_UNIXTIME(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.') - MOD(UNIX_TIMESTAMP('.\SYSTEM\DBD\system_log::FIELD_TIME.'),?)),"%Y/%m/%d %H:%i:%s") as day,'
    .'count(*) as count,'
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_USER.') as user_unique,'                                        
    .'count(distinct '.\SYSTEM\DBD\system_log::FIELD_IP.') as ip_unique'
.' FROM '.\SYSTEM\DBD\system_log::NAME_MYS
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 1;'
);}}
