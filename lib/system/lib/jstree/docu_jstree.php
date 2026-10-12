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

class docu_jstree implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'jstree',
                        'inpath' => new \SYSTEM\PLIB('jstree/'),
                        'outpath' => new \SYSTEM\PLIB('jstree/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('jstree/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('jstree/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('jstree/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - JSTree');
    }
}