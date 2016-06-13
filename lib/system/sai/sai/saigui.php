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
        //register docu here, we require path so system must be started
        \SYSTEM\DOCU\docu::register(array(  'id' => 'system',
                                            'inpath' => new \SYSTEM\PSYSTEM(),
                                            'outpath' => new \SYSTEM\PSYSTEM('docu/system/'),
                                            'inpath_md' => new \SYSTEM\PSYSTEM('docu/system/structure.xml'),
                                            'outpath_md' => new \SYSTEM\PSYSTEM('docu/system_wiki/'),
                                            'cachepath' => new \SYSTEM\PSYSTEM('docu/system/cache/'),
                                            'ignore' => array(  'lib/animate/*',
                                                                'lib/bootstrap/*',
                                                                'lib/bootstrap_growl/*',
                                                                'lib/git/*',
                                                                'lib/jqbootstrapvalidation/*',
                                                                'lib/jquery/*',
                                                                'lib/lettering/*',
                                                                'lib/markdown/*',
                                                                'lib/minify/*',
                                                                'lib/phpdocumentor/*',
                                                                'lib/scssphp/*',
                                                                'lib/tablesorter/*',
                                                                'lib/textillate/*',
                                                                'lib/tinymce/*',
                                                                'lib/jstree/*',
                                                                'lib/phpdoc_md/*'),
                                            'sourcecode' => true,
                                            'parseprivate' => false,
                                            'title' => 'SYSTEM - PHP Framework'));
        
        \SYSTEM\SECURITY\security::isLoggedIn(); // refresh session
        //Direct JSON Input
        $pg = json_decode(file_get_contents("php://input"), true);
        if(!$pg){
            $pg = array_merge($_POST,$_GET);}
        if(isset($pg[self::SAI_MOD_POSTFIELD])){
            $classname = \str_replace('.', '\\', $pg[self::SAI_MOD_POSTFIELD]);
            $pg[self::SAI_MOD_POSTFIELD] = \str_replace('.', '_', $pg[self::SAI_MOD_POSTFIELD]);
                        
            $mods = \SYSTEM\SAI\sai::getAllModules();        
            if( $classname &&
                \array_search($classname, $mods) !== false &&
                (   \call_user_func(array($classname, 'right_public')) ||
                    \call_user_func(array($classname, 'right_right')))){                                        
                    return \SYSTEM\API\api::run('\SYSTEM\API\verify', $classname , $pg, 42, true, false);
                } else {    
                    return '<meta http-equiv="refresh" content="0; url=./sai.php">You are no longer logged in. Page reload in 5sec...';}
        } else {            
            return \SYSTEM\API\api::run('\SYSTEM\API\verify', '\SYSTEM\SAI\SaiModule', $pg, 42, false, true);}
    }
}