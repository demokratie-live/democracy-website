<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\API
 */
namespace SYSTEM\API;

/**
 * API Default class providing defaulting capabilities and Hashbang-Crawling-Scheme.
 */
abstract class api_default extends api_system {
    /**
     * Static Call handler for Hashbang-Crawling Requests
     *
     * @param string $_escaped_fragment_ Hashbang-Encoded State
     * @return string Returns your API-HTML result as HTML-Snapshot
     */
    public static function static__escaped_fragment_($_escaped_fragment_){
        \libxml_use_internal_errors(true);
        $html = new \DOMDocument();
        $html->loadHTML(static::default_page($_escaped_fragment_ ? $_escaped_fragment_ : true));
        if($error = \libxml_get_last_error()){
            //new \SYSTEM\LOG\ERROR('Parse Error: '.$error->message.' line:'.$error->line.' html: '.$html->saveHTML());
            \libxml_clear_errors();}
        $state = \SYSTEM\PAGE\State::get(static::get_apigroup(), $_escaped_fragment_ ? $_escaped_fragment_ : static::get_default_state(),false);
        foreach($state as $row){
            $frag = new \DOMDocument();
            parse_str(\parse_url($row['url'],PHP_URL_QUERY), $params);
            $class = static::get_class();
            if($class){
                $frag->loadHTML(\SYSTEM\API\api::run('\SYSTEM\API\verify', $class, $params, static::get_apigroup(), true, false));
                if($error = \libxml_get_last_error()){
                    //new \SYSTEM\LOG\ERROR('Parse Error: '.$error->message.' line:'.$error->line.' html: '.$frag->saveHTML());
                    \libxml_clear_errors();}
                $html->getElementById(substr($row['div'], 1))->appendChild($html->importNode($frag->documentElement, true));
                //Load subpage css
                foreach($row['css'] as $css){
                    $css_frag = new \DOMDocument();
                    $css_frag->loadHTML('<link href="'.$css.'" rel="stylesheet" type="text/css">');
                    $html->getElementsByTagName('head')[0]->appendChild($html->importNode($css_frag->documentElement,true));
                }
            }
        }
        //Title
        if((count($state)>=1) && array_key_exists('title', $state[0])){
            $html->getElementsByTagName('title')[0]->nodeValue = $state[0]['title'];}
        //Meta
        if((count($state)>=1) && array_key_exists('meta', $state[0])){
            $meta = $html->getElementsByTagName('meta');//[0]->nodeValue = $state[0]['title'];
            foreach($state[0]['meta'] as $metaname=>$metavalue){
                $found = false;
                $key = explode('_',$metaname);
                $key = end($key);
                for ($i = 0; $i < $meta->length; $i++) {
                    if($meta->item($i)->getAttribute('name') == $key){
                        $found = true;
                        $meta->item($i)->setAttribute('content',$metavalue);}
                }
                if(!$found){
                    $node = $head->appendChild($html->createElement('meta'));
                    $node->setAttribute($key, $metavalue);}
            }
        }
        //print_r($state);
        echo $html->saveHTML();
        new \SYSTEM\LOG\COUNTER("API was called sucessfully.");
        die();
    }
    
    /**
     * API Group function - implement this function and return the Groupnumber
     *
     * @return int Returns your API-Group number
     */
    public abstract static function get_apigroup();
    
    /**
     * API Class function - implement this function and return the Classname
     *
     * @return string Returns your API-Class name
     */
    public static function get_class(){
        return self::class;}
        
    /**
     * API Default State function - implement this function and return the String of the default-state
     *
     * @return string Returns your API-Default-State
     */
    public abstract static function get_default_state();
    
    /**
     * API Default Page function - implement this function and return the Default Page
     *
     * @param string $_escaped_fragment_ Fragment from Hashbang Crawling
     * @return string Returns your API-Default-State
     */
    public abstract static function default_page($_escaped_fragment_ = null);
}