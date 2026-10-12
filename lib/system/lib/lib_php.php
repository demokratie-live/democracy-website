<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\LIB
 */
namespace LIB;

/**
 * php lib Class provided by System to provide php libs.
 * @todo better abstraction model
 */
abstract class lib_php extends lib{
    /**
     * include the php files to be used
     *
     * @return null Returns null
     */
    protected static function php_autoload(){}
}