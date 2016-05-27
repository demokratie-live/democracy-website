<?php
namespace SYSTEM\API;
abstract class api_default extends api_system {
    //https://developers.google.com/webmasters/ajax-crawling/docs/getting-started
    //https://developers.google.com/webmasters/ajax-crawling/docs/specification#pages-without-hash-fragments
    //mojotrollz.eu:80/web/flingit/?_escaped_fragment_=start%3Bhash.ce5504f67533ab3d881a32e1dcdd330aaeb27f19
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
            $class = static::get_class($params);
            if($class){
                $frag->loadHTML(\SYSTEM\API\api::run('\SYSTEM\API\verify', $class, static::get_params($params), static::get_apigroup(), true, false));
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
        if(array_key_exists('title', $state[0])){
            $html->getElementsByTagName('title')[0]->nodeValue = $state[0]['title'];}
        //Meta
        if(array_key_exists('meta', $state[0])){
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
    public static function get_apigroup(){
        throw new \RuntimeException("Unimplemented");}
    public static function get_class($params = null){
        return self::class;}
    public static function get_params($params){
        return $params;}
    public static function get_default_state(){
        throw new \RuntimeException("Unimplemented");}
    
    public static function default_page($_escaped_fragment_ = null){
        throw new \RuntimeException("Unimplemented");}
}