<?php
namespace SAI;
class saimod_roadmap extends \SYSTEM\SAI\sai_module{    
    public static function sai_mod__SAI_saimod_roadmap(){
        $vars = array('goals' => '');
        $goals = \SQL\ROADMAP_SELECT::QQ();
        while($goal = $goals->next()){
            $goal['selected_beta'] =
                $goal['selected_beta_1'] = $goal['selected_beta_2'] = $goal['selected_beta_3'] = $goal['selected_beta_4'] = $goal['selected_beta_5'] =
                $goal['selected_beta_11'] = $goal['selected_beta_12'] = $goal['selected_beta_13'] = $goal['selected_beta_14'] = $goal['selected_beta_15'] =
                $goal['selected_beta_21'] = $goal['selected_beta_22'] = $goal['selected_beta_23'] = $goal['selected_beta_24'] = $goal['selected_beta_25'] =
                $goal['selected_beta_31'] = $goal['selected_beta_32'] = $goal['selected_beta_33'] = $goal['selected_beta_34'] = $goal['selected_beta_35'] =
                $goal['selected_beta_41'] = $goal['selected_beta_42'] = $goal['selected_beta_43'] = $goal['selected_beta_44'] = $goal['selected_beta_45'] =
                $goal['selected_beta_51'] = $goal['selected_beta_52'] = $goal['selected_beta_53'] = $goal['selected_beta_54'] = $goal['selected_beta_55'] =
                $goal['selected_beta_61'] = $goal['selected_beta_62'] = $goal['selected_beta_63'] = $goal['selected_beta_64'] = $goal['selected_beta_65'] =
                $goal['selected_beta_71'] = $goal['selected_beta_72'] = $goal['selected_beta_73'] = $goal['selected_beta_74'] = $goal['selected_beta_75'] =
            $goal['selected_mvp'] =
                $goal['selected_mvp_1'] = $goal['selected_mvp_2'] = $goal['selected_mvp_3'] = $goal['selected_mvp_4'] = $goal['selected_mvp_5'] =
                $goal['selected_mvp_11'] = $goal['selected_mvp_12'] = $goal['selected_mvp_13'] = $goal['selected_mvp_14'] = $goal['selected_mvp_15'] =
                $goal['selected_mvp_21'] = $goal['selected_mvp_22'] = $goal['selected_mvp_23'] = $goal['selected_mvp_24'] = $goal['selected_mvp_25'] =
                $goal['selected_mvp_31'] = $goal['selected_mvp_32'] = $goal['selected_mvp_33'] = $goal['selected_mvp_34'] = $goal['selected_mvp_35'] =
                $goal['selected_mvp_41'] = $goal['selected_mvp_42'] = $goal['selected_mvp_43'] = $goal['selected_mvp_44'] = $goal['selected_mvp_45'] =
                $goal['selected_mvp_51'] = $goal['selected_mvp_52'] = $goal['selected_mvp_53'] = $goal['selected_mvp_54'] = $goal['selected_mvp_55'] =
                $goal['selected_mvp_61'] = $goal['selected_mvp_62'] = $goal['selected_mvp_63'] = $goal['selected_mvp_64'] = $goal['selected_mvp_65'] =
                $goal['selected_mvp_71'] = $goal['selected_mvp_72'] = $goal['selected_mvp_73'] = $goal['selected_mvp_74'] = $goal['selected_mvp_75'] =
            $goal['selected_dream'] =
                $goal['selected_dream_1'] = $goal['selected_dream_2'] = $goal['selected_dream_3'] = $goal['selected_dream_4'] = $goal['selected_dream_5'] =
                $goal['selected_dream_11'] = $goal['selected_dream_12'] = $goal['selected_dream_13'] = $goal['selected_dream_14'] = $goal['selected_dream_15'] =
                $goal['selected_dream_21'] = $goal['selected_dream_22'] = $goal['selected_dream_23'] = $goal['selected_dream_24'] = $goal['selected_dream_25'] =
                $goal['selected_dream_31'] = $goal['selected_dream_32'] = $goal['selected_dream_33'] = $goal['selected_dream_34'] = $goal['selected_dream_35'] =
                $goal['selected_dream_41'] = $goal['selected_dream_42'] = $goal['selected_dream_43'] = $goal['selected_dream_44'] = $goal['selected_dream_45'] =
                $goal['selected_dream_51'] = $goal['selected_dream_52'] = $goal['selected_dream_53'] = $goal['selected_dream_54'] = $goal['selected_dream_55'] =
                $goal['selected_dream_61'] = $goal['selected_dream_62'] = $goal['selected_dream_63'] = $goal['selected_dream_64'] = $goal['selected_dream_65'] =
                $goal['selected_dream_71'] = $goal['selected_dream_72'] = $goal['selected_dream_73'] = $goal['selected_dream_74'] = $goal['selected_dream_75'] =
            '';
            if($goal['beta']){
                $goal['selected_beta_'.$goal['beta']] = 'selected';
            } else {
                $goal['selected_beta'] = 'selected';
            }
            if($goal['mvp']){
                $goal['selected_mvp_'.$goal['mvp']] = 'selected';
            } else {
                $goal['selected_mvp'] = 'selected';
            }
            if($goal['dream']){
                $goal['selected_dream_'.$goal['dream']] = 'selected';
            } else {
                $goal['selected_dream'] = 'selected';
            }
            $goal['goal'] = \htmlspecialchars($goal['goal']);
            $vars['goals'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_roadmap/tpl/goal.tpl'))->SERVERPATH(),$goal);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_roadmap/tpl/saimod_roadmap.tpl'))->SERVERPATH(),$vars);}
        
    public static function sai_mod__SAI_saimod_roadmap_action_insert($data){
        return \SYSTEM\LOG\JsonResult::status(\SQL\GOAL_INSERT::QI(array($data['order'],$data['goal'],$data['issue'] ? $data['issue'] : NULL,$data['beta'],$data['mvp'],$data['dream'])));
    }
    
    public static function sai_mod__SAI_saimod_roadmap_action_update($data){
        return \SYSTEM\LOG\JsonResult::status(\SQL\GOAL_UPDATE::QI(array($data['order'],$data['goal'],$data['issue'] ? $data['issue'] : NULL,$data['beta'],$data['mvp'],$data['dream'],$data['id'])));
    }
    
    public static function sai_mod__SAI_saimod_roadmap_action_delete($data){
        foreach($data as $id){
            \SQL\GOAL_DELETE::QI(array($id));
        }
        return \JsonResult::ok();
    }
    
    public static function menu(){
        return new \SYSTEM\SAI\sai_module_menu( 130,
                                    \SYSTEM\SAI\sai_module_menu::POISITION_LEFT,
                                    \SYSTEM\SAI\sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_roadmap/tpl/menu.tpl'))->SERVERPATH()));}
    public static function right_public(){return false;}
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function js(){
        return array(new \PSAI('saimod_roadmap/js/saimod_roadmap.js'));}
}