<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SQL
 */
namespace SYSTEM\SQL;

/**
 * Setup Class provided by System to execute QIs defining sql files to be setup on the database
 */
class setup {
    /** array Registered QIs to be executed on setup */
    private static $qis = array();
    
    /**
     * Check if a given QI classname is a valid QI
     *
     * @param string $qi Classname of the QI
     * @return bool Returns true or false.
     */
    private static function check_qi($qi){
        if( !\class_exists($qi) ||
            !\is_array($parents = \class_parents($qi)) ||
            !\array_search('SYSTEM\DB\QI', $parents)){
            return false;}
        return true;}
        
    /**
     * Register a given QI classname
     *
     * @param string $qi Classname of the QI
     * @return null Returns null.
     */
    public static function register($qi){
        if(!self::check_qi($qi)){
            throw new \SYSTEM\LOG\ERROR('Problem with your QI class: '.$qi.'; it might not be available or inherits from the wrong class!');}
        array_push(self::$qis,$qi);}
        
    //public static function check(){}
    //public static function delete(){}
    //public static function backup(){}
    /**
     * Execute all registered QIs installing the Database
     *
     * @return array Returns array with scripts executed and their results.
     */
    public static function install(){
        $result = array();
        foreach(self::$qis as $qi){
            $result[] = array($qi,\call_user_func(array($qi, 'QI')));}
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
}