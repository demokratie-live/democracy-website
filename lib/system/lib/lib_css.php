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
 * css lib Class provided by System to provide css libs.
 * @todo better abstraction model
 */
abstract class lib_css extends lib{
    /**
     * Get Css lib include path
     *
     * @return string Returns path of the css lib to be included (webpath).
     */
    protected static function css_path(){}    
}