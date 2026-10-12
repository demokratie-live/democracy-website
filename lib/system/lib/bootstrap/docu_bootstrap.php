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

class docu_bootstrap implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'bootstrap',
                        'inpath' => new \SYSTEM\PLIB('bootstrap/'),
                        'outpath' => new \SYSTEM\PLIB('bootstrap/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('bootstrap/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('bootstrap/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('bootstrap/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - Bootstrap');
    }
}