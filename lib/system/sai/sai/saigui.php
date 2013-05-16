<?php
namespace SYSTEM\SAI;

define('SAI_MOD_POSTFIELD','sai_mod');

class saigui extends \SYSTEM\PAGE\Page {
    
    public function html(){
        $pg = array_merge($_POST,$_GET);
        if(isset($pg[SAI_MOD_POSTFIELD])){
            $mod = new \SYSTEM\SAI\default_module(\str_replace('.', '\\', $pg[SAI_MOD_POSTFIELD]),$pg);
            return $mod->html();}
        
        $sai = new \SYSTEM\SAI\default_page();
        return $sai->html();
    }
}