<?php
class api_democracy extends \SYSTEM\API\api_system {
    public static function call_send_mail_faq($data){
        require((new \SYSTEM\PROOT('PHPMailer-master/PHPMailerAutoload.php'))->SERVERPATH());
        date_default_timezone_set('Europe/Berlin');

        $mail = new PHPMailer;
        
        $mail->CharSet = 'utf-8';
        $mail->Encoding = 'base64';
 
        $mail->Host = 'atmanspacher.eu';
        $mail->Port = 465;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
   
        $mail->setFrom(     $data["email"], 'Neue Frage von  - '. $data["vorname"] .' '. $data["nachname"]);
        $mail->addReplyTo(  $data["email"], $data["vorname"] .' '. $data["nachname"]);
        $mail->addAddress(  'contact@democracy-deutschland.de',  'democracy-deutschland.de');
        
        $vars = $data;
        $vars['datum'] = date("d.m.Y");
        $vars['uhrzeit'] = date("H:i");
        $html = \SYSTEM\PAGE\replace::replaceFile((new PAPI('tpl/send_mail_faq.tpl'))->SERVERPATH(), $vars);
  
        $mail->Subject = 'DEMOCRACY: Frage von '.$data["vorname"] .' '. $data["nachname"].' erhalten!';
        $mail->Body = $html;
        $mail->IsHTML(true); 

	//send the message, check for errors
	if(!$mail->send()){
	    throw new \SYSTEM\LOG\ERROR("Mailer Error: " . $mail->ErrorInfo);}
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    public static function call_send_subscribe($data){
        $beta = $data['beta'] == 'true' ? 1 : 0;
        $android = $data['android'] == 'true' ? 1 : 0;
        $ios = $data['ios'] == 'true' ? 1 : 0;
        \SQL\SUBSCRIBE_ADD::Q1(array($data['email'],$beta,$android,$ios,$beta,$android,$ios));
            
        $sub = \SQL\SUBSCRIBE_GET::Q1(array($data['email']));
        if(!$sub['confirmed']){
            self::send_subscribe_mail($data['email']);}
            
        return \SYSTEM\LOG\JsonResult::ok();
    }
    
    /**
     * @see http://www.jwz.org/doc/mid.html
     */
    public static function generateMessageID()
    {
        return sprintf(
            "<%s.%s@%s>",
            base_convert(microtime(), 10, 36),
            base_convert(bin2hex(openssl_random_pseudo_bytes(8)), 16, 36),
            "democracy-deutschland.de"
        );
    }
    
    private static function send_subscribe_mail($email){
        require((new \SYSTEM\PROOT('PHPMailer-master/PHPMailerAutoload.php'))->SERVERPATH());
        date_default_timezone_set('Europe/Berlin');

        $mail = new PHPMailer;
        
        $mail->CharSet = 'utf-8';  
 
        $mail->Host = 'atmanspacher.eu';
        $mail->Port = 465;
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
   
        $mail->setFrom(     'contact@democracy-deutschland.de', 'DEMOCRACY Deutschland e.V.');
        $mail->addReplyTo(  'contact@democracy-deutschland.de', 'DEMOCRACY Deutschland e.V.');
        $mail->addAddress(  $email);
        
        $mail->addCustomHeader('Return-Path', 'contact@democracy-deutschland.de');
        $mail->addCustomHeader('Message-ID', self::generateMessageID());
        $mail->addCustomHeader('Date', date('r', time()));
        
        $token = \SYSTEM\TOKEN\token::request('token_confirm_subscribe', array('email' => $email));
        
        $html = \SYSTEM\PAGE\replace::replaceFile((new PAPI('tpl/send_mail_subscribe.tpl'))->SERVERPATH(), array('token' => $token));
        
        $mail->Subject = '📱 DEMOCRACY: Bitte bestätige Deine Newsletter-Anmeldung';
        $mail->Body = $html;
        $mail->IsHTML(true);

	//send the message, check for errors
	if(!$mail->send()){
	    throw new \SYSTEM\LOG\ERROR("Mailer Error: " . $mail->ErrorInfo);}
        
        \SQL\SUBSCRIBE_EMAIL_COUNT::Q1(array($email));
    }
}