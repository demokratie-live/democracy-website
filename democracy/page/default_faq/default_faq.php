<?php
class default_faq implements SYSTEM\PAGE\Page {
    public static function title(){
        return \SYSTEM\PAGE\text::get('title_faq');}
    public static function meta(){
        return \SYSTEM\PAGE\text::tag('meta_faq');}
    public static function js(){
        return array(   new PPAGE('default_faq/js/default_faq.js'));}
    public static function css(){
        return array();}//   new PPAGE('default_faq/css/default_faq.css'));}
    public function html(){
        $vars = array();
        $vars['questions'] = '';
        $faqs = \SYSTEM\PAGE\text::tag('faq');
        $i = 0;
        while(array_key_exists('faq_q_'. ($i < 9 ? sprintf("%02d", ++$i) : ++$i), $faqs)){
            $question = array(  'n' => $i, 'in' => $i == 1 ? 'in' : '', 'in_css' => $i == 1 ? 'transform: rotate(180deg)' : '',
                                'question' => '${faq_q_'.($i <= 9 ? sprintf("%02d", $i) : $i).'}', //${faq_q_0n} ${faq_q_nn}
                                'answer' => '${faq_a_'.($i <= 9 ? sprintf("%02d", $i) : $i).'}');  //${faq_a_0n} ${faq_a_nn}
            $vars['questions'] .= \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_faq/tpl/question.tpl'))->SERVERPATH(), $question);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('democracy'),$faqs);
        return \SYSTEM\PAGE\replace::replaceFile((new PPAGE('default_faq/tpl/default_faq.tpl'))->SERVERPATH(), $vars);
    }
}