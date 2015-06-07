<?php
namespace SYSTEM\SAI;

class saimod_sys_security extends \SYSTEM\SAI\SaiModule {
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_groups(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_groups.tpl'),\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_newright(){
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_newright.tpl'),\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));}
        
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_rights(){
        $rows = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHTS::QQ();                
        while($r = $res->next()){
            $r['right_edit_btn'] =  \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT) ?
                                    '<button type="submit" class="btn btn-sm btn-danger right_delete" onClick="system.load(\'security(delright);id.'.$r['ID'].'\');"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> ${basic_delete}</button>
                                    <button type="submit" class="btn btn-sm btn-default right_edit" right_id="'.$r['ID'].'"><span class="glyphicon glyphicon-pencil" aria-hidden="true"></span> ${basic_edit}</button>' :
                                    '<font color="red">Missing rights.</font>';
            $rows .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_right.tpl'),$r);}        
        $vars['rows'] = $rows;
        $vars['addright_btn'] = \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT) ?
                                '<br><button type="submit" onClick="system.load(\'security(newright)\');" class="btn btn-sm"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span> ${basic_new_right}</button>' :
                                '<font color="red">You are missing the required rights for adding or removing rights.</font>';
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_rights.tpl'),$vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleterightuser($rightid,$userid){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK::Q1(array($rightid,$userid));
        if(!$res || $res['count'] == 0){
            return false;}        
        return \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_RIGHT_DELETE::QI(array($rightid,$userid));}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_addrightuser($rightid,$userid){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK::Q1(array($rightid,$userid));
        if(!$res || $res['count'] != 0){
            return false;}        
        return \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_RIGHT_INSERT::QI(array($rightid,$userid));}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_addright($id,$name,$description){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        return \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHT_INSERT::QI(array($id,$name,$description));}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleterightconfirm($id){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        $vars = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHT_CHECK::Q1(array($id));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_deleteright.tpl'),$vars);}
        
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleteright($id){
        if(!\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        return \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHT_DELETE::QI(array($id));}

    //Todo move to log
    private static function user_actions($userid){
        $count = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_LOG_COUNT::Q1(array($userid));
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_LOG::QQ(array($userid));
        $table='';
        while($r = $res->next()){            
            $r['class_row'] = \SYSTEM\SAI\saimod_sys_log::tablerow_class($r['class']);
            $r['time'] = \SYSTEM\time::time_ago_string(strtotime($r['time']));
            $r['message'] = substr($r['message'],0,255);
            $table .=  \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user_actions_row.tpl'),$r);
        }
        $vars = array();
        $vars['count'] = $count['count'];
        $vars['table'] = $table;
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user_actions.tpl'), $vars);
    }
    
    private static function user_rights($userid){
        $vars['user_rights_table'] = '';        
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_RIGHTS::QQ(array($userid));
        while($r = $res->next()){
            $r['user_id'] = $userid;
            $r['remove_btn'] =  \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT) ? 
                                '<button type="submit" class="btn btn-sm btn-danger deleteuserright" right_id="'.$r['ID'].'" user_id="'.$userid.'"><span class="glyphicon glyphicon-trash" aria-hidden="true"></span> ${basic_delete}</button>' :
                                '<font color="red">Missing Rights</font>';
            $vars['user_rights_table'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user_right.tpl'), $r);}
        
        $vars['user_rights_add'] = '<font color="red">You are missing the required rights for adding or removing the rights of an user.</font>';
        if(\SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            $opts = '';
            $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_RIGHTS::QQ();
            $b = true;
            while($r = $res->next()){            
                $r['selected'] = $b ? 'selected="selected"' : '';
                $b = false;
                $opts .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user_right_add.tpl'), $r);}

            $v = array();
            $v['user_id'] = $userid;
            $v['right_options'] = $opts;
            $vars['user_rights_add'] = \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user_rights_add.tpl'), $v);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));    
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user_rights.tpl'), $vars);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_stats(){
         return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_stats.tpl'),\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_user($username){        
        $vars = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER::Q1(array($username));
        $vars['time_elapsed'] = \SYSTEM\time::time_ago_string($vars['last_active']);
        $vars['user_rights'] = array_key_exists('id', $vars) ? self::user_rights($vars['id']) : '';
        $vars['user_actions'] = array_key_exists('id', $vars) ? self::user_actions($vars['id']) : '';
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user_view.tpl'),$vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_users($search = null){        
        $search = '%'.$search.'%';        
        $count = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USER_COUNT::Q1(array($search),array($search,$search));
        $rows = '';
        $res = \SYSTEM\DBD\SYS_SAIMOD_SECURITY_USERS::QQ(array($search),array($search,$search));                
        while($r = $res->next()){
            $r['class'] = self::tablerow_class($r['last_active']);
            $r['time_elapsed'] = \SYSTEM\time::time_ago_string($r['last_active']);
            $rows .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_user.tpl'),$r);            
        }
        $vars = array();
        $vars['rows'] = $rows;
        $vars['count'] = $count['count'];
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security_users.tpl'),$vars);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\DBD\system_text::TAG_SAI_SECURITY);
        $vars['PICPATH'] = \SYSTEM\WEBPATH(new \SYSTEM\PSAI(), 'modules/saimod_sys_log/img/');
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/tpl/saimod_sys_security.tpl'), $vars);}
    
    private static function tablerow_class($last_active){
        $time = time() - $last_active;
        
        if($time <= 60*60){
            return 'success';}
        if($time <= 60*60*24){
            return 'info';}
        if($time <= 60*60*24*7){
            return 'warning';}
        
        return 'error';
    }
    
    //public static function html_li_menu(){return '<li><a id="menu_security" href="#!security">${sai_menu_security}</a></li>';}
    public static function html_li_menu(){return '<li><a id="menu_security" data-toggle="tooltip" data-placement="bottom" title="${sai_menu_security}" href="#!security"><span class="glyphicon glyphicon-lock" aria-hidden="true"></span></a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY);}
    
    public static function css(){
        return array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/css/saimod_sys_security.css'));}
    public static function js(){
        return array(\SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_security/js/saimod_sys_security.js'));}
}