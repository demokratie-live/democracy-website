<?php
namespace SYSTEM\SAI;

class saimod_sys_img extends \SYSTEM\SAI\SaiModule {    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_img(){
        //tt
        $result = '';  
        $img_folders = \SYSTEM\IMG\img::get();
        $result .= '<form action="upload.php" method="post" enctype="multipart/form-data">'; 
        foreach($img_folders as $name=>$folder){
            $cat = \SYSTEM\IMG\img::get($name);
            $result .= "<h3>".$name."</h3>";
            
            $result .= '<input type="file" name="datei"><br>
                        <input type="submit" class="btn" value="Hochladen">'; 
            foreach($cat as $img){
                //$result .= '<img src="api.php?call=img&cat='.$name.'&id='.$img.'" alt="" />';   
                $result .= '<li><a href="api.php?call=img&cat='.$name.'&id='.$img.'">'.$img.'</a></li>';   
            }
        }
        $result .= "</form>";
        return $result;
    }       
    
    public static function html_li_menu(){return '<li><a href="#" saimenu=".SYSTEM.SAI.saimod_sys_img">Img</a></li>';}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\Security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function sai_mod__SYSTEM_SAI_saimod_sys_img_flag_css(){}
    public static function sai_mod__SYSTEM_SAI_saimod_sys_img_flag_js(){}
}