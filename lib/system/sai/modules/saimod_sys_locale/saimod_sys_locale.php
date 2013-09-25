<?php
namespace SYSTEM\SAI;

class saimod_sys_locale extends \SYSTEM\SAI\SaiModule {
    
    const INPUT_VAR = 'sai_input';
    
    public static function getLanguages(){
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);        
    }

    public static function html_content(){
        $entries = array_merge($_POST,$_GET);
        if(isset($entries[self::INPUT_VAR])){
            return self::html_content_entry_edit($entries[self::INPUT_VAR]);
        }
        return self::html_content_table();        
    }   
    
    public static function html_content_table(){
        $result =   '<h3>Locale String</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;" >'.        
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
                        //echo "+tututututututut:".$r[$columns]."nochmal tututututututut";
                        $result .= '<td>'.$r[$columns].'<br><input type="submit" class="btn" value="edit" lang="'.$columns.'" name="'.$r["id"].'" onclick="javascript:init__SYSTEM_SAI_saimod_sys_locale();">'.'</td>';
                        //$_POST[$r["id"]] = $r[$columns];
                    }
                    
            $result .= '</tr>';
            
            }
        $result .= '</table>';
               
        return $result;
    }
    public static function html_content_entry_edit($entry){
        //$wysiwyg_root = 'http://mojotrollz.eu/web/system/sai/modules/saimod_sys_locale/wysiwyg'; 
        //include 'http://mojotrollz.eu/web/system/sai/modules/saimod_sys_locale/wysiwyg/php/init.php';
        
        $result =
        
        '<h3>'.$entry.'</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.        
                    '<tr><form method="post">';
        
                    foreach (self::getLanguages() as $lang){
                        $result .= '<th>'.$lang.'</th>';
                        $languages[] = $lang;
                    }
                    
                    $result .= '</tr>';        
        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = $con->prepare('edit', 'SELECT * FROM system_locale_string WHERE id=? ORDER BY "category" ASC;', array($entry));
        
        $editor_id = 0;
        while($r = $res->next()){
            $result .= "<tr>";
            foreach ($languages as $columns){
                        //echo "+tututututututut:".$r[$columns]."nochmal tututututututut";
                        //echo wysiwyg($editor_id, $entry, $r[$columns]);
                        $editor_id++;
                        $result .= '<td><textarea 
                            onclick="tinymce.init({
                            mode : "textareas",
                            theme : "simple"
                            });">'.$r[$columns].'</textarea><br><input type="submit" class="btn" value="edit" lang="'.$columns.'" name="'.$r["id"].'" onclick="javascript:init__SYSTEM_SAI_saimod_sys_locale();"><br></td>';
                        //$_POST[$r["id"]] = $r[$columns];
                    }
            $result .= "</tr>";
        }
        $result .= '</form>';

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