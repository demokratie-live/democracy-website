<?php
namespace SYSTEM\SAI;

class saimod_sys_img extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_img_action_upload($cat){
        if(!\SYSTEM\IMG\img::put($cat, basename($_FILES['datei']['name']) , $_FILES['datei']['tmp_name'])){
            throw new \SYSTEM\LOG\ERROR("upload problem");}
        
        throw new \SYSTEM\LOG\ERROR("upload finished sucessful");
    }
    public static function sai_mod__SYSTEM_SAI_saimod_sys_img(){
        //tt
        $result = '';  
        $img_folders = \SYSTEM\IMG\img::get();                
        foreach($img_folders as $name=>$folder){
            $cat = \SYSTEM\IMG\img::get($name);
            $result .= "<h3>".$name."</h3>";
            $result .= '<form action="'.\SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_SAI_CONFIG_BASEURL).'sai_mod=.SYSTEM.SAI.saimod_sys_img&action=upload&cat='.$name.'" method="post" enctype="multipart/form-data">'; 
            $result .= '<input type="hidden" name="MAX_FILE_SIZE" value="3000000" />                        
                        <input type="file" name="datei"><br>
                        <input type="submit" class="btn" value="Hochladen">';
            $result .= "</form>";
                        
            foreach($cat as $img){
                //$result .= '<img src="api.php?call=img&cat='.$name.'&id='.$img.'" alt="" />';   
                $result .= '<li><a href="api.php?call=img&cat='.$name.'&id='.$img.'">'.$img.'</a></li>';   
            }
        }        
        return $result;
    }       
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_img">Img</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_img_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_img_flag_js(){}
}