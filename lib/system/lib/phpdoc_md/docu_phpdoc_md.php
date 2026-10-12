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

class docu_phpdoc_md implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'phpdoc_md',
                        'inpath' => new \SYSTEM\PLIB('phpdoc_md/'),
                        'outpath' => new \SYSTEM\PLIB('phpdoc_md/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('phpdoc_md/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('phpdoc_md/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('phpdoc_md/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - PHPDoc MD');
    }
}