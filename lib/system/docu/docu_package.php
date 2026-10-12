<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\DOCU
 */
namespace SYSTEM\DOCU;

/**
 * Docu Package Interface to abstract from for every docu to be registered.
 */
interface docu_package {
    /**
     * Config of the Docu Package
     * 
     * @return array Returns array with Config Options
     */
    public static function get_config();
}