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
 * QQ to get tags of text by id
 */
class SYS_TEXT_GET_ID_TAGS extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT tag FROM system.text_tag WHERE id = $1';
    }
    public static function mysql(){return
'SELECT tag FROM system_text_tag WHERE id = ?';
    }
}