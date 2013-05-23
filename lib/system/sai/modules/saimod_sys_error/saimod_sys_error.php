<?php

namespace SYSTEM\SAI;

class saimod_sys_error extends \SYSTEM\SAI\SaiModule {    
    public static function html_content(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = $con->query('SELECT * FROM system.sys_log ORDER BY time DESC LIMIT 100;');
        
        
        $now = microtime(true);
        
        $result =   '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'time ago in sec'.'</th>'.'<th>'.'time'.'</th>'.'<th>'.'class'.'</th>'.'<th>'.'message'.'</th>'.'<th>'.'code'.'</th>'.'<th>'.'file'.'</th>'.'<th>'.'line'.'</th>'.'<th>'.'ip'.'</th>'.'<th>'.'querytime'.'</tr>';
        while($r = $res->next()){
            $result .= '<tr class="'.self::tablerow_class($r['class']).'">'.'<td>'.(int)($now - strtotime($r['time'])).'</td>'.'<td>'.$r['time'].'</td>'.'<td>'.$r['class'].'</td>'.'<td>'.$r['message'].'</td>'.'<td>'.$r['code'].'</td>'.'<td>'.$r['file'].'</td>'.'<td>'.$r['line'].'</td>'.'<td>'.$r['ip'].'</td>'.'<td>'.$r['querytime'].'</tr>';
        }
        $result .= '</table>';
        return $result;
        
    }
    
    private static function tablerow_class($class){
        switch($class){
            case 'SYSTEM\LOG\INFO': case 'INFO':
                return 'success';
            case 'SYSTEM\LOG\DEPRECATED': case 'DEPRECATED':
                return 'info';
            case 'SYSTEM\LOG\ERROR': case 'ERROR':
                return 'error';
            case 'SYSTEM\LOG\WARNING': case 'WARNING':
                return 'warning';
            default:
                return '';
        }        
    }
    
    public static function html_li_menu(){return '<li><a href="#" id=".SYSTEM.SAI.saimod_sys_error">SYS Error</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function src_css(){}
    public static function src_js(){}
}