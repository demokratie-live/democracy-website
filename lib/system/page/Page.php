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
 * Page Interface provided by System to describe page functions.
 */
interface Page {
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
    
    /**
     * Tile of the page
     *
     * @return string Returns the title for the page.
     */
    public static function title();
    
    /**
     * Meta of the page
     * Array Key is used as Meta to be written. The string is Split by the last
     * "_". meta_samplepage_description will resolve to meta['description']
     *
     * @return array Returns array with metastrings for the page.
     */
    public static function meta();
}