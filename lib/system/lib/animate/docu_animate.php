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

class docu_animate implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'animate',
                        'inpath' => new \SYSTEM\PLIB('animate/'),
                        'outpath' => new \SYSTEM\PLIB('animate/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('animate/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('animate/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('animate/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - Animate');
    }
}