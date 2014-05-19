<?php
namespace SYSTEM\SAI;

class saimod_sys_files extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_del($cat,$id){
        if(!\SYSTEM\FILES\files::delete($cat, $id)){
            throw new \SYSTEM\LOG\ERROR("delete problem");}
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_rn($cat,$id,$newid){   
        if(!\SYSTEM\FILES\files::rename($cat, $id, $newid)){
            throw new \SYSTEM\LOG\ERROR("rename problem");}
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_upload($cat){
        new \SYSTEM\LOG\WARNING(print_r($_FILES,true));
        if(!\SYSTEM\FILES\files::put($cat, basename($_FILES['datei_'.$cat]['name']) , $_FILES['datei_'.$cat]['tmp_name'])){
            throw new \SYSTEM\LOG\ERROR("upload problem");}
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files(){
        $result = array('tabopts' => '', 'tabs' => '');  
        $file_folders = \SYSTEM\FILES\files::get();
        $first = true;
        foreach($file_folders as $name=>$folder){
            $result['tabopts'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_files/saimod_sys_files_tabopt.tpl'),array('name' => $name, 'active' => $first ? 'active' : ''));
            $result['tabs'] .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_files/saimod_sys_files_tab.tpl'),array('name' => $name, 'active' => $first ? 'active' : '', 'content' => $first ? self::sai_mod__SYSTEM_SAI_saimod_sys_files_action_tab($name) : ''));
            $first = false;
        }        
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_files/saimod_sys_files.tpl'),$result);
    }
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_action_tab($name){
        $result = '';
        $cat = \SYSTEM\FILES\files::get($name);
        $i = 0;
        foreach($cat as $file){
            $result .= \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_files/saimod_sys_files_tableentry.tpl'), array('i' => $i++, 'cat' => $name, 'name' => $file, 'extension' => substr($file,-3,3), 'url' => 'api.php?call=files&cat='.$name.'&id='.$file));}
        return \SYSTEM\PAGE\replace::replaceFile(\SYSTEM\SERVERPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_files/saimod_sys_files_tabfull.tpl'), array('cat' => $name, 'content' => $result));}
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_files">Files</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_FILES);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_flag_js(){return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_files/saimod_sys_files.js')));}
}