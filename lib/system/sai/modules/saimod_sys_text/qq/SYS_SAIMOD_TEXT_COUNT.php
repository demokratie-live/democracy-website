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
 * QQ to count all system_text entrys with filter
 */
class SYS_SAIMOD_TEXT_COUNT extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT COUNT(*) as count'.
' FROM system.text'.
' LEFT JOIN system.user as a ON system.text.author = a.id'.
' LEFT JOIN system.user as ae ON system.text.author_edit = ae.id'.                
' WHERE (a.username LIKE $1 OR ae.username LIKE $2 OR text LIKE $3);';
    }
    public static function mysql(){return 
'SELECT COUNT(*) as `count`'.
' FROM system_text'.
' LEFT JOIN system_user as a ON system_text.author = a.id'.
' LEFT JOIN system_user as ae ON system_text.author_edit = ae.id'.                
' WHERE (a.username LIKE ? OR ae.username LIKE ? OR text LIKE ?);';
    }
}