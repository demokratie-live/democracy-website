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
 * QQ to get a text by id and language
 */
class SYS_TEXT_GET_ID extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function pgsql(){return
'SELECT id,text FROM system.text WHERE id = $1 and lang = $2;';
    }
    public static function mysql(){return
'SELECT id,text FROM system_text WHERE id = ? and lang = ?;';
    }
}