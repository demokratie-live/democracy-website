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

class docu_git implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'git',
                        'inpath' => new \SYSTEM\PLIB('git/'),
                        'outpath' => new \SYSTEM\PLIB('git/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('git/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('git/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('git/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - Git');
    }
}