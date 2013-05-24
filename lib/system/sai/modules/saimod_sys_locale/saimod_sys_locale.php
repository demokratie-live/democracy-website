<?php
namespace SYSTEM\SAI;

class saimod_sys_locale extends \SYSTEM\SAI\SaiModule {    
    public static function html_content(){
        $result =   '<h3>Locale String</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'Category'.'</th>'.'<th>'.'enUS'.'</th>'.'<th>'.'deDE'.'</th>'.'</tr>';        
        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = $con->query('SELECT * FROM system.locale_string ORDER BY "category" ASC;');
        
        while($r = $res->next()){
            $result .= '<tr>'.'<td>'.$r['id'].'</td>'.'<td>'.$r['category'].'</td>'.'<td>'.$r['enUS'].'</td>'.'<td>'.$r['deDE'].'</td>'.'</tr>';}
            
        $result .= '</table>';
               
        return $result;
    }        
    
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_sys_locale">Locale</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function src_css(){}
    public static function src_js(){}
}