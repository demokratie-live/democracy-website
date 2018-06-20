<?php
namespace SAI;
class saimod_media extends \SYSTEM\SAI\sai_module{
    const MEDIA_PRESS       = 0;
    const MEDIA_PUBLICATION = 1;
    const MEDIA_DOWNLOAD    = 2;
    
    public static function sai_mod__SAI_saimod_media(){
        $vars = array();
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/saimod_media.tpl'))->SERVERPATH(),$vars);}
    
    private static function generate_list($type){
        $vars = array();
        $vars['data'] = '';
        $media = \SQL\MEDIEN_SELECT::QQ(array($type));
        while($d = $media->next()){
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/item.tpl'))->SERVERPATH(),$d);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/saimod_media_list.tpl'))->SERVERPATH(),$vars);
    }
    public static function sai_mod__SAI_saimod_media_action_press(){
        return self::generate_list(self::MEDIA_PRESS);}
    
    public static function sai_mod__SAI_saimod_media_action_publications(){
        return self::generate_list(self::MEDIA_PUBLICATION);}
        
    public static function sai_mod__SAI_saimod_media_action_downloads(){
        return self::generate_list(self::MEDIA_DOWNLOAD);}
        
    public static function sai_mod__SAI_saimod_media_action_new(){
        $vars = array('images' => '');
        $files = \SYSTEM\FILES\files::get('medien');
        foreach($files as $file){
            $f = ['name' => $file, 'selected' => ''];
            $vars['images'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/image.tpl'))->SERVERPATH(),$f);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/saimod_media_new.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_media_action_edit($id){
        $vars = \SQL\MEDIA_SELECT::Q1(array($id));
        $vars['selected_type_0'] = $vars['selected_type_1'] = $vars['selected_type_2'] = '';
        $vars['selected_type_'.$vars['type']] = 'selected';
        $vars['images'] = '';
        $files = \SYSTEM\FILES\files::get('medien');
        foreach($files as $file){
            $f = ['name' => $file, 'selected' => $file == $vars['img'] ? 'selected' : ''];
            $vars['images'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/image.tpl'))->SERVERPATH(),$f);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/saimod_media_edit.tpl'))->SERVERPATH(),$vars);}
    
    public static function sai_mod__SAI_saimod_media_action_insert($data){
        return \SYSTEM\LOG\JsonResult::status(\SQL\MEDIA_INSERT::QI(array($data['type'],$data['order'],$data['title'],$data['img'],$data['link'])));}
        
    public static function sai_mod__SAI_saimod_media_action_update($data){
        return \SYSTEM\LOG\JsonResult::status(\SQL\MEDIA_UPDATE::QI(array($data['type'],$data['order'],$data['title'],$data['img'],$data['link'],$data['id'])));}
        
    public static function sai_mod__SAI_saimod_media_action_delete($data){
        foreach($data as $id){
            \SQL\MEDIA_DELETE::QI(array($id));}
        return \JsonResult::ok();
    }
    
    public static function menu(){
        return new \SYSTEM\SAI\sai_module_menu( 140,
                                    \SYSTEM\SAI\sai_module_menu::POISITION_LEFT,
                                    \SYSTEM\SAI\sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_media/tpl/menu.tpl'))->SERVERPATH()));}
    public static function right_public(){return false;}
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function js(){
        return array(new \PSAI('saimod_media/js/saimod_media.js'));}
}