<?php
namespace SYSTEM\SAI;

class saimod_sys_security extends \SYSTEM\SAI\SaiModule {
    
    public static function html_content_groups(){
        return "No Groups available yet.";
    }
    
    public static function html_content_rights(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT * FROM system.rights ORDER BY "ID" ASC;');
        } else {
            $res = $con->query('SELECT * FROM system_rights ORDER BY ID ASC;');
        }       
        $result =   '<input type="submit" class="btn" value="New Right" newright="1"></br></br>'.
                    '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'Name'.'</th>'.'<th>'.'Description'.'</th>'.'<th>'.'Action'.'</th>'.'</tr>';
        while($r = $res->next()){
            $result .= '<tr>'.'<td>'.$r['ID'].'</td>'.'<td>'.$r['name'].'</td>'.'<td>'.$r['description'].'</td>'.'<td>'.'<input type="submit" class="btn-danger" value="delete" delright="'.$r['ID'].'">'.'<input type="submit" class="btn" value="edit" editright="'.$r['ID'].'">'.'</td>'.'</tr>';
        }
        $result .= '</table>';
        return $result;
    }
    
    public static function html_content_users(){
        $con = new \SYSTEM\DB\Connection(\SYSTEM\system::getSystemDBInfo());
        if(\SYSTEM\system::isSystemDbInfoPG()){
            $res = $con->query('SELECT id,username,email,joindate,locale,last_active,account_flag FROM system.user ORDER BY last_active DESC;');
        } else {
            $res = $con->query('SELECT id,username,email,joindate,locale,last_active,account_flag FROM system_user ORDER BY last_active DESC;');
        }
        
        
        $now = microtime(true);
        
        $result =   '<table class="table table-hover table-condensed" style="overflow: auto;">'.                    
                    '<tr>'.'<th>'.'ID'.'</th>'.'<th>'.'Username'.'</th>'.'<th>'.'E-Mail'.'</th>'.'<th>'.'JoinDate'.'</th>'.'<th>'.'Locale'.'</th>'.'<th>'.'Last Active'.'</th>'.'<th>'.'Flag'.'</th>'.'<th style="width: 110px;">'.'Rights'.'</th><th>reset password</th>'.'</tr>';
        while($r = $res->next()){
            if(\SYSTEM\system::isSystemDbInfoPG()){
                $result .= '<tr class="'.self::tablerow_class($r['last_active']).'">'.'<td>'.$r['id'].'</td>'.'<td>'.$r['username'].'</td>'.'<td>'.$r['email'].'</td>'.'<td>'.$r['joindate'].'</td>'.'<td>'.$r['locale'].'</td>'.'<td>'.self::time_elapsed_string(strtotime($r['last_active'])).'</td>'.'<td>'.$r['account_flag'].'</td>'.'<td>'.'<input type="submit" class="btn" value="edit" user="'.$r['id'].'" action="edit"><input type="submit" class="btn-danger" value="delete" user="'.$r['id'].'" action="delete"></td><td><button type="submit" class="btn" value="reset_password" user="'.$r['id'].'" email="'.$r['email'].'">send EMail</button>'.'</td>'.'</tr>';
            } else {
            $result .= '<tr class="'.self::tablerow_class($r['last_active']).'">'.'<td>'.$r['id'].'</td>'.'<td>'.$r['username'].'</td>'.'<td>'.$r['email'].'</td>'.'<td>'.$r['joindate'].'</td>'.'<td>'.$r['locale'].'</td>'.'<td>'.self::time_elapsed_string($r['last_active']).'</td>'.'<td>'.$r['account_flag'].'</td>'.'<td>'.'<input type="submit" class="btn" value="edit" user="'.$r['id'].'" action="edit"><input type="submit" class="btn-danger" value="delete" user="'.$r['id'].'" action="delete"></td><td><button type="submit" class="btn" value="reset_password" user="'.$r['id'].'" email="'.$r['email'].'">send EMail</button>'.'</td>'.'</tr>';}            
        }
        $result .= '</table>';
        return $result;
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security(){
        $vars = array();
        $vars['content_users'] = self::html_content_users();
        $vars['content_rights'] = self::html_content_rights();
        $vars['content_groups'] = self::html_content_groups();
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/security.tpl'), $vars);
    }
    
    private static function tablerow_class($last_active){
        $time = time() - strtotime($last_active);
        
        if($time <= 60*60){
            return 'success';}
        if($time <= 60*60*24){
            return 'info';}
        if($time <= 60*60*24*7){
            return 'warning';}
        
        return 'error';
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
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_security">Security</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_flag_css(){return \SYSTEM\LOG\JsonResult::toString(
                                     array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security.css')));}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_flag_js(){ return \SYSTEM\LOG\JsonResult::toString(
                                     array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/saimod_sys_security.js')));}
}