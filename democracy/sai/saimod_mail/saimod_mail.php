<?php
namespace SAI;
class saimod_mail extends \SYSTEM\SAI\sai_module{
    
    const EMAIL_LIST_TEST               = 1;
    const EMAIL_LIST_NEWSLETTER         = 2;
    const EMAIL_LIST_PROTOTYPE          = 3;
    
    const EMAIL_WEBSITE_CONTACT         = 10;
    const EMAIL_WEBSITE_BUGREPORT       = 11;
    const EMAIL_WEBSITE_VOLUNTEER       = 12;
    const EMAIL_NEWSLETTER_SUBSCRIBE    = 20;
    
    const EMAIL_PROTOTYPE_REGISTER      = 30;
    const EMAIL_PROTOTYPE_ACCESS_ANDROID= 31;
    const EMAIL_PROTOTYPE_ACCESS_IOS    = 32;
    
    public static function subscribe($email,$list){
        return \SQL\SUBSCRIBE::QI(array($email,$list));
    }
    
    public static function contact($email,$name_first=null,$name_last=null){
        if($name_first != null || $name_last != null){
           return \SQL\CONTACT_INSERT_EMAIL_NAME::QI(array($email,$name_first,$name_last)); 
        } else {
            return \SQL\CONTACT_INSERT_EMAIL::QI(array($email));
        }
    }
    
    public static function send_mail($email,$email_id,$list=null,$resend=false,$data=[]){
        \LIB\lib_mail_cannon::php();
        
        // Prevent Double send
        if(!$resend && $list != self::EMAIL_LIST_TEST){
            $sent = \SQL\EMAIL_SENT_IS_SENT::Q1(array($email_id,$email));
            if($sent['count'] > 0){
                return false;}
        }
        
        $contact_data   = \SQL\CONTACT_SELECT::Q1(array($email));
        $email_data     = \SQL\EMAIL_SELECT::Q1(array($email_id));
        $template_text  = \SQL\EMAIL_TEMPLATE_SELECT::Q1(array($email_data['template_text']));
        $template_html  = \SQL\EMAIL_TEMPLATE_SELECT::Q1(array($email_data['template_html']));
        //TODO
        //$smtp = \SYSTEM\CONFIG\config::get(\config_ids::DEMOCRACY_EMAIL_PROTOTYPING);
        $smtp           = \SYSTEM\CONFIG\config::get(\config_ids::DEMOCRACY_EMAIL_CONTACT);
        $to             = $email;
        //TODO
        $replacements = [];
        $replacements['emoji_mobile'] = '📱';
        foreach($data as $k => $v){
            $replacements['data_'.$k] = $v;}
        if($list){
            $replacements['unsubscribe_link'] = \SYSTEM\CONFIG\config::get(\SYSTEM\CONFIG\config_ids::SYS_CONFIG_PATH_BASEURL).
                                                '#!unsubscribe;token.'.
                                                \SYSTEM\TOKEN\token::request(   'token_democracy_unsubscribe',
                                                                                array(  'email' => $email,'list' => $list),
                                                                                true);
        }
        $from           = \SYSTEM\PAGE\replace::replace($email_data['sender'],$replacements);
        $subject        = \SYSTEM\PAGE\replace::replace($email_data['subject'],$replacements);
        $text           = \SYSTEM\PAGE\replace::replace($template_text['value'], $replacements);
        $html           = \SYSTEM\PAGE\replace::replace($template_html['value'], $replacements);
        //TODO
        $images         = ["democracy_logo" => (new \PAPI('img/logo.png'))->SERVERPATH()];
        //TODO
        $attachments    = [];
        
        \mailcannon::send(  $smtp,
                            $from, $to,
                            $subject, $text, $html,
                            $images, $attachments);
        
        if($list != self::EMAIL_LIST_TEST){
            \SQL\EMAIL_SENT_INSERT::QI(array($email_id,$email));}
        
        return true;
    }
    
