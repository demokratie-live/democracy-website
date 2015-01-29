<?php

namespace SYSTEM\API;

abstract class api_default {
    //https://developers.google.com/webmasters/ajax-crawling/docs/getting-started
    public static function static__escaped_fragment_($_escaped_fragment_){
        $state = \SYSTEM\PAGE\State::get(1, $_escaped_fragment_,false);
        $result = '';
        foreach($state as $row){
            parse_str(\parse_url($row['url'],PHP_URL_QUERY), $params);
            $result .= \SYSTEM\API\api::run('\SYSTEM\API\verify', 'page_neopolimatrix', $params, 1, true, true)->html();
        }
        echo $result;//echo (new \default_page())->html();
        die();
    }
    
    public static function default_page(){
        throw new \RuntimeException("Unimplemented");}
}