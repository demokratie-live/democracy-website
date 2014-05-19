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
        if(!\SYSTEM\FILES\files::put($cat, basename($_FILES['datei']['name']) , $_FILES['datei']['tmp_name'])){
            throw new \SYSTEM\LOG\ERROR("upload problem");}
        
        return \SYSTEM\LOG\JsonResult::ok();
    }
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files(){
        //tt
        $result = '';  
        $file_folders = \SYSTEM\FILES\files::get();  
        $i = 0;
        foreach($file_folders as $name=>$folder){
            $cat = \SYSTEM\FILES\files::get($name);
            $result .= "<h3>".$name."</h3>";
            $result .= '<form action="'.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_BASEURL).'sai_mod=.SYSTEM.SAI.saimod_sys_files&action=upload&cat='.$name.'" method="post" enctype="multipart/form-data">'; 
            $result .= //'<input type="hidden" name="MAX_FILE_SIZE" value="3000000" />                        
                        '<input type="file" name="datei"><br>
                        <input type="submit" class="btn" value="Add">';
            $result .= "</form>";
            $result .= "<table><tr><th>Delete</th><th>Name</th><th>new name</th><th>Rename</th></tr>";            
            foreach($cat as $img){
                //$result .= '<img src="api.php?call=img&cat='.$name.'&id='.$img.'" alt="" />';   
                $result .= '<tr><td><input type="button" class="btn-danger imgdelbtn" style="margin: 1px; margin-right: 3px" value="Delete" cat="'.$name.'" id="'.$img.'"></td><td><a href="api.php?call=files&cat='.$name.'&id='.$img.'">'.$img.'</a></td><td><input type="text" id="renametext_'.$i.'" class="form-control" style="width: 100px; margin:0;" placeholder="new name..."></td><td><input type="submit" class="btn-warning imgrnbtn" style="margin: 1px;;" value="Rename" cat="'.$name.'" id="'.$img.'" textfield="'.$i.'"></td></tr>';   
                $i++;
            }
            $result .= "</table>";
        }        
        return $result;
    }       
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_files">Files</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI) && \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI_FILES);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_files_flag_js(){return \SYSTEM\LOG\JsonResult::toString(
            array(  \SYSTEM\WEBPATH(new \SYSTEM\PSAI(),'modules/saimod_sys_files/sai_sys_files.js')));}
}