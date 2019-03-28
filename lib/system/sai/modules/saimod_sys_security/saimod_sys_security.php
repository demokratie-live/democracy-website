<?php
/**
 * System - PHP Framework
 *
 * PHP Version 5.6
 *
 * @copyright   2016 Ulf Gebhardt (http://www.webcraft-media.de)
 * @license     http://www.opensource.org/licenses/mit-license.php MIT
 * @link        https://github.com/webcraftmedia/system
 * @package     SYSTEM\SAI
 */
namespace SYSTEM\SAI;

/**
 * saimod_sys_security Class provided by System as saimod to manage the system_user, system_rights, system_user_to_rights table
 */
class saimod_sys_security extends \SYSTEM\SAI\sai_module {
    /**
     * Generate HTML for the Security Groups(Menu)
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_groups(){
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_groups.tpl'))->SERVERPATH(),\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));}
    
    /**
     * Generate HTML for the new right dialog
     * 
     * @param int $id ID of the right
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_newright(){
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_newright.tpl'))->SERVERPATH(),\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));}
    
    /**
     * Generate HTML for the list of rights
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_rights(){
        $rows = '';
        $res = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_RIGHTS::QQ();                
        while($r = $res->next()){
            $r['right_edit_btn'] =  \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT) ?
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/right_edit.tpl'))->SERVERPATH(),array('id' => $r['ID'])) :
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/missing_edit_right.tpl'))->SERVERPATH());
            $rows .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_right.tpl'))->SERVERPATH(),$r);}        
        $vars['rows'] = $rows;
        $vars['addright_btn'] = \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT) ?
                                \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/right_add.tpl'))->SERVERPATH()):
                                \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/missing_remove_right.tpl'))->SERVERPATH());
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_rights.tpl'))->SERVERPATH(),$vars);
    }
    
    /**
     * Delete a Right of a User
     * 
     * @param int $rightid ID of the Right
     * @param int $userid ID of the User
     * @return bool Returns true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleterightuser($rightid,$userid){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        $res = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK::Q1(array($rightid,$userid));
        if(!$res || $res['count'] == 0){
            return false;}        
        return \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_RIGHT_DELETE::QI(array($rightid,$userid));}
    
    /**
     * Add a Right to a User
     * 
     * @param int $rightid ID of the Right
     * @param int $userid ID of the User
     * @return bool Returns true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_addrightuser($rightid,$userid){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        $res = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_RIGHT_CHECK::Q1(array($rightid,$userid));
        if(!$res || $res['count'] != 0){
            return false;}        
        return \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_RIGHT_INSERT::QI(array($rightid,$userid));}
    
    /**
     * Add a Right
     * 
     * @param int $id ID of the Right
     * @param string $name Name of the Right
     * @param string $description Description of the Right
     * @return bool Returns true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_addright($id,$name,$description){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        return \SYSTEM\SQL\SYS_SAIMOD_SECURITY_RIGHT_INSERT::QI(array($id,$name,$description));}
        
    /**
     * Generate HTML for the delete right confirm dialog
     * 
     * @param int $id ID of the right
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleterightconfirm($id){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        $vars = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_RIGHT_CHECK::Q1(array($id));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_deleteright.tpl'))->SERVERPATH(),$vars);}
    
    /**
     * Delete a Right
     * 
     * @param int $id ID of the Right
     * @return bool Returns true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleteright($id){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return false;}
        return \SYSTEM\SQL\SYS_SAIMOD_SECURITY_RIGHT_DELETE::QI(array($id));}

    /**
     * Internal Function to generate HTML for the actions of a User
     * 
     * @param int $userid Id of the User
     * @return string Returns HTML
     */
    private static function user_actions($userid){
        $count = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_LOG_COUNT::Q1(array($userid));
        $res = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_LOG::QQ(array($userid));
        $table='';
        while($r = $res->next()){            
            $r['class_row'] = \SYSTEM\SAI\saimod_sys_log::tablerow_class($r['class']);
            $r['time'] = \SYSTEM\time::time_ago_string(strtotime($r['time']));
            $r['message'] = substr($r['message'],0,255);
            $table .=  \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user_actions_row.tpl'))->SERVERPATH(),$r);
        }
        $vars = array();
        $vars['count'] = $count['count'];
        $vars['table'] = $table;
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user_actions.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Internal Function to generate HTML for the rights of a User
     * 
     * @param int $userid Id of the User
     * @return string Returns HTML
     */
    private static function user_rights($userid){
        $vars['user_rights_table'] = '';        
        $res = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_RIGHTS::QQ(array($userid));
        while($r = $res->next()){
            $r['user_id'] = $userid;
            $r['remove_btn'] =  \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT) ? 
                                \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/right_remove.tpl'))->SERVERPATH(),array('id' => $r['ID'], 'userid' => $userid)) :
                                \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/missing_edit_right.tpl'))->SERVERPATH());
            $vars['user_rights_table'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user_right.tpl'))->SERVERPATH(), $r);}
        
        $vars['user_rights_add'] = \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/missing_add_right.tpl'))->SERVERPATH());
        if(\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            $opts = '';
            $res = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_RIGHTS::QQ();
            $b = true;
            while($r = $res->next()){            
                $r['selected'] = $b ? 'selected="selected"' : '';
                $b = false;
                $opts .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user_right_add.tpl'))->SERVERPATH(), $r);}

            $v = array();
            $v['user_id'] = $userid;
            $v['right_options'] = $opts;
            $vars['user_rights_add'] = \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user_rights_add.tpl'))->SERVERPATH(), $v);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));    
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user_rights.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Generate HTML for the Analytics
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_stats(){
         return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_stats.tpl'))->SERVERPATH(),\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));}
    
    /**
     * Generate HTML for a User
     * 
     * @param string $username Username
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_user($username){        
        $vars = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER::Q1(array($username));
        $vars['email_confirmed'] = $vars['email_confirmed'] == 1 ? 'Yes' : 'No';
        $vars['time_elapsed'] = \SYSTEM\time::time_ago_string(strtotime($vars['last_active']));
        $vars['user_rights'] = array_key_exists('id', $vars) ? self::user_rights($vars['id']) : '';
        $vars['user_actions'] = array_key_exists('id', $vars) ? self::user_actions($vars['id']) : '';
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user_view.tpl'))->SERVERPATH(),$vars);
    }
    
    /**
     * Generate HTML for the Users List
     * 
     * @param string $filter Filter by right
     * @param string $search Filter by user
     * @param int $page Page of the List (displays only 100)
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_users($filter = "all",$search="%",$page=0){
        $count = $filter == "all" ? \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_COUNT::Q1(array($search,$search))['count'] :
                                    \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USER_COUNT_FILTER::Q1(array($search,$search,$filter))['count'];
        $vars = array();
        $vars['filter'] = $filter;
        $vars['search'] = $search;
        $vars['page'] = $page;
        $vars['table'] = '';
        $res = $filter == "all" ? \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USERS::QQ(array($search,$search)) :
                                  \SYSTEM\SQL\SYS_SAIMOD_SECURITY_USERS_FILTER::QQ(array($search,$search,$filter));
        $count_filtered = 0;
        $res->seek(100*$page);
        while(($r = $res->next()) && ($count_filtered < 100)){
            $r['email_confirmed'] = $r['email_confirmed'] == 1 ? 'Yes' : 'No';
            $r['class'] = self::tablerow_class($r['last_active']);
            $r['time_elapsed'] = \SYSTEM\time::time_ago_string($r['last_active']);
            $vars['table'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_user.tpl'))->SERVERPATH(),$r);
            $count_filtered++;
        }
        $vars['pagination'] = '';
        $vars['page_last'] = ceil($count/100)-1;
        for($i=0;$i < ceil($count/100);$i++){
            $data = array('page' => $i,'search' => $search, 'filter' => $filter, 'active' => ($i == $page) ? 'active' : '');
            $vars['pagination'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_pagination.tpl'))->SERVERPATH(), $data);
        }
        $vars['count'] = $count_filtered.'/'.$count;
        $vars['right_filter'] = '';
        $res = \SYSTEM\SQL\SYS_SAIMOD_SECURITY_RIGHTS::QQ();
        while($row = $res->next()){
            $data = array('active' => ($filter == $row['ID'] ? 'active' : ''), 'filter' => $row['ID'], 'search' => $search, 'name' => $row['name']);
            $vars['right_filter'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_right_filter.tpl'))->SERVERPATH(),$data);}
        $vars['active'] = ($filter == 'all' ? 'active' : '');
        $vars = array_merge($vars,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security_users.tpl'))->SERVERPATH(),$vars);
    }
    
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_SECURITY);
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/saimod_sys_security.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Rename an Account
     * 
     * @param string $username Username of the Account
     * @param string $new_username New Username
     * @return json Returns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_renameaccount($username,$new_username){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return \SYSTEM\LOG\JsonResult::fail();}
        if(!\SYSTEM\SECURITY\security::available($new_username)){
            throw new \SYSTEM\LOG\ERROR("Username not available");}
        return \SYSTEM\SQL\SYS_SAIMOD_SECURITY_RENAME_USER::QI(array($new_username,$username)) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();}
    
    /**
     * Delete an Account
     * 
     * @param int $id Id of the Account
     * @return json Returns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_deleteaccount($id){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return \SYSTEM\LOG\JsonResult::fail();}
        \SYSTEM\SQL\SYS_SAIMOD_SECURITY_DELETE_USER_RIGHTS::QI(array($id));
        \SYSTEM\SQL\SYS_SAIMOD_SECURITY_DELETE_USER::QI(array($id));
        return \SYSTEM\LOG\JsonResult::ok();}
    
    /**
     * Request EMail confirmation for the given Account
     * 
     * @param int $user Username of the Account
     * @return json Returns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_confirmemail($user){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return \SYSTEM\LOG\JsonResult::fail();}
        return \SYSTEM\SECURITY\security::confirm_email_admin($user);
    }
    
    /**
     * Change the Password for the given Account
     * 
     * @param int $user Username of the Account
     * @param string $new_password_sha1 New Password's SHA1-Hash
     * @return json Returns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_changepassword($user,$new_password_sha1){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return \SYSTEM\LOG\JsonResult::fail();}
        $row = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($user,$user));
        if(!$row){
            throw new \SYSTEM\LOG\ERROR("No such User.");}
        return \SYSTEM\SQL\SYS_SECURITY_UPDATE_PW::QI(array($new_password_sha1, $row['id'])) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
    
    /**
     * Change the EMail for the given Account
     * 
     * Does not send an EMail for authorisation!
     * Does not send an EMail for confirmation!
     * 
     * @param int $user Username of the Account
     * @param string $new_email New EMail
     * @return json Returns json with status true or false
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_security_action_changeemail($user,$new_email){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY_RIGHTS_EDIT)){
            return \SYSTEM\LOG\JsonResult::fail();}
        $row = \SYSTEM\SQL\SYS_SECURITY_USER_INFO::Q1(array($user,$user));
        if(!$row){
            throw new \SYSTEM\LOG\ERROR("No such User.");}
        return \SYSTEM\SQL\SYS_SECURITY_CHANGE_EMAIL::QI(array($new_email,$row['id'])) ? \SYSTEM\LOG\JsonResult::ok() : \SYSTEM\LOG\JsonResult::fail();
    }
        
    /**
     * Internal Function to generate the Tablerow class(color) string according
     * to last time active
     * 
     * @param int $last_active Unixtimestamp
     * @return string Returns table row class string
     */
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
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function menu(){
        return new sai_module_menu( 1,
                                    sai_module_menu::POISITION_LEFT,
                                    sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_security/tpl/menu.tpl'))->SERVERPATH()));}
    
    /**
     * Returns if the Saimod is public(access for everyone)
     * 
     * @return boolean Returns if the Saimod is public(true) or not(false)
     */
    public static function right_public(){return false;}
    
    /**
     * Returns if the requesting user has the required rights to access the Saimod
     * 
     * @return boolean Returns true if the user can access
     */
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_SECURITY);}
    
    /**
     * Get all css System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods css
     */
    public static function css(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_security/css/saimod_sys_security.css'));}
    
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_security/js/saimod_sys_security.js'));}
}