<?php
namespace SYSTEM\SAI;

class saimod_sys_cache extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_cache(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT COUNT(*)as "count" FROM system.cache');
        } else {
            $res = $con->query('SELECT COUNT(*) as count FROM system_cache');
        }
        
        $r = $res->next();
        
        $result =   '<h4>System Cache</h4><hr>'.
                    'Entries: '.$r['count'].' showing 100'.
                    '<table class="sai_table table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'CacheID'.'</th>'.'<th>'.'Ident'.'</th>'.'<th>'.'Data'.'</th>'.'</tr>';        
        
        
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT *, encode(data,\'base64\') FROM system.cache ORDER BY "ID" ASC LIMIT 100;');
        } else {
            $res = $con->query('SELECT * FROM system_cache ORDER BY ID ASC LIMIT 100;');
        }                        
                
        while($r = $res->next()){            
            $result .= '<tr class="'.self::tablerow_class($r['CacheID']).'">'.'<td>'.$r['ID'].'</td>'.'<td>'.$r['CacheID'].'</td>'.'<td>'.$r['Ident'].'</td>'.'<td>'.'<img src="data:image/png;base64,'.$r['encode'].'">'.'</td>'.'</tr>';}
            
        $result .= '</table>';                
        
        return $result;
    }
    
    private static function tablerow_class($cacheID){
        if($cacheID == 1){
            return 'info';}
            
        return 'success';                
    }
    
    //public static function html_li_menu(){return '<li><a id="menu_cache" href="#!cache">${sai_menu_cache}</a></li>';}
    public static function html_li_menu(){return '<li><a id="menu_cache" data-toggle="tooltip" data-placement="bottom" title="${sai_menu_cache}" href="#!cache"><span class="glyphicon glyphicon-level-up" aria-hidden="true"></span></a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    //public static function css(){}
    //public static function js(){}
}