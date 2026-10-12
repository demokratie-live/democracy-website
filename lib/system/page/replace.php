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
 * Replace Class provided by System to replace placeholders in text and files ${placeholder}.
 */
class replace {
    /**
     * Replace all placeholders in a text.
     * Array Key of Placeholders represents the name of the placeholder.
     * The value to the key is filled in.
     * 
     * "Text ${textplaceholder}"
     * array('textplaceholder' => 'test')
     * resolves to: "Text test"
     *
     * @param string $text text to be subject of replacements
     * @param array $vars Array with Placeholders.
     * @return string Returns string of the text with replaced placeholder.
     */
    public static function replace($text, $vars = array()){
        if(!$vars){
            $vars = array();}
        $search = array();
        $replace = array();

        foreach($vars as $key=>$value){
            if(!is_array($value)){
                $search[] = '/\${'.$key.'}/';
                $replace[] = $value;}
        }
        return @preg_replace($search, $replace, $text);
    }
    /**
     * Replace all placeholders in a file.
     * Array Key of Placeholders represents the name of the placeholder.
     * The value to the key is filled in.
     * 
     * "Text ${textplaceholder}"
     * array('textplaceholder' => 'test')
     * resolves to: "Text test"
     *
     * @param string $path Filepath of file to be subject of replacements
     * @param array $vars Array with Placeholders.
     * @return string Returns string of the text with replaced placeholder.
     */
    public static function replaceFile($path, $vars = array()){
        $buffer = file_get_contents($path);
        return self::replace($buffer, $vars);}

    /**
     * Replace all placeholders in a text with null.
     * Effectively removing all Placeholders
     * 
     * @param string $text text to be subject of replacements
     * @return string Returns string of the text with all placeholders removed.
     */
    public static function clean($text){
        return preg_replace('/\${.*?}/', '', $text);}
}