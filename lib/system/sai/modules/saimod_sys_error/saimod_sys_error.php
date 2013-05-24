<?php

namespace SYSTEM\SAI;


class saimod_sys_error extends \SYSTEM\SAI\SaiModule {    
    public static function truncate_sys_log(){
        if(\SYSTEM\SECURITY\Security::check(\SYSTEM\system::getSystemDBInfo(), \SYSTEM\SECURITY\RIGHTS::SYS_SAI)){
            $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
            $res = $con->query('TRUNCATE system.sys_log;');

            return true;
        }else{
            return false;
        }
    }
    
    
    public static function html_content(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        $res = $con->query('SELECT * FROM system.sys_log ORDER BY time DESC LIMIT 100;');
        
        
        $now = microtime(true);
        
        $result = '<div id="truncate_modal" class="modal hide fade">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                      <h3>Truncate table system.sys_log</h3>
                    </div>
                    <div class="modal-body">
                      <p>This action will delete all error messages from databse. <br />
                         Are you sure?</p>
                    </div>
                    <div class="modal-footer">
                      <a href="#" class="btn" data-dismiss="modal">Cancel</a>
                      <a href="#" class="btn btn-danger" id="truncate_table">Yes, delete all!</a>
                    </div>
                  </div>            
                  <button href="#refresh_error_table" class="btn" style="height: 32px; font-size: 13px;">Refresh</button>
                  <button data-toggle="modal" href="#truncate_modal" class="btn" style="height: 32px; font-size: 13px; float: right;">Truncate Table</button>
                  <img id="loader" src="dasense/page/default_developer/img/ajax-loader.gif" style="margin-left: 10px;">
                  <br /><br />';
        
        $result .=   '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
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
    public static function src_js(){return \SYSTEM\LOG\JsonResult::toString(
                                    array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_error/sai_sys_error.js')));}
}