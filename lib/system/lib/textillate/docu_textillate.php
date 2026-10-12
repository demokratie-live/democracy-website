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

class docu_textillate implements \SYSTEM\DOCU\docu_package {
    public static function get_config(){
        return array(   'id' => 'textillate',
                        'inpath' => new \SYSTEM\PLIB('textillate/'),
                        'outpath' => new \SYSTEM\PLIB('textillate/docu/'),
                        'inpath_md' => new \SYSTEM\PLIB('textillate/docu/structure.xml'),
                        'outpath_md' => new \SYSTEM\PLIB('textillate/wiki/'),
                        'cachepath' => new \SYSTEM\PLIB('textillate/docu/cache/'),
                        'ignore' => array(),
                        'sourcecode' => true,
                        'parseprivate' => false,
                        'title' => 'LIB - Textillate');
    }
}