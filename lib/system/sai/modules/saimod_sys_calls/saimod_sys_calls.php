<?php
namespace SYSTEM\SAI;

class saimod_sys_calls extends \SYSTEM\SAI\SaiModule {    
    public static function html_content(){
        $result =   '<h3>Api Calls</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'flag'.'</th>'.'<th>'.'parentID'.'</th>'.'<th>'.'parentValue'.'</th>'.'<th>'.'name'.'</th>'.'<th>'.'allowedValues'.'</th>'.'</tr>';        
        
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT * FROM system.api_calls ORDER BY "ID" ASC;');
        } else {
            $res = $con->query('SELECT * FROM system_api_calls ORDER BY ID ASC;');
        }
        
        while($r = $res->next()){
            $result .= '<tr class="'.self::tablerow_class($r['flag']).'">'.'<td>'.$r['ID'].'</td>'.'<td>'.$r['flag'].'</td>'.'<td>'.$r['parentID'].'</td>'.'<td>'.$r['parentValue'].'</td>'.'<td>'.$r['name'].'</td>'.'<td>'.$r['allowedValues'].'</td>'.'</tr>';}
            
        $result .= '</table>';
        
        $result .=  '<h3>Page Calls</h3>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'flag'.'</th>'.'<th>'.'parentID'.'</th>'.'<th>'.'parentValue'.'</th>'.'<th>'.'name'.'</th>'.'<th>'.'allowedValues'.'</th>'.'</tr>';        
        
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT * FROM system.page_calls ORDER BY "ID" ASC;');
        } else {
            $res = $con->query('SELECT * FROM system_page_calls ORDER BY ID ASC;');
        }
        
        while($r = $res->next()){
            $result .= '<tr class="'.self::tablerow_class($r['flag']).'">'.'<td>'.$r['ID'].'</td>'.'<td>'.$r['flag'].'</td>'.'<td>'.$r['parentID'].'</td>'.'<td>'.$r['parentValue'].'</td>'.'<td>'.$r['name'].'</td>'.'<td>'.$r['allowedValues'].'</td>'.'</tr>';}
            
        $result .= '</table>';
        
        return $result;
    }
    
    private static function tablerow_class($flag){
        if($flag == 1){
            return 'info';}
            
        return 'success';                
    }
    
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_sys_calls">Calls</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function src_css(){}
    public static function src_js(){}
}