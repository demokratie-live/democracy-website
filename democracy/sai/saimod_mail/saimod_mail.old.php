<?php
/*
    public static function sai_mod__SAI_saimod_mail_action_import_paypal(){
        $account = \SYSTEM\CONFIG\config::get(\config_ids::DEMOCRACY_EMAIL_CONTACT);
        $connection_string = '{'.$account['imap'].'}';
        $folder = 'INBOX.4 - Paypal';
        $imap = imap_open ( $connection_string.$folder, $account['username'],  $account['password']);         
        $check = imap_check($imap);
        
        $result = ['count' => 0, 'new' => 0, 'mod' => 0, 'match' => 0];
        
        $i = $check->Nmsgs;
        $result['count'] = $i;
        // Paypal
        while($i > 0){
            $body = imap_body($imap, $i);
            $b64 = imap_base64($body);
            if($b64){
                $body = $b64;
            }
            
            $regex_name = '/Name des Kunden:<\/th><td.*>(.*) (.*)<\/td>/mU';
            $regex_mail = '/E-Mail des Kunden:<\/th><td.+>(.*)<\/td>/mU';

            $first_name = null;
            $last_name = null;
            $email = null;

            preg_match_all($regex_name, $body, $matches, \PREG_SET_ORDER);
            if($matches){
                $first_name = $matches[0][1];
                $last_name = $matches[0][2];
            }
            preg_match_all($regex_mail, $body, $matches, \PREG_SET_ORDER);
            if($matches){
                $email = $matches[0][1];
            }

            if(!$email){
                $regex_single = '/<span.+>Diese E-Mail bestätigt den Erhalt einer Spende über &euro;.+ von (.*) (.*) \(<a href="mailto:(.*)\?/mU';
                preg_match_all($regex_single, $body, $matches, \PREG_SET_ORDER);
                if($matches){
                    $first_name = $matches[0][1];
                    $last_name = $matches[0][2];
                    $email = $matches[0][3];
                }
            }

            if($email){
                $result['match'] += 1;
                $contact = \SQL\CONTACT_SELECT::Q1(array($email));
                if($contact){
                    $is_subscribed = \SQL\ISSUBSCRIBED::Q1(array($email,self::EMAIL_LIST_EMAIL_PAYPAL))['count'] == 1;
                    if(!$is_subscribed){
                        \SQL\CONTACT_UPDATE::QI(array($contact['sex'],$first_name,$last_name,$contact['organization'],$email));
                        \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                        \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_PAYPAL));
                        $result['mod'] += 1;
                    } 
                } else {
                    \SQL\CONTACT_INSERT::QI(array($email,null,$first_name,$last_name,''));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_PAYPAL));
                    $result['new'] += 1;
                }
            }
            $i--;
        }
        imap_close($imap);
        
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_import_pr(){
        $account = \SYSTEM\CONFIG\config::get(\config_ids::DEMOCRACY_EMAIL_CONTACT);
        $connection_string = '{'.$account['imap'].'}';
        $folder = 'INBOX.2 - Public Relations';
        $imap = imap_open ( $connection_string.$folder, $account['username'],  $account['password']);         
        $check = imap_check($imap);
        
        $result = ['count' => 0, 'new' => 0, 'mod' => 0, 'match' => 0];
        
        $i = $check->Nmsgs;
        $result['count'] = $i;        
        while($i > 0){
            $first_name = $last_name = '';
            $header = imap_headerinfo($imap, $i);
            $from = $header->from[0];
            if(isset($from->personal)){
                $personal = explode(' ', imap_utf8($from->personal));
                $first_name = $personal[0];
                $last_name = count($personal) > 1 ? $personal[1] : null;
            }
            $email = $from->mailbox.'@'.$from->host;
            
            $result['match'] += 1;
            $contact = \SQL\CONTACT_SELECT::Q1(array($email));
            if($contact){
                $is_subscribed = \SQL\ISSUBSCRIBED::Q1(array($email,self::EMAIL_LIST_EMAIL_PR))['count'] == 1;
                if(!$is_subscribed){
                    \SQL\CONTACT_UPDATE::QI(array($contact['sex'],$first_name,$last_name,$contact['organization'],$email));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_PR));
                    $result['mod'] += 1;
                } 
            } else {
                \SQL\CONTACT_INSERT::QI(array($email,null,$first_name,$last_name, ''));
                \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_PR));
                $result['new'] += 1;
            }
            
            $i--;
        }
         
        imap_close($imap);
        
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_import_contact(){
        $account = \SYSTEM\CONFIG\config::get(\config_ids::DEMOCRACY_EMAIL_CONTACT);
        $connection_string = '{'.$account['imap'].'}';
        $folder = 'INBOX.1 - Kontakte + Kommunikation';
        $imap = imap_open ( $connection_string.$folder, $account['username'],  $account['password']);         
        $check = imap_check($imap);
        
        $result = ['count' => 0, 'new' => 0, 'mod' => 0, 'match' => 0];
        
        $i = $check->Nmsgs;
        $result['count'] = $i;        
        while($i > 0){
            $first_name = $last_name = '';
            $header = imap_headerinfo($imap, $i);
            $from = $header->from[0];
            if(isset($from->personal)){
                $personal = explode(' ', imap_utf8($from->personal));
                $first_name = $personal[0];
                $last_name = count($personal) > 1 ? $personal[1] : null;
            }
            $email = $from->mailbox.'@'.$from->host;
            
            $result['match'] += 1;
            $contact = \SQL\CONTACT_SELECT::Q1(array($email));
            if($contact){
                $is_subscribed = \SQL\ISSUBSCRIBED::Q1(array($email,self::EMAIL_LIST_EMAIL_CONTACT))['count'] == 1;
                if(!$is_subscribed){
                    \SQL\CONTACT_UPDATE::QI(array($contact['sex'],$first_name,$last_name,$contact['organization'],$email));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_CONTACT));
                    $result['mod'] += 1;
                } 
            } else {
                \SQL\CONTACT_INSERT::QI(array($email,null,$first_name,$last_name,''));
                \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_CONTACT));
                $result['new'] += 1;
            }
            
            $i--;
        }
         
        imap_close($imap);
        
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
    
    public static function sai_mod__SAI_saimod_mail_action_import_volunteers(){
        $account = \SYSTEM\CONFIG\config::get(\config_ids::DEMOCRACY_EMAIL_CONTACT);
        $connection_string = '{'.$account['imap'].'}';
        $folder = 'INBOX.3 - Volunteers + Kooperationen';
        $imap = imap_open ( $connection_string.$folder, $account['username'],  $account['password']);         
        $check = imap_check($imap);
        
        $result = ['count' => 0, 'new' => 0, 'mod' => 0, 'match' => 0];
        
        $i = $check->Nmsgs;
        $result['count'] = $i;        
        while($i > 0){
            $first_name = $last_name = '';
            $header = imap_headerinfo($imap, $i);
            $from = $header->from[0];
            if(isset($from->personal)){
                $personal = explode(' ', imap_utf8($from->personal));
                $first_name = $personal[0];
                $last_name = count($personal) > 1 ? $personal[1] : null;
            }
            $email = $from->mailbox.'@'.$from->host;
            
            $result['match'] += 1;
            $contact = \SQL\CONTACT_SELECT::Q1(array($email));
            if($contact){
                $is_subscribed = \SQL\ISSUBSCRIBED::Q1(array($email,self::EMAIL_LIST_EMAIL_VOLUNTEERS))['count'] == 1;
                if(!$is_subscribed){
                    \SQL\CONTACT_UPDATE::QI(array($contact['sex'],$first_name,$last_name,$contact['organization'],$email));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                    \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_VOLUNTEERS));
                    $result['mod'] += 1;
                } 
            } else {
                \SQL\CONTACT_INSERT::QI(array($email,null,$first_name,$last_name,''));
                \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_NEWSLETTER));
                \SQL\SUBSCRIBE::QI(array($email,self::EMAIL_LIST_EMAIL_VOLUNTEERS));
                $result['new'] += 1;
            }
            
            $i--;
        }
         
        imap_close($imap);
        
        return \SYSTEM\LOG\JsonResult::toString($result);
    }
 */