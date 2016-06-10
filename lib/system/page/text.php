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
 * Text Class provided by System to get Texts from the Database.
 */
class text {
    /** Entry of a new text temporary used */
    const NEW_ENTRY = 'new_text_entry';
    
    /**
     * Get the tags of a textid
     *
     * @param string $id textid to be checked upon
     * @return array Returns array with tags for that textid.
     */
    public static function id_tags($id){
        return \SYSTEM\SQL\SYS_TEXT_GET_ID_TAGS::QA(array($id));}

    /**
     * Get the texts with certain tag and language
     *
     * @param string $tag tag to be checked upon
     * @param string $lang Language for the requested texts
     * @param bool $fallback Fallback to default language if certain id is not found for the specified language.
     * @return array Returns array with texts for requested tag.
     */
    public static function tag($tag, $lang = NULL,$fallback = true) {
        if($lang == NULL){
            $lang = \SYSTEM\locale::get();}

        if(!\SYSTEM\locale::isLang($lang)){
            throw new \Exception("The requested language is not supported: ".$lang);}
        
        $result = array();
        $res = \SYSTEM\SQL\SYS_TEXT_GET_TAG::QQ(array($tag,$lang));
        while($row = $res->next()){
            $result[$row['id']] = $row['text'];}
            
        if($fallback){
            $result2 = array();
            $res = \SYSTEM\SQL\SYS_TEXT_GET_TAG::QQ(array($tag,\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG)));
            while($row = $res->next()){
                $result2[$row['id']] = $row['text'];}
            if(count($result) < count($result2)){
                new \SYSTEM\LOG\WARNING('Texts with tag: '.$tag.' - '.(count($result2)-count($result)).' ids not found for lang: '.$lang.' - fallback to default lang.');}
            $result = array_merge($result2,$result);
        }
        return $result;
    }
    
    /**
     * Get the texts with certain tag and language plus creation user info etc
     *
     * @param string $tag tag to be checked upon
     * @param string $lang Language for the requested texts
     * @param bool $fallback Fallback to default language if certain id is not found for the specified language.
     * @return array Returns array with texts for requested tag including usernames etc for the texts
     */
    public static function tag_adv($tag, $lang = NULL,$fallback = true) {
        if($lang == NULL){
            $lang = \SYSTEM\locale::get();}

        if(!\SYSTEM\locale::isLang($lang)){
            throw new \Exception("The requested language is not supported: ".$lang);}
        
        $result = array();
        $res = \SYSTEM\SQL\SYS_TEXT_GET_TAG_ADV::QQ(array($tag,$lang));
        while($row = $res->next()){
            $result[$row['id']] = $row;}
            
        if($fallback){
            $result2 = array();
            $res = \SYSTEM\SQL\SYS_TEXT_GET_TAG_ADV::QQ(array($tag,\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG)));
            while($row = $res->next()){
                $result2[$row['id']] = $row;}
            if(count($result) < count($result2)){
                new \SYSTEM\LOG\WARNING('Texts with tag: '.$tag.' - '.(count($result2)-count($result)).' ids not found for lang: '.$lang.' - fallback to default lang.');}
            $result = array_merge($result2,$result);
        }
        return $result;
    }
    /**
     * Get a text with certain id and language
     *
     * @param string $id Id of the text requested
     * @param string $lang Language for the requested text
     * @param bool $fallback Fallback to default language if textid is not found for the specified language.
     * @return string Returns the text if found empty string if not.
     */
    public static function get($id, $lang = NULL,$fallback = true) {
        if($lang == NULL){
            $lang = \SYSTEM\locale::get();}

        if(!\SYSTEM\locale::isLang($lang)){
            throw new \Exception("The requested language is not supported: ".$lang);}

        $res = \SYSTEM\SQL\SYS_TEXT_GET_ID::Q1(array($id,$lang));
        if($fallback && !$res && $lang != \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG)){
            new \SYSTEM\LOG\WARNING('Text with id: '.$id.' not found for lang: '.$lang.' - fallback to default lang.');
            return self::get($id, \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG));}
        return $res ? $res['text'] : '';
    }
    
    /**
     * Get a text with certain id and language plus creation user info etc
     *
     * @param string $id Id of the text requested
     * @param string $lang Language for the requested text
     * @param bool $fallback Fallback to default language if textid is not found for the specified language.
     * @return Databaseresult Returns Database Result to loop over.
     */
    public static function get_adv($id, $lang = NULL,$fallback = true) {
        if($lang == NULL){
            $lang = \SYSTEM\locale::get();}

        if(!\SYSTEM\locale::isLang($lang)){
            throw new \Exception("The requested language is not supported: ".$lang);}

        $res = \SYSTEM\SQL\SYS_TEXT_GET_ID_ADV::Q1(array($id,$lang));
        if($fallback && !$res && $lang != \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG)){
            new \SYSTEM\LOG\WARNING('Text with id: '.$id.' not found for lang: '.$lang.' - fallback to default lang.');
            return self::get_adv($id, \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG));}
        return $res;
    }
    
    /**
     * Get a tags of a text with certain id and limit the results
     *
     * @param string $id Id of the text requested
     * @param int $limit Amount of Tags to be requested
     * @return array Returns array with tags for given text id
     */
    public static function get_tags($id,$limit){
        return \SYSTEM\SQL\SYS_TEXT_GET_TAGS::QA(array($id,$limit));}
        
    /**
     * Get latest texts from database by tag and limit
     *
     * @param string $tag Id of the tag requested
     * @param int $limit Amount of Texts to be requested
     * @return array Returns array with texts for given tag ordered by time
     */
    public static function get_latest($tag, $limit){
        return \SYSTEM\SQL\SYS_TEXT_GET_LATEST::QA(array($tag, $limit));
    }
    
    /**
     * Search with content of texts with given tag
     *
     * @param string $search Searchstring "%" are added inside
     * @param string $tag Search only texts with given tag 
     * @return array Returns array with texts for given searchstring and tag
     */
    public static function search($search,$tag/*=null*/){
        $search = '%'.$search.'%';
        return \SYSTEM\SQL\SYS_TEXT_SEARCH_TAG::QA(array($tag,$search,$search,$search));}
    
    /**
     * Save a text into the Database. Works like rename
     *
     * @param string $id Id of the text
     * @param string $new_id New Id of the text
     * @param string $lang Language of the text
     * @param array $tags Array with tags for that text
     * @param string $text Text to be saved
     * @return bool Returns true or false
     */
    public static function save($id, $new_id, $lang, $tags, $text){
        if($new_id == self::NEW_ENTRY){
            return false;}
        //Insert
        if(!\SYSTEM\SQL\SYS_TEXT_SAVE::QI(array($id,$lang,$text,  \SYSTEM\SECURITY\security::getUser()->id,\SYSTEM\SECURITY\security::getUser()->id))){
            return false;}
        //delete all tags
        \SYSTEM\SQL\SYS_TEXT_DELETE_TAGS::QI(array($id));
        //Insert tags
        foreach($tags as $tag){
            if($tag){\SYSTEM\SQL\SYS_TEXT_SAVE_TAG::QI(array($id,$tag));}}
        //Rename
        \SYSTEM\SQL\SYS_TEXT_RENAME::QI(array($new_id,$id));
        \SYSTEM\SQL\SYS_TEXT_RENAME_TAGS::QI(array($new_id,$id));
        return true;
    }
  
    /**
     * Delete a text from the Database.
     *
     * @param string $id Id of the text
     * @param string $lang Language of the text
     * @return bool Returns true or false
     */
    public static function delete($id, $lang = null){
        if(!\SYSTEM\SQL\SYS_TEXT_DELETE::QI(array($id,$lang))){
            return false;}
        if(\SYSTEM\SQL\SYS_TEXT_GET_ID_COUNT::Q1(array($id))['count'] == 0){
            \SYSTEM\SQL\SYS_TEXT_DELETE_TAGS::QI(array($id));}
        return true;
    }
}