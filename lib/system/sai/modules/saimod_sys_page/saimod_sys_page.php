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
 * saimod_sys_page Class provided by System as saimod to manage the system_page table
 */
class saimod_sys_page extends \SYSTEM\SAI\SaiModule {
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_page(){
        $vars = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_PAGE);
        $vars['tabopts'] = '';
        
        $res = \SYSTEM\SQL\SYS_SAIMOD_PAGE_GROUPS::QQ();
        while($r = $res->next()){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_page/tpl/tabopt.tpl'))->SERVERPATH(), array( 'tab_id' => $r['group']));}
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_page/tpl/saimod_sys_page.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate the HTML for the List of Page Entries
     * 
     * @param int $group Group Filter of the List
     * @return string Returns HTML
     */
    public static function sai_mod__system_sai_saimod_sys_page_action_list($group=null){
        $res = \SYSTEM\SQL\SYS_SAIMOD_PAGE_GET::QQ();
        $tab = \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_PAGE);
        $tab['content'] = '';
        while($r = $res->next()){            
            if($group != null && $r['group'] != $group){
                continue;}
            $tab['tab_id'] = $r['group'];
            $r['tr_class'] = self::tablerow_class($r['type']);
            $r['type'] = self::type_names($r['type']);
            $tab['content'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_page/tpl/list_entry.tpl'))->SERVERPATH(), $r);
        }      
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_page/tpl/saimod_sys_page_list.tpl'))->SERVERPATH(), $tab);
    }
    
    /**
     * Generate the HTML for the Delete Dialog of a Page Entry
     * 
     * @param int $ID ID of the Entry
     * @param int $group Group id of the Entry
     * @return string Returns HTML
     */
    public static function sai_mod__system_sai_saimod_sys_page_action_deletedialog($ID,$group){
        $res = \SYSTEM\SQL\SYS_SAIMOD_PAGE_SINGLE_SELECT::Q1(array($ID,$group));
        $res = array_merge($res,\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_PAGE));
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_page/tpl/delete_dialog.tpl'))->SERVERPATH(), $res);
    }
    
    /**
     * Generate the HTML for the New Dialog for a Page Entry
     * 
     * @return string Returns HTML
     */
    public static function sai_mod__system_sai_saimod_sys_page_action_newdialog(){
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_page/tpl/new_dialog.tpl'))->SERVERPATH(),\SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_PAGE));}
    
    /**
     * Add a new Page Entry
     * 
     * @param int $ID ID of the Entry
     * @param int $group Group id of the Entry
     * @param int $type Type of the new Entry
     * @param int $parentID Parent id of the new Entry
     * @param string $parentValue Parent Valze of the new Entry
     * @param string $name Name of the new Entry
     * @param string $verify Verifiername of the new Entry
     * @return JSON Returns json with status true of error
     */
    public static function sai_mod__system_sai_saimod_sys_page_action_addcall($ID,$group,$type,$parentID,$parentValue,$name,$verify){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        if($parentValue == ''){ $parentValue = NULL;}
        if($verify      == ''){ $verify = NULL;}
        \SYSTEM\SQL\SYS_SAIMOD_PAGE_ADD::QI(array($ID,$group,$type,$parentID,$parentValue,$name,$verify));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Delete a Page Entry
     * 
     * @param int $ID ID of the Entry
     * @param int $group Group id of the Entry
     * @return JSON Returns json with status true of error
     */
    public static function sai_mod__system_sai_saimod_sys_page_action_deletecall($ID,$group){
        if(!\SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API)){
            throw new \SYSTEM\LOG\ERROR("You dont have edit Rights - Cant proceeed");}
        \SYSTEM\SQL\SYS_SAIMOD_PAGE_DEL::QI(array($ID,$group));
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Internal Function to decode Types to Strings
     * 
     * @param int $type Type of the Page Entry
     * @return string Returns string representing the type
     */
    private static function type_names($type){
        switch($type){
            case 0: return 'STATIC';
            case 1: return 'DYNAMIC';
            default: return 'Problem unknown type';
        }   
    }
    
    /**
     * Internal Function to generate page row classes
     * 
     * @param int $flag Flag of the Page Entry
     * @return string Returns string representing the flag
     */
    private static function tablerow_class($flag){
        switch($flag){
            case 0: return 'success';
            case 1: return 'info';
            default: return '';
        }        
    }
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return '<li><a id="menu_page" data-toggle="tooltip" data-placement="bottom" title="${sai_menu_page}" href="#!page"><span class="glyphicon glyphicon-blackboard" aria-hidden="true"></span></a></li>';}
    
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
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_API);}
    
    /**
     * Get all css System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods css
     */
    public static function css(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_page/css/saimod_sys_page.css'));}
        
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_page/js/saimod_sys_page.js'));}
}