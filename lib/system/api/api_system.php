<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     system_api
 */
namespace SYSTEM\API;

/**
 * API System class providing System Functionality.
 */
class api_system extends api_login{
    /**
     * System run Cron Call
     *
     * @return JSON Returns JSON result with success/failure status
     */
    public static function call_cron(){
        return \SYSTEM\CRON\cron::run();}
    
    /**
     * System Text Request Call
     *
     * @param mixed $request Request String for Text API
     * @param lang $lang Request Language for given text
     * @return JSON Returns JSON result with data/failure status
     */
    public static function call_text($request,$lang){        
        return \SYSTEM\LOG\JsonResult::toString(\SYSTEM\locale::getStrings($request, $lang));}
        
    /**
     * System File Request Call
     *
     * @param string $cat File category
     * @param string $id File name
     * @return mixed Returns JSON result with failure status or streams the File
     */
    public static function call_files($cat,$id = null){
        return \SYSTEM\FILES\files::get($cat, $id, true);}
        
    /**
     * System State-Pages Request Call
     *
     * @param int $group Page Group for Statesystem
     * @param string $state Full name of the State.
     * @return mixed Returns JSON result with data/failure status
     */
    public static function call_pages($group,$state){
        return \SYSTEM\PAGE\State::get($group,$state);}
        
    /**
     * Static Call to change Language for the current Session/User
     *
     * @param lang $lang Language requested
     * @return null Returns nothing
     */
    public static function static__lang($lang){
        \SYSTEM\locale::set($lang);}
        
    /**
     * Static Call to change Result-Type for the current Session/User
     *
     * @param result $result Resulttype
     * @return null Returns nothing
     */
    public static function static__result($result){
        \SYSTEM\CONFIG\config::set(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_DEFAULT_RESULT, $result);}
    
    /**
     * Static Time-Parameter _ Call to avoid caching and API Errors for JS requests
     *
     * @param mixed $_ Anticaching Parameter of some Browsers
     * @return null Returns nothing
     */
    public static function static__($_){}
    
    /**
     * API Bug Call to report Bugs
     *
     * @param string $message Bugreport Message
     * @param JSON $data Bugreport Data
     * @return null Returns JSON result with success/failure status
     */
    public static function call_bug($message,$data){
        return \SYSTEM\SAI\saimod_sys_todo::report($message,$data);}
        
    /**
     * API Cache Call to request cached Data (usually js and css)
     *
     * @param int $id Cache id to be queried
     * @param sha1 $ident Cache ident to be queried
     * @return mixed Returns cached Data from Database
     */
    public static function call_cache($id,$ident){
        return \SYSTEM\CACHE\cache::get($id, $ident,true);}
}