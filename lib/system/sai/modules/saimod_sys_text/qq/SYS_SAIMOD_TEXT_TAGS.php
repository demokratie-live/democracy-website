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
 * QQ to get all system_text_tag entrys
 */
class SYS_SAIMOD_TEXT_TAGS extends \SYSTEM\DB\QQ {
    /**
     * Get Classname of the QQ
     * 
     * @return string Returns classname
     */
    public static function get_class(){return \get_class();}
    public static function pgsql(){return 
'SELECT "tag", COUNT(*) as "count" FROM system.text_tag GROUP BY "tag" ORDER BY "tag" ASC;';
    }
    public static function mysql(){return 
'SELECT `tag`, COUNT(*) as `count` FROM system_text_tag GROUP BY `tag` ORDER BY `tag` ASC;';
    }
}