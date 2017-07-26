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
 * saigui Class provided by System to handle sai userinterface. Invoke (new saigui)->html()
 */
class saigui {
    /** string field in post or get to be read as saimod modifier */
    const SAI_MOD_POSTFIELD = 'sai_mod';
    
    /**
     * Generate the HTML for the SAI Userinterface
     *
     * @return html Returns html of sai defaultpage.
     */
    public function html(){
        \SYSTEM\SECURITY\security::isLoggedIn(); // refresh session
        //Direct JSON Input
        //$pg = json_decode(file_get_contents("php://input"), true);
        //if(!$pg){
        $pg = array_merge($_POST,$_GET);//}
        if(isset($pg[self::SAI_MOD_POSTFIELD])){
            $classname = \str_replace('.', '\\', $pg[self::SAI_MOD_POSTFIELD]);
            $pg[self::SAI_MOD_POSTFIELD] = \str_replace('.', '_', $pg[self::SAI_MOD_POSTFIELD]);
                        
            if( $classname &&
                \array_search($classname, \SYSTEM\SAI\sai::getAllModules()) !== false &&
                (   \call_user_func(array($classname, 'right_public')) ||
                    \call_user_func(array($classname, 'right_right')))){                                        
                    return \SYSTEM\API\api::run('\SYSTEM\API\verify', $classname , $pg, 42, true, false);
                } else {
                    return '<script type="text/javascript"> window.location = "./sai.php?redirect="+JSON.stringify(system.cur_state());</script>';}
        } else {            
            return \SYSTEM\API\api::run('\SYSTEM\API\verify', '\SYSTEM\SAI\SaiModule', $pg, 42, false, true);}
    }
}