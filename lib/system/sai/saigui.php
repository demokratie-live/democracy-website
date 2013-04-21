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
        
        if(!\SYSTEM\SECURITY\Security::check($this->sys_dbinfo ? $this->sys_dbinfo : new \DBD\system() , \SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
            $login = new \SYSTEM\SAI\login_page();
            return $login->html();
        }

        $pg = array_merge($_POST,$_GET);
        $sai = new \SYSTEM\SAI\default_page ($pg['module'],$pg);
        return $sai->html();
    }
}