<?php
namespace SYSTEM\SAI;

class saimod_sys_todo extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT * FROM system.todo LEFT JOIN system.user ON system.todo.author = system.user.ID ORDER BY state, time DESC;');
        } else {
            $res = $con->query('SELECT * FROM system_todo LEFT JOIN system_user ON system_todo.author = system_user.ID ORDER BY state, time DESC;');
        }
        $result =   '<div id="table-wrapper"><table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'Time ago'.'</th>'.'<th>'.'Time'.'</th>'.'<th>'.'Reporttype'.'</th>'.'<th>'.'Message'.'</th>'.'<th>'.'Author'.'</th>'.'<th>'.'Assigned'.'</th>'.'<th>'.'State'.'</th>'.'<th>'.'Action'.'</th>'.'</tr>';
        while($row = $res->next()){
            $result .=  '<tr class="'.self::trclassbytype($row['type']).'">'.
                        '<td>'.self::time_elapsed_string(strtotime($row['time'])).'</td>'.'<td>'.$row['time'].'</td>'.
                        '<td>'.self::reporttype($row['type']).'</td>'.
                        '<td>'.$row['msg_1'].'</td>'.
                        '<td>'.$row['username'].'</td>'.
                        '<td>'.'I_S and many more'.'</td>'.
                        '<td>'.self::state($row['state']).'</td>'.
                        '<td>'. self::statebtn($row['state']).
                                '<input type="submit" class="btn" value="edit">'.
                                '<input type="submit" class="btn" value="assign">'.
                                '<input type="submit" class="btn-danger" value="delete">'.'</td>'.'</tr>';
        }                    
        $result .= '</table>';
        return $result;
    }   
    
    private static function time_elapsed_string($ptime)
    {
        $etime = time() - $ptime;

        if ($etime < 1)
        {
            return '0 seconds';
        }

        $a = array( 12 * 30 * 24 * 60 * 60  =>  'year',
                    30 * 24 * 60 * 60       =>  'month',
                    24 * 60 * 60            =>  'day',
                    60 * 60                 =>  'hour',
                    60                      =>  'minute',
                    1                       =>  'second'
                    );

        foreach ($a as $secs => $str)
        {
            $d = $etime / $secs;
            if ($d >= 1)
            {
                $r = round($d);
                return $r . ' ' . $str . ($r > 1 ? 's' : '') . ' ago';
            }
        }
    }
    
    private static function state($state){
        if($state == 1){
            return 'Closed';}
        return 'Open';}
    
    private static function statebtn($state){
        if($state == 1){
            return '<input type="submit" class="btn-danger" value="reopen">';}
        return '<input type="submit" class="btn-danger" value="close">';}
    
    private static function reporttype($type){
        switch($type){
            case 0: return 'Feature Request';
            case 1: return 'Error Report';
            case 2: return 'Unasigned Category';            
            default: return 'Note';
        }
    }
    
    private static function trclassbytype($type){
        switch($type){
            case 0: return 'info';
            case 1: return 'error';
            case 2: return 'warning';
            case 3: return 'success';
            default: return '';
        }
    }
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_todo">ToDo</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_todo_flag_js(){}
}