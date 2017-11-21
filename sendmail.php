<?php 
    
 
	error_reporting(E_ALL); 
    ini_set("display_errors", true);
	  require( 'PHPMailer-master/PHPMailerAutoload.php');
     date_default_timezone_set('Europe/Berlin');
     
  


//function sendmail($to_name, $to_mail, $subject, $txt, $typ, $from_name, $from_img) {

			$mailFROM = "join@democracy-deutschland.de";
			 
			$mail = new PHPMailer;
			
			$mail->isSendmail();
			$mail->CharSet = 'utf-8';  
    
    
            //Enable SMTP debugging
            // 0 = off (for production use)
            // 1 = client messages
            // 2 = client and server messages
            $mail->SMTPDebug = 2;

            //Ask for HTML-friendly debug output
            $mail->Debugoutput = 'html';
 
                //Set the hostname of the mail server
            $mail->Host = 'atmanspacher.eu';
            // use
            // $mail->Host = gethostbyname('smtp.gmail.com');
            // if your network does not support SMTP over IPv6

            //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
            $mail->Port = 465;

            //Set the encryption system to use - ssl (deprecated) or tls
            $mail->SMTPSecure = 'tls';

            //Whether to use SMTP authentication
            $mail->SMTPAuth = true;

            //Username to use for SMTP authentication - use full email address for gmail
            //$mail->Username = "peacepoint1@gmail.com";

            //Password to use for SMTP authentication
            //$mail->Password = "Fredxtz4488";
   
			$mail->setFrom($_POST["femail"], 'Neue Nachricht von  - '. $_POST["fvorname"] .' '. $_POST["fnachname"] .'');
			 
			$mail->addReplyTo($_POST["femail"], 'SYSTEM DEMOCRACY - '. $_POST["fvorname"] .' '. $_POST["fnachname"] .'');
			 
			$mail->addAddress($mailFROM,  $_POST["fvorname"] .' '. $_POST["fnachname"]);
			     


            $datum = date("d.m.Y");
            $uhrzeit = date("H:i");
 
                 

                $html ='<h3>eine neue nachricht ist von democracy-deutschland.de gesendet worden: </h3> ';
                $html .='<br> ';
                $html .='<hr> ';
                $html .='<br> ';
                $html .='<p>abegesendet :  '. $datum .' - '. $uhrzeit .'<p> ';
                $html .='<br> ';
                $html .='<table> ';
                $html.='    <tr>';
                $html.='        <td >vorname:</td>';

                $html.='        <td ><h3>'. $_POST["fvorname"] .'</h3></td>';
                $html.='    </tr> ';
                $html.='    <tr>';
                $html.='        <td>nachname:</td>';

                $html.='        <td><h3>'. $_POST["fnachname"] .'</h3></td>';
                $html.='    </tr> ';
                $html.='   <tr>';

                $html.='       <td>email:</td>';
                $html.='        <td>'. $_POST["femail"] .'</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>UI-Designer:</td>';
                $html.='        <td>';

                         if( isset($_POST["UI-Designer"]) ) { 
                            $html.=  $_POST["UI-Designer"]; 
                                                           
                         } else { 
                             $html.= ' - ';
                         } 
                                                      
                $html.='</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>Front-End-Prog:</td>';
                 $html.='        <td>';
                  
                        if( isset($_POST["Front-End-Prog"]) ) { 
                            $html.=  $_POST["Front-End-Prog"]; 
                                                           
                         }   else { 
                             $html.= ' - ';
                         } 
                                                             
                $html.='</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>Back-End-Prog:</td>';
                $html.='        <td>';
                  
                        if( isset($_POST["Back-End-Prog"]) ) { 
                            $html.=  $_POST["Back-End-Prog"]; 
                                                           
                         }   else { 
                             $html.= ' - ';
                         } 
                                                             
                $html.='</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>Kryptolog:</td>';
                $html.='        <td>';
                        if( isset($_POST["Kryptolog"]) ) { 
                            $html.=  $_POST["Kryptolog"]; 
                                                           
                         }   else { 
                             $html.= ' - ';
                         } 
                                                             
                $html.='</td>';
                
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>Fragenredakteur:</td>';
                $html.='        <td>';
                        if( isset($_POST["Fragenredakteur"]) ) { 
                            $html.=  $_POST["Fragenredakteur"]; 
                                                           
                         }   else { 
                             $html.= ' - ';
                         } 
                                                             
                $html.='</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>Marketingstrateg:</td>';
                $html.='        <td>';
                        if( isset($_POST["Marketingstrateg"]) ) { 
                            $html.=  $_POST["Marketingstrateg"]; 
                                                           
                         }   else { 
                             $html.= ' - ';
                         } 
                                                             
                $html.='</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>Botschafter:</td>';
                $html.='        <td>';
                        if( isset($_POST["Botschafter"]) ) { 
                            $html.=  $_POST["Botschafter"]; 
                                                           
                         }   else { 
                             $html.= ' - ';
                         } 
                                                             
                $html.='</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>sonstiges:</td>';
                $html.='        <td>';
                        if( isset($_POST["sonstiges"]) ) { 
                            $html.=  $_POST["sonstiges"]; 
                                                           
                         }   else { 
                             $html.= ' - ';
                         } 
                                                             
                $html.='</td>';
                $html.='    </tr>';
                $html.='    <tr>';
                $html.='        <td>Text:</td>';
                $html.='        <td>'. $_POST["text"] .'</td>';
                $html.='    </tr>';


    
               $html.='</table>';

            
           // $mail->Body   = $html;
  
            $mail->msgHTML($html);

     //$mail->addAttachment('PHPMailer-master/examples/images/phpmailer_mini.png');

 

	//send the message, check for errors
	if (!$mail->send()) {
	    echo "Mailer Error: " . $mail->ErrorInfo;
	} else {
   
	    //echo "Message sent :: <br>text :: " . $html . "<br> striptags:: ". strip_tags($html);
	     echo "Message sent";
   }
//}
?>
