<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * SaiModule Class provided by System to be etended by Saimods
 */
class sai_module extends \SYSTEM\API\api_default{
    /**
     * Get the Api Group this Api is operating on
     *
     * @return int Returns api group id.
     */
    public static function get_apigroup(){return 42;}
    
    /**
     * Get default state for this statesystem 
     *
     * @return string Returns name of the startstate.
     */
    public static function get_default_state(){return 'start';}
    
    /**
     * Get the Classname of this class or derived registered saimod
     *
     * @param array $params Parameters with which the Saimodule was called
     * @return string Returns name of the class this api operates on.
     */
    public static function get_class($params = NULL){
        if(isset($params[\SYSTEM\SAI\saigui::SAI_MOD_POSTFIELD])){
            $classname = \str_replace('.', '\\', $params[\SYSTEM\SAI\saigui::SAI_MOD_POSTFIELD]);
            $mods = \SYSTEM\SAI\sai::getAllModules();        
            if( $classname &&
                \array_search($classname, $mods) !== false &&
                (   \call_user_func(array($classname, 'right_public')) ||
                    \call_user_func(array($classname, 'right_right')))){
                    return $classname;
                } else {    
                    return NULL;
                }
        }
        return self::class;    
    }
    
    /**
     * Fixes Classnames for sai postfield
     *
     * @param array $params Params to be corrected
     * @return array Returns array of corrected Params.
     */
    public static function get_params($params){
        $params[\SYSTEM\SAI\saigui::SAI_MOD_POSTFIELD] = \str_replace('.', '_', $params[\SYSTEM\SAI\saigui::SAI_MOD_POSTFIELD]);
        return $params;}
    
    /**
     * Default Page anchor to catch all calls not answered by the saimod api
     *
     * @param string $_escaped_fragment_ Param for Hashbangcrawling
     * @return string Returns HTML of the defaultpage
     */
    public static function default_page($_escaped_fragment_ = null){
        return (new \SYSTEM\SAI\default_page())->html($_escaped_fragment_);}
        
    /**
     * Generate the <li> menu for the Saimod
     * Override this
     *
     * @return string Returns HTML of the <li> menu for the Saimod
     */
    public static function menu(){
        throw new \RuntimeException("Unimplemented!");}
    /**
     * Check public state for the Saimod.
     * Override this
     *
     * @return bool Returns true if the saimod is public
     */
    public static function right_public(){
        throw new \RuntimeException("Unimplemented!");}
    
    /**
     * Check rights for the Saimod.
     * Override this
     *
     * @return bool Returns true if accessable for the user else false
     */
    public static function right_right(){
        throw new \RuntimeException("Unimplemented!");}
}