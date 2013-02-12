<?php
namespace SYSTEM\SAI;

require_once '../autoload.inc.php'; //system
require_once '../../dbd/autoload.inc.php'; //dbd
require_once 'sai/autoload.inc.php'; //sai context

class saigui extends \SYSTEM\PAGE\Page {
    
    private $sys_dbinfo = NULL;

    public function __construct($sys_dbinfo = NULL){
        $this->sys_dbinfo = $sys_dbinfo;}

    public function html(){
        
        /*if(! \SYSTEM\SECURITY\Security::check($this->sys_dbinfo ? $this->sys_dbinfo : new \DBD\system() , \SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
            throw new \Exception("YOU SHALL NOT PASS!");
        }*/

        $call = array(  array(\DBD\PAGETable::FIELD_ID=>0,  \DBD\PAGETable::FIELD_FLAG=>0,  \DBD\PAGETable::FIELD_PARENTID=>-1,  \DBD\PAGETable::FIELD_PARENTVALUE=>'',    \DBD\PAGETable::FIELD_NAME=>'action',    \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'),
                        array(\DBD\PAGETable::FIELD_ID=>1,  \DBD\PAGETable::FIELD_FLAG=>1,  \DBD\PAGETable::FIELD_PARENTID=>0,  \DBD\PAGETable::FIELD_PARENTVALUE=>'module',    \DBD\PAGETable::FIELD_NAME=>'module',    \DBD\PAGETable::FIELD_ALLOWEDVALUES=>'ALL'));
        $sai = new \SYSTEM\PAGE\PageApi( $call, new \SYSTEM\verifyclass(), new \SYSTEM\SAI\SaiApi());

        try{
            return $sai->CALL(array_merge($_POST,$_GET))->html();
        } catch(Exception $e) {
            return $e;
        }
    }
}