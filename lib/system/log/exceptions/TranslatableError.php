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
 * Translateable Error Class provided by System for serving Multilanguage Errors from Database.
 */
class TranslatableError extends \SYSTEM\LOG\ERROR {
    /**
     * Construct the Error and logs it. Requests the Error String from db based on a given string_id.
     * Result can varry upon callers locale settings.
     *
     * @param string $string_id String Id from Text Database
     * @param int $code Error Code
     * @param \Exception $previous Previous Error leading to this one.
     * @param string $locale Language of the Error to be thrown. Can be Null to use user's settings
     */
    public function __construct($string_id, $code = 0, $previous = NULL , $locale = NULL){        
        $message = \SYSTEM\PAGE\text::get($string_id, $locale);        
        if(!$message){
            throw new \SYSTEM\LOG\ERROR("Could not retrive Errortranslation: ".$string_id);}
        parent::__construct($message, $code, $previous);        
    }
}