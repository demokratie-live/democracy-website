<?php
class api_democracy extends \SYSTEM\API\api_system {
    public static function call_send_mail_faq($data){
        require((new \SYSTEM\PROOT('PHPMailer-master/PHPMailerAutoload.php'))->SERVERPATH());
        date_default_timezone_set('Europe/Berlin');

        $mail = new PHPMailer;
        
        $mail->CharSet = 'utf-8';  
 
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
}