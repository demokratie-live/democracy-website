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

class docu_jqbootstrapvalidation implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'jqbootstrapvalidation',
                        'inpath' => new \SYSTEM\PLIB('jqbootstrapvalidation/'),
                        'outpath' => new \SYSTEM\PLIB('jqbootstrapvalidation/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('jqbootstrapvalidation/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('jqbootstrapvalidation/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('jqbootstrapvalidation/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - JQBootstrapValidation');
    }
}