<?php
namespace SYSTEM\PAGE;
class text {
    //return all text values with certain tag and lang - array(id => text)
    public static function tag($tag, $lang = NULL) {
        if($lang == NULL){
            $lang = \SYSTEM\locale::get();}

        if(!\SYSTEM\locale::isLang($lang)){
            throw new \Exception("The requested language is not supported: ".$lang);}
        
        $result = array();
        $res = \SYSTEM\DBD\SYS_TEXT_GET_TAG::QQ(array($tag,$lang));
        while($row = $res->next()){
            $result[$row['id']] = $row['text'];}
        return $result;
    }
    //return textstring with certain id and lang
    public static function get($id, $lang = NULL,$fallback = true) {
        if($lang == NULL){
            $lang = \SYSTEM\locale::get();}

        if(!\SYSTEM\locale::isLang($lang)){
            throw new \Exception("The requested language is not supported: ".$lang);}

        $res = \SYSTEM\DBD\SYS_TEXT_GET_ID::Q1(array($id,$lang));
        if($fallback && !$res && $lang != \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG)){
            new \SYSTEM\LOG\WARNING('Text with id: '.$id.' not found for lang: '.$lang.' - fallback to default lang.');
            return self::get($id, \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG));}
        return $res ? $res['text'] : '';
    }
}