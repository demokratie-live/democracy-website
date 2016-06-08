<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\HTML
 */
namespace SYSTEM\HTML;

/**
 * HTML Class provided by System to generate common HTML tags.
 */
class html{
    /**
     * Generate <link> tag
     *
     * @param string $href href attribute
     * @param string $rel rel attribute
     * @param string $type type attribute
     * @return string Returns link tag string.
     */
    public static function link($href,$rel = 'stylesheet',$type = 'text/css'){
        return '<link href="'.$href.'" rel="'.$rel.'" type="'.$type.'"/>';}
        
    /**
     * Generate <script> tag
     *
     * @param string $src src attribute
     * @param string $type type attribute
     * @param string $rel rel attribute
     * @param string $language language attribute
     * @param string $script script contents
     * @return string Returns script tag string.
     */
    public static function script($src,$type = 'text/javascript',$rel = 'stylesheet', $language = 'JavaScript', $script = ''){
        return '<script src="'.$src.'" language="'.$language.'" type="'.$type.'">'.$script.'</script>';}
        
    /**
     * Generate <style> tag
     *
     * @param string $style style contents
     * @return string Returns style tag string.
     */
    public static function style($style){
        return '<style> '.$style.'</style>';}
}