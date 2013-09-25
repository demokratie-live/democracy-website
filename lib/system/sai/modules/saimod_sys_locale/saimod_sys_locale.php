<?php
namespace SYSTEM\SAI;

class saimod_sys_locale extends \SYSTEM\SAI\SaiModule {
    
    public static function getLanguages(){
        return \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_LANGS);        
    }

    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale(){
        $result =   '<h3>Locale String</h3>'.
                    '<input type="submit" value="Add" class="btn add_form"><br><table class="table table-hover table-condensed" style="overflow: auto;">'.        
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
            $result .= '<tr>'.'<td>'.$r["id"].'<br><input type="submit" class="btn-danger delete_content" value="delete" id="'.$r["id"].'">'.'<input type="submit" class="btn" value="edit" name="'.$r["id"].'">'.'</td>'.'<td>'.$r["category"].'</td>';
                    foreach ($languages as $columns){
                        //echo "+tututututututut:".$r[$columns]."nochmal tututututututut";
                        $result .= '<td>'.$r[$columns].'</td>';
                        //$_POST[$r["id"]] = $r[$columns];
                    }
                    
            $result .= '</tr>';
            
            }
        $result .= '</table>';
               
        return $result;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_edit($id, $lang, $newtext){
         $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
         $res = null;
        if(\SYSTEM\system::isSystemDbInfoPG()){
            throw new \SYSTEM\LOG\ERROR("action_edit failed");
        } else {
            $res = $con->prepare('newText' ,'UPDATE system_locale_string SET '.$lang.'=? WHERE id=?;', array($newtext, $id));
        }
        return $res->affectedRows() == 0 ? \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no rows affected")) : \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_add($id, $lang, $newtext){
         $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
         $res = null;
        if(\SYSTEM\system::isSystemDbInfoPG()){
            throw new \SYSTEM\LOG\ERROR("action_edit failed");
        } else {
                $res = $con->prepare('addText' ,'INSERT INTO system_locale_string (id, '.$lang.') VALUES (?, ?);', array($id, $newtext));
        }
        return $res->affectedRows() == 0 ? \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("no data added")) : \SYSTEM\LOG\JsonResult::ok();
    }
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_addcontent(){
         $result = "<h3>Add new text</h3><br>";
         $result .= '<input type="text" id="new"><br><select name="lang" size="1">'; 
         foreach (self::getLanguages() as $lang){
                        $result .= '<option>'.$lang.'</option>';
                        $languages[] = $lang;
                    }
         $result .= '</select><br><textarea></textarea>';
         return $result;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_delete($id){
         $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
         $res = null;
        if(\SYSTEM\system::isSystemDbInfoPG()){
            throw new \SYSTEM\LOG\ERROR("action_delete failed");
        } else {
            $res = $con->prepare('deleteText' ,'DELETE FROM system_locale_string WHERE id=?;', array($id));
        }
        return $res->affectedRows() == 0 ? \SYSTEM\LOG\JsonResult::error(new \SYSTEM\LOG\WARNING("could not delete the permitted data")) : \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_action_editmode($entry){
        $result =
        '<h3>'.$entry.'</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.        
                    '<tr>';
                    
                    foreach (self::getLanguages() as $lang){
                        $result .= '<th>'.$lang.'</th>';
                        $languages[] = $lang;
                    }
                    
                    $result .= '</tr>';                
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = null;
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->prepare(   'edit',
                                    'SELECT * FROM system.locale_string WHERE id = $1 ORDER BY "category" ASC;',
                                    array($entry));
        } else {
            $res = $con->prepare(   'edit',
                                    'SELECT * FROM system_locale_string WHERE id = ? ORDER BY "category" ASC;',
                                    array($entry));
        }
            
        while($r = $res->next()){
            $result .= "<tr>";
            foreach ($languages as $columns){
                        //echo "+tututututututut:".$r[$columns]."nochmal tututututututut";
                        $result .= '<td><input type="textarea" value="'.$r[$columns].'" id="edit_field_'.$r["id"].'_'.$columns.'"><br><input type="submit" class="btn edit_content" value="edit" lang="'.$columns.'" name="'.$r["id"].'"><br></td>';
                        //$_POST[$r["id"]] = $r[$columns];
                    }
            $result .= "</tr></table>";
        }
        $result .= '<br><input type="submit" class="btn localeMain" value="back">';
        return $result; 
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_locale">DB Text</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_locale_flag_js(){
        return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_locale/saimod_sys_locale_submit.js')));}
}