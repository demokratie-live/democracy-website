<?php
namespace SYSTEM\SAI;

class saimod_sys_mod extends \SYSTEM\SAI\SaiModule {    
    public static function html_content(){
        $result =   '<h3>Sys Mods</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'Classname'.'</th>'.'<th>'.'Public'.'</th>'.'<th>'.'You can Access?'.'</th>'.'</tr>';
        
        $sys_mods = \SYSTEM\SAI\sai::getInstance()->getSysModules();
        foreach($sys_mods as $mod){            
            $result .= '<tr>'.'<td>'.$mod.'</td>'.'<td>'.(\call_user_func(array($mod, 'right_public')) ? 'true' : 'false').'</td>'.'<td>'.(\call_user_func(array($mod, 'right_right')) ? 'true' : 'false').'</td>'.'</tr>';}
        $result .= '</table>';
            
        $result .=  '<h3>Project Mods</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'Classname'.'</th>'.'<th>'.'Public'.'</th>'.'<th>'.'You can Access?'.'</th>'.'</tr>';
        
        $mods = \SYSTEM\SAI\sai::getInstance()->getModules();
        foreach($mods as $mod){            
            $result .= '<tr>'.'<td>'.$mod.'</td>'.'<td>'.(\call_user_func(array($mod, 'right_public')) ? 'true' : 'false').'</td>'.'<td>'.(\call_user_func(array($mod, 'right_right')) ? 'true' : 'false').'</td>'.'</tr>';}
        $result .= '</table>';
        
        return $result;        
    }
    
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_sys_mod">SAI Mods</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function src_css(){}
    public static function src_js(){}
}