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
 * QQ to get advanced result for a text by id and language
 */
class SYS_TEXT_GET_ID_ADV extends \SYSTEM\DB\QP {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT system_text.*, a.username as author_name, ae.username as author_edit_name FROM system_text'.
' LEFT JOIN system_user AS a ON system_text.author = a.id'.
' LEFT JOIN system_user AS ae ON system_text.author_edit = ae.id'.
' WHERE system_text.id = ? and lang = ?;';
    }
}