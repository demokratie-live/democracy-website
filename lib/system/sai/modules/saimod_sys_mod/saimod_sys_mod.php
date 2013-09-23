<?php
namespace SYSTEM\SAI;

class saimod_sys_mod extends \SYSTEM\SAI\SaiModule {
    public static function html_content_sys(){
        $result =   '<h3>Sys Mods</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'Classname'.'</th>'.'<th>'.'Public'.'</th>'.'<th>'.'You can Access?'.'</th>'.'</tr>';
        
        $sys_mods = \SYSTEM\SAI\sai::getSysModules();
        foreach($sys_mods as $mod){            
            $result .= '<tr>'.'<td>'.$mod.'</td>'.'<td>'.(\call_user_func(array($mod, 'right_public')) ? 'true' : 'false').'</td>'.'<td>'.(\call_user_func(array($mod, 'right_right')) ? 'true' : 'false').'</td>'.'</tr>';}
        $result .= '</table>';
        
        return $result;
    }
    
    public static function html_content_project(){
        $result =  '<h3>Project Mods</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'Classname'.'</th>'.'<th>'.'Public'.'</th>'.'<th>'.'You can Access?'.'</th>'.'</tr>';
        
        $mods = \SYSTEM\SAI\sai::getModules();
        foreach($mods as $mod){            
            $result .= '<tr>'.'<td>'.$mod.'</td>'.'<td>'.(\call_user_func(array($mod, 'right_public')) ? 'true' : 'false').'</td>'.'<td>'.(\call_user_func(array($mod, 'right_right')) ? 'true' : 'false').'</td>'.'</tr>';}
        $result .= '</table>';
        
        return $result;
    }
    public static function sai_mod__SYSTEM_SAI_saimod_sys_mod(){
        $vars=array();
        $vars['content_sys'] = self::html_content_sys();
        $vars['content_project'] = self::html_content_project();
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/mods.tpl'), $vars);
                
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_mod">SAI Mods</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_mod_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_mod_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_mod/saimod_sys_mod.js')));}
}