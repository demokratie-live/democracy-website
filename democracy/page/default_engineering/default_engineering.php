<?php
class default_engineering implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_engineering');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_engineering');}
    public static function js(){
        return array();}//   new PPAGE('default_engineering/js/default_engineering.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_engineering/css/default_engineering.css'));}
    private static function icon_class($icon_id){
        $class = '';
        switch($icon_id){
            case 1: case 2: case 3: case 4: case 5:
                $class = 'fa-check-square';
                break;
            case 11: case 12: case 13: case 14: case 15:
                $class = 'fa-square';
                break;
            case 21: case 22: case 23: case 24: case 25:
                $class = 'fa-pencil-square';
                break;
            case 31: case 32: case 33: case 34: case 35:
                $class = 'fa-plus-square';
                break;
            case 41: case 42: case 43: case 44: case 45:
                $class = 'fa-minus-square';
                break;
            case 51: case 52: case 53: case 54: case 55:
                $class = 'fa-odnoklassniki-square';
                break;
            case 61: case 62: case 63: case 64: case 65:
                $class = 'fa-github-square';
                break;
            case 71: case 72: case 73: case 74: case 75:
                $class = 'fa-times-circle';
                break;
        }
        $class .= ' ';
        switch($icon_id){
            case 1: case 11: case 21: case 31: case 41: case 51: case 61: case 71:
                $class .= 'rmicon-blue';
                break;
            case 2: case 12: case 22: case 32: case 42: case 52: case 62: case 72:
                $class .= 'rmicon-grey';
                break;
            case 3: case 13: case 23: case 33: case 43: case 53: case 63: case 73:
                $class .= 'rmicon-red';
                break;
            case 4: case 14: case 24: case 34: case 44: case 54: case 64: case 74:
                $class .= 'rmicon-green';
                break;
            case 5: case 15: case 25: case 35: case 45: case 55: case 65: case 75:
                $class .= 'rmicon-green';
                break;
        }
        return $class;
    }
    public function html(){
        $vars = array('goals' => '');
        $goals = \SQL\ROADMAP_SELECT::QQ();
        while($goal = $goals->next()){
            $goal['class_beta'] = self::icon_class($goal['beta']);
            $goal['class_mvp']  = self::icon_class($goal['mvp']);
            $goal['class_dream']= self::icon_class($goal['dream']);
            $goal['issue_text'] = $goal['issue'] ? '#'.$goal['issue'] : '';
            $vars['goals'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_engineering/tpl/goal.tpl'))->SERVERPATH(), $goal);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'), \SYSTEM\PAGE\text::tag('roadmap'));
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_engineering/tpl/default_engineering.tpl'))->SERVERPATH(), $vars);
    }
}