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
 * saimod_sys_files Class provided by System as saimod to manage files (files feature)
 */
class saimod_sys_files extends \SYSTEM\SAI\SaiModule {
    /**
     * Delete a File in a Files Directory
     * 
     * @param string $cat Name of the Files Directory
     * @param string $id Name of the File
     * @return json Returns json with status true or error
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_del($cat,$id){
        if(!\SYSTEM\FILES\files::delete($cat, $id)){
            throw new \SYSTEM\LOG\ERROR("delete problem");}
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Rename a File in a Files Directory
     * 
     * @param string $cat Name of the Files Directory
     * @param string $id Name of the File
     * @param string $newid New Name of the File
     * @return json Returns json with status true or error
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_rn($cat,$id,$newid){   
        if(!\SYSTEM\FILES\files::rename($cat, $id, $newid)){
            throw new \SYSTEM\LOG\ERROR("rename problem");}
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Uploadcall to a Files Directory. Expects a File been uploaded.
     * 
     * @param string $cat Name of the Files Directory
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_upload($cat){
        if(!\SYSTEM\FILES\files::put($cat, basename($_FILES['datei_'.$cat]['name']) , $_FILES['datei_'.$cat]['tmp_name'])){
            throw new \SYSTEM\LOG\ERROR("upload problem");}
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * Generate the HTML for the Saimods startpage
     * 
     * @return string Returns HTML for the Saimods startpage
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files(){
        $vars['tabopts'] = '';
        
        $res = \SYSTEM\FILES\files::get();
        foreach($res as $name=>$folder){
            $vars['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_files/tpl/saimod_sys_files_tabopt.tpl'))->SERVERPATH(), array( 'name' => $name));}
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_FILES));    
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_files/tpl/saimod_sys_files.tpl'))->SERVERPATH(), $vars);
    }
    
    /**
     * Generate the HTML for the one Files Directory
     * 
     * @param string $name Name of the Files Directory
     * @return string Returns HTML
     */
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_tab($name = 'saistart_sys_sai'){
        $result = '';
        $cat = \SYSTEM\FILES\files::get($name);
        $i = 0;
        foreach($cat as $file){
            $result .= \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_files/tpl/saimod_sys_files_list_entry.tpl'))->SERVERPATH(), array('i' => $i++, 'cat' => $name, 'name' => $file, 'extension' => substr($file,-3,3), 'url' => 'api.php?call=files&cat='.$name.'&id='.$file));}
        $vars['cat'] = $name;
        $vars['content'] = $result;
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag(\SYSTEM\SQL\system_text::TAG_SAI_FILES));    
        return \SYSTEM\PAGE\replace::replaceFile((new \SYSTEM\PSAI('modules/saimod_sys_files/tpl/saimod_sys_files_list.tpl'))->SERVERPATH(), $vars);}
    
    /**
     * Generate <li> Menu for the Saimod
     * 
     * @return string Returns <li> Menu for the Saimod
     */
    public static function html_li_menu(){return '<li><a id="menu_files" data-toggle="tooltip" data-placement="bottom" title="${sai_menu_files}" href="#!files"><span class="glyphicon glyphicon-duplicate" aria-hidden="true"></span></a></li>';}    
    
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
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_FILES);}
    
    /**
     * Get all js System Paths required for this Saimod
     * 
     * @return array Returns array of Pathobjects pointing to the saimods js
     */
    public static function js(){
        return array(new \SYSTEM\PSAI('modules/saimod_sys_files/js/saimod_sys_files.js'));}
}