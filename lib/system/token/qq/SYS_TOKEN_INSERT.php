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
 * QQ to insert a token
 */
class SYS_TOKEN_INSERT extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    
    /**
     * SQL Insert Types
     * 
     * @return string Returns sql Insert Types
     */
    public static function types(){return
'ssssis';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'INSERT INTO system_token (token, class, expire, data, request_user, post_script)'.
' VALUES (?, ?, FROM_UNIXTIME(?), ?, ?, ?);';
    }    
}