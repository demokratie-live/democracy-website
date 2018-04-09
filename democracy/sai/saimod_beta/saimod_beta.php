<?php
namespace SAI;
class saimod_beta extends \SYSTEM\SAI\sai_module{    
    public static function sai_mod__SAI_saimod_beta(){
        $vars = array();
        $vars['store_android_count'] = \SQL\BETA_COUNT_STORE_ANDROID::Q1()['count'];
        $vars['store_ios_count'] = \SQL\BETA_COUNT_STORE_IOS::Q1()['count'];
        $vars['mail_count'] = \SQL\BETA_COUNT_MAIL::Q1()['count'];
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/saimod_beta.tpl'))->SERVERPATH(),$vars);}
    
    public static function sai_mod__SAI_saimod_beta_action_all(){
        $vars = array();
        
        $vars['data'] = '';
        $beta = \SQL\BETA_GET::QQ();
        while($row = $beta->next()){
            if($row['android']){
                $row['device'] = 'android';}
            if($row['ios']){
                $row['device'] = 'apple';}
            $row['generated'] = $row['createdAt'] ? \SYSTEM\time::time_ago_string(strtotime($row['createdAt'])) : 'invalid';
            if($row['redeemedAt']){
                $row['redeemed'] = 'check';
                $row['redeemed_time'] = \SYSTEM\time::time_ago_string(strtotime($row['redeemedAt']));
            } else {
                $row['redeemed'] = 'times';
                $row['redeemed_time'] = '';
            }
            if($row['storedAt']){
                $row['stored'] = 'check';
                $row['stored_time'] = \SYSTEM\time::time_ago_string(strtotime($row['storedAt']));
            } else {
                $row['stored'] = 'times';
                $row['stored_time'] = '';
            }
            if($row['emailedAt']){
                $row['emailed'] = 'check';
                $row['emailed_time'] = \SYSTEM\time::time_ago_string(strtotime($row['emailedAt']));
            } else {
                $row['emailed'] = 'times';
                $row['emailed_time'] = '';
            }
            $row['used_code'] = $row['used_code'] == '' ? 'invalid' : $row['used_code'];
            if($row['used_code'] == $row['code']){
                $row['valid'] = 'green';
            } else {
                $row['valid'] = 'red';
            }
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/all_tr.tpl'))->SERVERPATH(),$row);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('time'));
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/all.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_beta_action_code(){
        $vars = array();
        
        $vars['data'] = '';
        $beta = \SQL\BETA_CODES_FIND::QQ();
        $i = 0;
        while($row = $beta->next()){
            $row['i'] = $i++;
            $row['generated'] = \SYSTEM\time::time_ago_string(strtotime($row['createdAt']));
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/code_tr.tpl'))->SERVERPATH(),$row);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('time'));
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/code.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_beta_action_generate($comment){
        $code = bin2hex(openssl_random_pseudo_bytes(4));
        \SQL\BETA_CODE_INSERT::QI(array($code,$comment));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_beta_action_comment($code,$comment){
        \SQL\BETA_COMMENT::QI(array($comment,$code));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_beta_action_store_android(){
        $vars = array();
        
        $vars['data'] = '';
        $beta = \SQL\BETA_STORE_ANDROID_FIND::QQ();
        $i = 0;
        while($row = $beta->next()){
            $row['i'] = $i++;
            if($row['android']){
                $row['device'] = 'android';}
            if($row['ios']){
                $row['device'] = 'apple';}
            $row['generated'] = $row['createdAt'] ? \SYSTEM\time::time_ago_string(strtotime($row['createdAt'])) : 'invalid';
            if($row['redeemedAt']){
                $row['redeemed'] = 'check';
                $row['redeemed_time'] = \SYSTEM\time::time_ago_string(strtotime($row['redeemedAt']));
            } else {
                $row['redeemed'] = 'times';
                $row['redeemed_time'] = '';
            }
            if($row['storedAt']){
                $row['stored'] = 'check';
                $row['stored_time'] = \SYSTEM\time::time_ago_string(strtotime($row['storedAt']));
                $row['disabled'] = 'disabled';
            } else {
                $row['stored'] = 'times';
                $row['stored_time'] = '';
                $row['disabled'] = '';
            }
            $row['used_code'] = $row['used_code'] == '' ? 'invalid' : $row['used_code'];
            if($row['used_code'] == $row['code']){
                $row['valid'] = 'green';
            } else {
                $row['valid'] = 'red';
            }
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/store_android_tr.tpl'))->SERVERPATH(),$row);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('time'));
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/store_android.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_beta_action_store_ios(){
        $vars = array();
        
        $vars['data'] = '';
        $beta = \SQL\BETA_STORE_IOS_FIND::QQ();
        $i = 0;
        while($row = $beta->next()){
            $row['i'] = $i++;
            if($row['android']){
                $row['device'] = 'android';}
            if($row['ios']){
                $row['device'] = 'apple';}
            $row['generated'] = $row['createdAt'] ? \SYSTEM\time::time_ago_string(strtotime($row['createdAt'])) : 'invalid';
            if($row['redeemedAt']){
                $row['redeemed'] = 'check';
                $row['redeemed_time'] = \SYSTEM\time::time_ago_string(strtotime($row['redeemedAt']));
            } else {
                $row['redeemed'] = 'times';
                $row['redeemed_time'] = '';
            }
            if($row['storedAt']){
                $row['stored'] = 'check';
                $row['stored_time'] = \SYSTEM\time::time_ago_string(strtotime($row['storedAt']));
                $row['disabled'] = 'disabled';
            } else {
                $row['stored'] = 'times';
                $row['stored_time'] = '';
                $row['disabled'] = '';
            }
            $row['used_code'] = $row['used_code'] == '' ? 'invalid' : $row['used_code'];
            if($row['used_code'] == $row['code']){
                $row['valid'] = 'green';
            } else {
                $row['valid'] = 'red';
            }
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/store_ios_tr.tpl'))->SERVERPATH(),$row);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('time'));
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/store_ios.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_beta_action_store($email){
        \SQL\BETA_STORE::QI(array($email));
        return \JsonResult::ok();
    }
    
    public static function sai_mod__SAI_saimod_beta_action_mail(){
        $vars = array();
        
        $vars['data'] = '';
        $beta = \SQL\BETA_MAIL_FIND::QQ();
        $i = 0;
        while($row = $beta->next()){
            $row['i'] = $i++;
            if($row['android']){
                $row['device'] = 'android';}
            if($row['ios']){
                $row['device'] = 'apple';}
            if($row['redeemedAt']){
                $row['redeemed'] = 'check';
                $row['redeemed_time'] = \SYSTEM\time::time_ago_string(strtotime($row['redeemedAt']));
            } else {
                $row['redeemed'] = 'times';
                $row['redeemed_time'] = '';
            }
            if($row['storedAt']){
                $row['stored'] = 'check';
                $row['stored_time'] = \SYSTEM\time::time_ago_string(strtotime($row['storedAt']));
            } else {
                $row['stored'] = 'times';
                $row['stored_time'] = '';
            }
            if($row['emailedAt']){
                $row['mailed'] = 'check';
                $row['mailed_time'] = \SYSTEM\time::time_ago_string(strtotime($row['emailedAt']));
                $row['disabled'] = 'disabled';
            } else {
                $row['mailed'] = 'times';
                $row['mailed_time'] = '';
                $row['disabled'] = '';
            }
            $row['used_code'] = $row['used_code'] == '' ? 'invalid' : $row['used_code'];
            if($row['used_code'] == $row['code']){
                $row['valid'] = 'green';
            } else {
                $row['valid'] = 'red';
            }
            $vars['data'] .= \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/mail_tr.tpl'))->SERVERPATH(),$row);
        }
        $vars = array_merge($vars, \SYSTEM\PAGE\text::tag('time'));
        return \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/mail.tpl'))->SERVERPATH(),$vars);
    }
    
    public static function sai_mod__SAI_saimod_beta_action_email($email,$android,$ios){
        require((new \SYSTEM\PROOT('PHPMailer-master/PHPMailerAutoload.php'))->SERVERPATH());
        date_default_timezone_set('Europe/Berlin');

        $mail = new \PHPMailer;
        
        $mail->CharSet = 'utf-8';
        $mail->Encoding = 'base64';
 
        $mail->Host = 'atmanspacher.eu';
        $mail->Port = 465;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
   
        $mail->setFrom(     'prototyping@democracy-deutschland.de', 'DEMOCRACY Deutschland Prototyp');
        $mail->addReplyTo(  'prototyping@democracy-deutschland.de', 'DEMOCRACY Deutschland Prototyp');
        $mail->addAddress(  $email);
        
        $vars = array();
        $vars['datum'] = date("d.m.Y");
        $vars['uhrzeit'] = date("H:i");
        if($android){
            $html = \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/mail_android.tpl'))->SERVERPATH(), $vars);
        } else {
            $html = \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/mail_ios.tpl'))->SERVERPATH(), $vars);
        }
  
        $mail->Subject = '📱 DEMOCRACY: Dein Prototyp Zugang';
        $mail->Body = $html;
        $mail->IsHTML(true);
        $mail->AddEmbeddedImage((new \PSAI('saimod_beta/img/logo.png'))->SERVERPATH(), 'democracy_logo', 'logo.png');

	//send the message, check for errors
	if(!$mail->send()){
	    throw new \SYSTEM\LOG\ERROR("Mailer Error: " . $mail->ErrorInfo);}
     
        \SQL\BETA_MAIL::QI(array($email));
        
        return \JsonResult::ok();
    }
    
    public static function menu(){
        return new \SYSTEM\SAI\sai_module_menu( 99,
                                    \SYSTEM\SAI\sai_module_menu::POISITION_LEFT,
                                    \SYSTEM\SAI\sai_module_menu::DIVIDER_LEFT,
                                    \SYSTEM\PAGE\replace::replaceFile((new \PSAI('saimod_beta/tpl/menu.tpl'))->SERVERPATH()));}
    public static function right_public(){return false;}    
    public static function right_right(){return \SYSTEM\SECURITY\security::check(\SYSTEM\SECURITY\RIGHTS::SYS_SAI);}
    
    public static function js(){
        return array(new \PSAI('saimod_beta/js/saimod_beta.js'));}
}