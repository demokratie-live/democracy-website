<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\PAGE
 */
namespace SYSTEM\PAGE;

/**
 * DefaultPage Interface provided by System to describe default page functions.
 */
interface DefaultPage {
    /**
     * Html content of the page
     *
     * @return string Returns html of the page.
     */
    public function html();
    
    /**
     * Js files to be loaded for this page
     *
     * @return array Returns array with filepaths of js to be loaded.
     */
    public static function js();
    
    /**
     * Css files to be loaded for this page
     *
     * @return array Returns array with filepaths of css to be loaded.
     */
    public static function css();
}