<?php

namespace SYSTEM\API;

abstract class api_default extends api_system {
    //https://developers.google.com/webmasters/ajax-crawling/docs/getting-started
    //mojotrollz.eu:80/web/flingit/?_escaped_fragment_=start%3Bhash.ce5504f67533ab3d881a32e1dcdd330aaeb27f19
    public static function static__escaped_fragment_($_escaped_fragment_){
        $html = new \DOMDocument();
        $html->loadHTML(static::default_page($_escaped_fragment_));
        $state = \SYSTEM\PAGE\State::get(static::get_apigroup(), $_escaped_fragment_,false);
        foreach($state as $row){
            $frag = new \DOMDocument();
            parse_str(\parse_url($row['url'],PHP_URL_QUERY), $params);
            $class = static::get_class($params);
            if($class){
                \libxml_use_internal_errors(true);
                $frag->loadHTML(\SYSTEM\API\api::run('\SYSTEM\API\verify', $class, static::get_params($params), static::get_apigroup(), true, false));                    
                $html->getElementById(substr($row['div'], 1))->appendChild($html->importNode($frag->documentElement, true));
                if($error = \libxml_get_last_error()){
                    new \SYSTEM\LOG\ERROR('Parse Error: '.$error->message.' line:'.$error->line.' html: '.$html->saveHTML());}
                \libxml_clear_errors();
                //Load subpage css
                foreach($row['css'] as $css){
                    $css_frag = new \DOMDocument();
                    $css_frag->loadHTML('<link href="'.$css.'" rel="stylesheet" type="text/css">');
                    $html->getElementsByTagName('head')[0]->appendChild($html->importNode($css_frag->documentElement,true));
                }
            }
        }
        echo $html->saveHTML();
        new \SYSTEM\LOG\COUNTER("API was called sucessfully.");
        die();
    }
    public static function get_apigroup(){
        throw new \RuntimeException("Unimplemented");}
    public static function get_class($params = null){
        return self::class;}
    public static function get_params($params){
        return $params;}
    
    public static function default_page($_escaped_fragment_ = null){
        throw new \RuntimeException("Unimplemented");}
}