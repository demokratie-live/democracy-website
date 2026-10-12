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
 * QQ to count all system_text_tag entrys of a tag with filter
 */
class SYS_SAIMOD_TEXT_COUNT_TAG extends \SYSTEM\DB\QP {
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
'SELECT COUNT(*) as count'.
' FROM system.text_tag'.
' LEFT JOIN system.text ON system.text_tag.id = system.text.id'.
' LEFT JOIN system.user as a ON system.text.author = a.id'.
' LEFT JOIN system.user as ae ON system.text.author_edit = ae.id'.
' WHERE tag = $1'.
' AND (a.username LIKE $2 OR ae.username LIKE $3 OR text LIKE $4);';
    }
    
    /**
     * Get QQs MYSQL Query String
     * 
     * @return string Returns MYSQL Query String
     */
    public static function mysql(){return 
'SELECT COUNT(*) as `count`'.
' FROM system_text_tag'.
' LEFT JOIN system_text ON system_text_tag.id = system_text.id'.
' LEFT JOIN system_user as a ON system_text.author = a.id'.
' LEFT JOIN system_user as ae ON system_text.author_edit = ae.id'.
' WHERE tag = ?'.
' AND (a.username LIKE ? OR ae.username LIKE ? OR text LIKE ?);';
    }
}