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

class docu_tablesorter implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'tablesorter',
                        'inpath' => new \SYSTEM\PLIB('tablesorter/'),
                        'outpath' => new \SYSTEM\PLIB('tablesorter/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('tablesorter/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('tablesorter/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('tablesorter/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - Tablesorter');
    }
}