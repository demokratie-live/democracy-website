<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     LIB
 */
namespace LIB;

class docu_bootstrap_growl implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'bootstrap_growl',
                        'inpath' => new \SYSTEM\PLIB('bootstrap_growl/'),
                        'outpath' => new \SYSTEM\PLIB('bootstrap_growl/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('bootstrap_growl/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('bootstrap_growl/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('bootstrap_growl/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - Bootstrap Growl');
    }
}