<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\DOCU
 */
namespace SYSTEM\DOCU;

/**
 * Docu Package Class for System.
 */
class docu_system implements docu_package {
    /**
     * Config of the Docu Package
     * 
     * @return array Returns array with Config Options
     */
    public static function get_config(){
        return array(   'id' => 'system',
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
                        'title' => 'SYSTEM - PHP Framework');
    }
}