    public static function send_list($email_id,$list){
        $list_handle = \SQL\CONTACT_EMAIL_LIST_SELECT_LIST::QQ(array($list));
        while($row = $list_handle->next()){
            \set_time_limit(30);
            self::send_mail($row['email'], $email_id, $list);
        }
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail(){
        $vars = array();
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_overview(){
        $vars = array();
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_overview.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_contacts($list=null){
        $vars = array();
        //menu
        $vars['menu'] = '';
        $vars['active_all'] = $list ? '' : 'active';
        $res = \SQL\EMAIL_LISTS_SELECT::QQ();
        while($row = $res->next()){
            $row['active'] = $row['id'] == $list ? 'active' : '';
            $vars['menu'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_contacts_menu.tpl'))->SERVERPATH(),$row);
        }
        
        //data
        $vars['data'] = '';
        if($list){
            $res = \SQL\CONTACTS_SELECT_LIST::QQ(array($list));
        } else {
            $res = \SQL\CONTACTS_SELECT::QQ();
        }
        while($row = $res->next()){
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_contacts_tr.tpl'))->SERVERPATH(),$row);
        }
        
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_contacts.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_contact($email){
        $vars = \SQL\CONTACT_SELECT::Q1(array($email));
        //data
        $vars['data'] = '';
        $res = \SQL\EMAIL_LISTS_SELECT_CONTACT::QQ(array($email));
        while($row = $res->next()){
            $row['checked'] = $row['list'] ? 'checked' : '';
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_contact_tr.tpl'))->SERVERPATH(),$row);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_contact.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_contact_new(){
        $vars = array();
        //data
        $vars['data'] = '';
        $res = \SQL\EMAIL_LISTS_SELECT::QQ();
        while($row = $res->next()){
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_contact_new_tr.tpl'))->SERVERPATH(),$row);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_contact_new.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_update_contact($data){
        \SQL\CONTACT_UPDATE::QI(array($data['sex'],$data['name_first'],$data['name_last'],$data['email']));
        foreach($data['email_lists'] as $list){
            if($list['subscribed']){
                self::subscribe($data['email'],$list['id']);
            } else {
                \SQL\UNSUBSCRIBE::QI(array($data['email'],$list['id']));
            }
        }
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_insert_contact($data){
        if($data['email'] == ''){
            throw new \SYSTEM\LOG\ERROR('Please provide an EMail');
        }
        \SQL\CONTACT_INSERT::QI(array($data['email'],$data['sex'],$data['name_first'],$data['name_last']));
        foreach($data['email_lists'] as $list){
            if($list['subscribed']){
                \SQL\SUBSCRIBE::QI(array($data['email'],$list['id']));
            } else {
                \SQL\UNSUBSCRIBE::QI(array($data['email'],$list['id']));
            }
        }
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_delete_contact($data){
        foreach($data as $email){
            \SQL\CONTACT_DELETE::QI(array($email));
            \SQL\CONTACT_EMAIL_LIST_DELETE::QI(array($email));
            \SQL\EMAIL_SENT_DELETE::QI(array($email));
        }
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_lists(){
        $vars = array();
        //data
        $vars['data'] = '';
        $res = \SQL\EMAIL_LISTS_SELECT_COUNT::QQ();
        while($row = $res->next()){
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_lists_tr.tpl'))->SERVERPATH(),$row);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_lists.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_list($id){
        $vars = \SQL\EMAIL_LIST_SELECT::Q1(array($id));
        //data
        $vars['data'] = '';
        $res = \SQL\CONTACT_EMAIL_LIST_CONTACT_SELECT::QQ(array($id));
        while($row = $res->next()){
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_list_tr.tpl'))->SERVERPATH(),$row);
        }
        
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_list.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_list_new(){
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_list_new.tpl'))->SERVERPATH());
    }
    
    public static function sai_mod__SAI_saimod_mail_action_update_list($data){
        \SQL\LIST_UPDATE::QI(array($data['name'],$data['id']));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_insert_list($data){
        \SQL\EMAIL_LIST_INSERT::QI(array($data['name']));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_delete_list($data){
        foreach($data as $id){
            \SQL\EMAIL_LIST_DELETE::QI(array($id));
            \SQL\CONTACT_EMAIL_LIST_DELETE_LIST::QI(array($id));
        }
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_emails(){
        $vars = array();
        //data
        $vars['data'] = '';
        $res = \SQL\EMAILS_SELECT::QQ();
        while($row = $res->next()){
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_emails_tr.tpl'))->SERVERPATH(),$row);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_emails.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_email($id){
        $vars = \SQL\EMAIL_SELECT::Q1(array($id));
        $vars['template_lock'] = $vars['system_lock'] ? 'disabled' : '';
        //text template
        $vars['text_options'] = '';
        $res = \SQL\EMAIL_TEMPLATES_SELECT::QQ(array(0));
        while($row = $res->next()){
            $row['selected'] = $row['id'] == $vars['template_text'] ? 'selected' : '';
            $vars['text_options'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_email_template_option.tpl'))->SERVERPATH(),$row);
        }
        //html template
        $vars['html_options'] = '';
        $res = \SQL\EMAIL_TEMPLATES_SELECT::QQ(array(1));
        while($row = $res->next()){
            $row['selected'] = $row['id'] == $vars['template_html'] ? 'selected' : '';
            $vars['html_options'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_email_template_option.tpl'))->SERVERPATH(),$row);
        }
        //send
        $vars['send'] = '';
        $res = \SQL\EMAIL_LISTS_SELECT::QQ();
        while($row = $res->next()){
            $row['disabled'] = $row['id'] == self::EMAIL_LIST_TEST ? '' : 'disabled';
            $row['btn-color'] = $row['id'] == self::EMAIL_LIST_TEST ? 'success' : 'danger';
            $row['email'] = $id;
            $vars['send'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_email_send.tpl'))->SERVERPATH(),$row);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_email.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_email_new(){
        //text template
        $vars['text_options'] = '';
        $res = \SQL\EMAIL_TEMPLATES_SELECT::QQ(array(0));
        while($row = $res->next()){
            $row['selected'] = '';
            $vars['text_options'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_email_template_option.tpl'))->SERVERPATH(),$row);
        }
        //html template
        $vars['html_options'] = '';
        $res = \SQL\EMAIL_TEMPLATES_SELECT::QQ(array(1));
        while($row = $res->next()){
            $row['selected'] = '';
            $vars['html_options'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_email_template_option.tpl'))->SERVERPATH(),$row);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_email_new.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_send_email($data){
        self::send_list($data['email'],$data['list']);
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_update_email($data){
        \SQL\EMAIL_UPDATE::QI(array($data['name'],$data['sender'],$data['subject'],$data['text_template'],$data['html_template'],$data['id']));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_insert_email($data){
        \SQL\EMAIL_INSERT::QI(array($data['name'],$data['sender'],$data['subject'],$data['text_template'],$data['html_template']));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_delete_email($data){
        foreach($data as $id){
            \SQL\EMAIL_DELETE::QI(array($id));
            \SQL\EMAIL_SENT_DELETE_EMAIL::QI(array($id));
        }
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_templates($type=0){
        $vars = array();
        $vars['active_text'] = $type == 0 ? 'active' : '';
        $vars['active_html'] = $type == 1 ? 'active' : '';
        //data
        $vars['data'] = '';
        $res = \SQL\EMAIL_TEMPLATES_SELECT::QQ(array($type));
        while($row = $res->next()){
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_templates_tr.tpl'))->SERVERPATH(),$row);
        }
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_templates.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_template($id){
        $vars = \SQL\EMAIL_TEMPLATE_SELECT::Q1(array($id));
        $vars['selected_text'] = $vars['type'] == 0 ? 'selected' : '';
        $vars['selected_html'] = $vars['type'] == 1 ? 'selected' : '';
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_template.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_template_new(){
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/saimod_mail_template_new.tpl'))->SERVERPATH());
    }
    
    public static function sai_mod__SAI_saimod_mail_action_update_template($data){
        \SQL\EMAIL_TEMPLATE_UPDATE::QI(array($data['type'],$data['name'],$data['value'],$data['id']));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_insert_template($data){
        \SQL\EMAIL_TEMPLATE_INSERT::QI(array($data['type'],$data['name'],$data['value']));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_mail_action_delete_template($data){
        foreach($data as $id){
            \SQL\EMAIL_TEMPLATE_DELETE::QI(array($id));
        }
        return \JsonResult::ok();
    }
        
    public static function menu(){
        return new \SYSTEM\SAI\sai_module_menu( 101,
                                    \SYSTEM\SAI\sai_module_menu::POISITION_LEFT,
                                    \SYSTEM\SAI\sai_module_menu::DIVIDER_NONE,
                                    \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_mail/tpl/menu.tpl'))->SERVERPATH()));}
    public static function right_public(){return false;}
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function js(){
        return array(new \PSAI('saimod_mail/js/saimod_mail.js'));}
}