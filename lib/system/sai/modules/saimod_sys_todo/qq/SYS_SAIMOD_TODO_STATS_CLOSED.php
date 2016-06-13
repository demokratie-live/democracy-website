<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SQL
 */
namespace SYSTEM\SQL;

/**
 * QQ to get analytics of all closed system_todo entrys
 */
class SYS_SAIMOD_TODO_STATS_CLOSED extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function mysql(){return 
'SELECT DATE_FORMAT(FROM_UNIXTIME(UNIX_TIMESTAMP('.\SYSTEM\SQL\system_todo::FIELD_TIME.') - MOD(UNIX_TIMESTAMP('.\SYSTEM\SQL\system_todo::FIELD_TIME.'),?)),"%Y/%m/%d %H:%i:%s") as day,'
    .'count(*) as count,'                                                                                
    .'sum(case when '.\SYSTEM\SQL\system_todo::FIELD_TIME_CLOSED.' IS NOT NULL then 1 else 0 end) closed,'                                        
    .'sum(case when '.\SYSTEM\SQL\system_todo::FIELD_TIME_CLOSED.' IS NULL then 1 else 0 end) open'
.' FROM '.\SYSTEM\SQL\system_todo::NAME_MYS
.' GROUP BY day'
.' ORDER BY day DESC'
.' LIMIT 30;';
    }
}