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
 * QQ to get texts by tag and language
 */
class SYS_TEXT_GET_TAG extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    
    /**
     * Get QQs PostgreSQL Query String
     * 
     * @return string Returns PostgreSQL Query String
     */
    public static function pgsql(){return
'SELECT system.text.id,text FROM system.text
 LEFT JOIN system.text_tag ON system.text.id = system.text_tag.id
 WHERE tag = $1 and lang = $2;';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return
'SELECT system_text.id,text FROM system_text
 LEFT JOIN system_text_tag ON system_text.id = system_text_tag.id
 WHERE tag = ? and lang = ?;';
    }
}