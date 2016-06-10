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
 * QQ to save a text
 */
class SYS_TEXT_SAVE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO `system_text` (`id`, `lang`, `text`, `author`, `author_edit`, `time_create`, `time_edit`)
 VALUES (?, ?, ?, ?, ?, NOW(), NOW())
 ON DUPLICATE KEY UPDATE text=VALUES(text), author_edit = VALUES(author_edit), time_edit = NOW();';
    }
}