<?php
namespace SYSTEM\SAI;

class saimod_sys_locale extends \SYSTEM\SAI\SaiModule {    
    
    public static function getLanguages(){
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);        
    }

    public static function html_content(){
        $result =   '<h3>Locale String</h3>'.
                    '<form action="http://www.mojotrollz.eu/danube/system/sai/modules/saimod_sys_locale/edit.php"><table class="table table-hover table-condensed" style="overflow: auto;">'.        
                    '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'Category'.'</th>';
                    
                    foreach (self::getLanguages() as $lang){
                        $result .= '<th>'.$lang.'</th>';
                        $languages[] = $lang;
                    }
                    
                    $result .= '</tr>';        
        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT * FROM system.locale_string ORDER BY "category" ASC;');
        } else {
            $res = $con->query('SELECT * FROM system_locale_string ORDER BY category ASC;');
        }
        
        while($r = $res->next()){
            $result .= '<tr>'.'<td>'.$r["id"].'<br><input type="submit" class="btn-danger" value="delete" delete_ID="'.$r["id"].'">'.'</td>'.'<td>'.$r["category"].'</td>';
                    foreach ($languages as $columns){
                        $result .= '<td>'.$r[$columns].'<br><input type="submit" subject="testsubject" message="testmessage" class="btn" value="edit" lang="'.$columns.'" edit_ID="'.$r["id"].'">'.'</td>';
                    }
                    
            $result .= '</tr>';
            
            }
            
        $result .= '</table></form>';
               
        return $result;
    }        
    
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_sys_locale">DB Text</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function src_css(){}
    public static function src_js(){return \SYSTEM\LOG\JsonResult::toString(
                                    array(  
                                            \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/saimod_sys_locale_submit.js')
                                            ));}
}