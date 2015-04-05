<?php

namespace SYSTEM\API;

abstract class api_default extends api_system {
    //https://developers.google.com/webmasters/ajax-crawling/docs/getting-started
    //mojotrollz.eu:80/web/flingit/?_escaped_fragment_=start%3Bhash.ce5504f67533ab3d881a32e1dcdd330aaeb27f19
    public static function static__escaped_fragment_($_escaped_fragment_){
        $state = \SYSTEM\PAGE\State::get(1, $_escaped_fragment_,false);
        $html = new \DOMDocument();
        $html->loadHTML(static::default_page()->html($_escaped_fragment_));
        foreach($state as $row){
            $frag = new \DOMDocument();
            parse_str(\parse_url($row['url'],PHP_URL_QUERY), $params);
            $frag->loadHTML(\SYSTEM\API\api::run('\SYSTEM\API\verify', static::get_class(), $params, 1, true, true)->html());
            $html->getElementById(substr($row['div'], 1))->appendChild($html->importNode($frag->documentElement, true));
            //Load subpage css
            foreach($row['css'] as $css){
                $css_frag = new \DOMDocument();
                $css_frag->loadHTML('<link href="'.$css.'" rel="stylesheet">');
                $html->getElementsByTagName('head')[0]->appendChild($html->importNode($css_frag->documentElement,true));
            }
        }
        echo $html->saveHTML();        
        die();
    }
    
    public static function get_class(){
        return self::class;}
    
    public static function default_page($_escaped_fragment_ = null){
        throw new \RuntimeException("Unimplemented");}
}