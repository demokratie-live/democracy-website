<?php
namespace SYSTEM\LOG;

class TranslatableError extends \SYSTEM\LOG\ERROR {
    public function __construct($string_id, $code = 0, $previous = NULL , $locale = NULL){        
        $message = \SYSTEM\locale::getStrings(array($string_id), $locale);        
        
        if(!isset($message[$string_id])){
            throw new \SYSTEM\LOG\ERROR("Could not retrive Errortranslation: ".$string_id);}
        
        parent::__construct($message[$string_id], $code, $previous);        
    }
}
