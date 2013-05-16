<?php
namespace SYSTEM\SAI;

class saigui extends \SYSTEM\PAGE\Page {
    
    public function html(){
        
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo() , \SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
            $login = new \SYSTEM\SAI\login_page();
            return $login->html();}

        $pg = array_merge($_POST,$_GET);
        $sai = new \SYSTEM\SAI\default_page ((isset($pg['sai_mod']) ? $pg['sai_mod'] : null),$pg);
        return $sai->html();
    }
}