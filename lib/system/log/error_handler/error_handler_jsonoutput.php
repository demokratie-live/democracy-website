<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\LOG
 */
namespace SYSTEM\LOG;

/**
 * Error handler Class provided by System to return the Error as JSON.
 * Register this Handler as last one
 */
class error_handler_jsonoutput extends \SYSTEM\LOG\error_handler {
    /**
     * Call function to handle exceptions
     *
     * @param \Exception $E Thrown Execption to be handled
     * @param bool $thrown Was the Exception thrown?
     * @return bool Returns true or false.
     */
    public static function CALL(\Exception $E, $thrown){        
        if($thrown){     
            try{
                echo \SYSTEM\LOG\JsonResult::error($E);             
            } catch (\Exception $E){} //Error -> Ignore
            return true;
        }
    }
}