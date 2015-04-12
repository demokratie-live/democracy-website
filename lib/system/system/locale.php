<?php
namespace SYSTEM;

class locale {    
    const SESSION_KEY = 'locale';        

    public static function set($lang){
        if(!self::isLang($lang)){
            return false;}

        \SYSTEM\SECURITY\Security::save(self::SESSION_KEY, $lang);
        if(\SYSTEM\SECURITY\Security::isLoggedIn()){
            $user = \SYSTEM\SECURITY\Security::getUser();
            $user->locale = $lang;
            \SYSTEM\DBD\SYS_LOCALE_SET_LOCALE::Q1(array($lang, $user->id));            
        }
            
        return true;
    }

    public static function get(){
        $value = \SYSTEM\SECURITY\Security::load(self::SESSION_KEY);
        if($value == NULL){
            return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_LANG);}

        return $value;
    }

    public static function isLang($lang){        
        if(!\in_array($lang, \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS))){
            return false;}
        return true;
    }

    /* Searches the database locale_string
     * $request = either int for category search or array with string ids for stringid search
     * $lang is either one of the defined lang strings LANGS or null to use the useselected or default lang of the page.
     *
     * returns array or throws exception
     */
    public static function getStrings($request, $lang = NULL) {
        if($lang == NULL){
            $lang = self::get();}

        if(!self::isLang($lang)){
            throw new \Exception("The requested language is not supported: ".$lang);}
            
        $q = \SYSTEM\system::isSystemDbInfoPG() ? '"' : '`';

        if(\is_array($request)){
            $where = '';
            foreach($request as $strid){
                if(!\preg_match("^[a-zA-Z0-9_]+$^", $strid) != 0){
                    throw new \Exception("Requested id contains inpropper symbols: ".$strid);}
                 $where .= 'OR '.$q.\SYSTEM\DBD\system_locale_string::FIELD_ID.$q.' = $1 ';
            }
            $where = substr($where,2);
            //those querys cant be done with qq, since they are dynamic
            //they sql string is generated and prepare does not cover all the required parameterization
            //hence qq cant be used on this purpose!
            $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
            $res = $con->prepare( 'localeArrStmt',  'SELECT '.$q.$lang.$q.','.$q.\SYSTEM\DBD\system_locale_string::FIELD_ID.$q.' FROM '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\system_locale_string::NAME_PG : \SYSTEM\DBD\sytem_locale_string::NAME_MYS).' WHERE '.$where,
                                    $request);

            $result = array();
            while($r = $res->next()){
                $result[$r[\SYSTEM\DBD\system_locale_string::FIELD_ID]] = $r[$lang];}

            return $result;
        } else if(\intval($request)){
            $cat = \intval($request);

            $con = new \SYSTEM\DB\Connection( \SYSTEM\system::getSystemDBInfo());            
            $res = $con->prepare( 'localeStmt', 'SELECT '.$q.$lang.$q.','.$q.\SYSTEM\DBD\system_locale_string::FIELD_ID.$q.' FROM '.(\SYSTEM\system::isSystemDbInfoPG() ? \SYSTEM\DBD\system_locale_string::NAME_PG : \SYSTEM\DBD\system_locale_string::NAME_MYS).' WHERE '.\SYSTEM\DBD\system_locale_string::FIELD_CATEGORY.' = '.(\SYSTEM\system::isSystemDbInfoPG() ? '$1' : '?').';',
                                    array($cat));

            $result = array();
            while($r = $res->next()){                
                $result[$r[\SYSTEM\DBD\system_locale_string::FIELD_ID]] = $r[$lang];}

            return $result;
        } 

        throw new \Exception("Could not understand given request: ".$request);
    }
}