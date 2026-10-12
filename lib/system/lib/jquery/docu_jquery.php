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

class docu_jquery implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'jquery',
                        'inpath' => new \SYSTEM\PLIB('jquery/'),
                        'outpath' => new \SYSTEM\PLIB('jquery/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('jquery/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('jquery/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('jquery/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - JQuery');
    }
}