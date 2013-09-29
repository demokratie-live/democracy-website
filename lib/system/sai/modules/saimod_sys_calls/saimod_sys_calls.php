<?php
namespace SYSTEM\SAI;

class saimod_sys_calls extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_calls(){
        $last_group = -1;
        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT * FROM system.api ORDER BY "group", "ID" ASC;');
        } else {
            $res = $con->query('SELECT * FROM system_api ORDER BY `group`, `ID` ASC;');
        }
       
        $result = "";
        while($r = $res->next()){
            if($last_group != $r['group']){
                $last_group = $r['group'];
                if($last_group != -1){
                    $result .= '</table>';}
                $result .=  '<h3>Api Table for Group '.$r["group"].'</h3>'.
                            '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                            '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'Group'.'</th>'.'<th>'.'Type'.'</th>'.'<th>'.'ParentID'.'</th>'.'<th>'.'ParentValue'.'</th>'.'<th>'.'Name'.'</th>'.'<th>'.'Verify'.'</th>'.'</tr>';
            }
            $result .= '<tr class="'.self::tablerow_class($r['type']).'">'.'<td>'.$r['ID'].'</td>'.'<td>'.$r['group'].'</td>'.'<td>'.$r['type'].'</td>'.'<td>'.$r['parentID'].'</td>'.'<td>'.$r['parentValue'].'</td>'.'<td>'.$r['name'].'</td>'.'<td>'.$r['verify'].'</td>'.'</tr>';
        }
        $result .= '</table>';                                           
        return $result;
    }
    
    private static function tablerow_class($flag){
        switch($flag){
            case 0: return 'info';
            case 1: return '';
            default: return 'success';
        }        
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_calls">API Calls</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_calls_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_calls_flag_js(){}
}