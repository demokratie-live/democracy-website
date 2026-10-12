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

class docu_phpdocumentor implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'phpdocumentor',
                        'inpath' => new \SYSTEM\PLIB('phpdocumentor/'),
                        'outpath' => new \SYSTEM\PLIB('phpdocumentor/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('phpdocumentor/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('phpdocumentor/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('phpdocumentor/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - PHPDocumentor');
    }
}