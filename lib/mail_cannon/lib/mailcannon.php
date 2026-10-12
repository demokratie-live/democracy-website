<?php
error_reporting(E_ALL);
require_once(dirname(__FILE__).'/Pear/Mail/Mail.php');
require_once(dirname(__FILE__).'/Pear/Mail/mime.php');
require_once(dirname(__FILE__).'/Pear/Net/SMTP.php');

class mailcannon {
    public static function send($smtp,$from,$to,$domain,$subject,$text,$html,$images,$attachments){
        if($smtp){
            $mail = Mail::factory('smtp', $smtp);
        } else {
            $mail = Mail::factory('mail');}
        
        $mime = new Mail_mime("\n");
        if($text){
            $mime->setTXTBody($text);}
        if($html){
            $mime->setHTMLBody($html);}    
        
        // attach images
        foreach($images as $name=>$image){
            $mime->addHTMLImage($image['file'], $image['mime'], $name, true, $name);}
        // attach files
        foreach($attachments as $name=>$attachment){
            $mime->addAttachment($attachment,'application/pdf',$name);}

        $mime_params = array(   'text_encoding' => '7bit',
                                'text_charset'  => 'UTF-8',
                                'html_charset'  => 'UTF-8',
                                'head_charset'  => 'UTF-8');

        $body = $mime->get($mime_params);
        $hdrs = $mime->headers(array(   'From' => $from,
                                        'To' => $to,
                                        'Subject' => $subject,
                                        'Return-Path' => $from,
                                        'Message-ID' => self::generateMessageID($domain),
                                        'Date' => date('r', time())));

        $recipients = array( 'To' => $to);
        $succ = $mail->send($recipients, $hdrs, $body);
        if (PEAR::isError($succ)) {
            new \SYSTEM\LOG\ERROR($succ);
            return false;
        }
        return true;
    }
    
    public static function fire($delay,$from,$subject,$html_file,$text_file,$member_list,$unsubscribe_list,$images,$attachments,$replacements,$smtp = null,$silent = false){
        $silent ? null : print "Sending from ".$from." - '".$subject."'\n";

        if(!$member_list){
            die("Empty Member List given\n");}
            
        // load addresses
        $to_proto = array();
        if(!is_file($member_list)){
            $to_proto[] = $member_list;
        } else {
            $file = fopen($member_list, 'r');
            while (($line = fgetcsv($file,0,";")) != FALSE) {
                $to_proto[] = $line;}
            fclose($file);
        }
        $silent ? null : print "To address count: " . count($to_proto) . "\n";
        
        // load unsubscribe addresses
        $dont_send = array();
        if(is_file($unsubscribe_list)){
            $file = fopen($unsubscribe_list, 'r');
            while (($line = fgetcsv($file)) != FALSE) {
                $dont_send[] = $line[0];}
            fclose($file);
        }

        if($dont_send && count($dont_send)>0) {
            $silent ? null : print "Dont send count: " . count($dont_send) . "\n";
        } else {
            $silent ? null : print "No dont sends\n";}
        
        // remove unsubscribes from to_proto
        $to_addresses = array();
        foreach($to_proto as $addr){
            if( strlen($addr[0]) > 0 &&
                substr($addr[0], 0,1) !== '#' &&
                !in_array($addr[0], $dont_send)){
                $to_addresses[] = $addr;}
        }
        $silent ? null : print "Reduced to list count " . count($to_addresses)."\n\n";
        
        if($smtp){
            $mail = Mail::factory('smtp', $smtp);
        } else {
            $mail = Mail::factory('mail');}
            
        $silent ? null : print "Running...\n";
        $count = 0;
        foreach ($to_addresses as $addr) {
            $to = $addr;
            // load text & html file
            if(!file_exists($text_file)){
                $silent ? null : print "Skipping ".$to." - No Text found:".$text_file." \n";
                $text = file_get_contents($text_file);
            } else {
                $text = file_get_contents($text_file);}
            $html = file_exists($html_file) ? file_get_contents($html_file) : NULL;

            //Calculate replacements
            $replace = array();
            foreach($replacements as $key=>$value){
                // value
                if( array_key_exists('value', $value)){
                    // value attribute
                    if( array_key_exists('attribute', $value['value'])){
                        if(count($addr) <= $value['value']['attribute']){
                            if(!array_key_exists('*',$value)){
                                die('No Default Value found for "'.$key.'" - required on "'.$to.'" - dieing!');}
                            $replace[$key] = $value['*'];
                        } else {
                            $replace[$key] = $addr[$value['value']['attribute']];
                        }
                    // value text
                    } elseif(array_key_exists('text', $value['value'])){
                        $replace[$key] = $value['value']['text'];
                    // value template
                    } elseif(array_key_exists('template', $value['value'])){
                        $tpl = $value['value']['template'];
                        if(!file_exists($tpl)){
                            die('TPL File "'.$tpl.'" not found for "'.$key.'" - required on "'.$to.'" - dieing!');}
                        $replace[$key] = file_get_contents($tpl);
                    }
                    continue;
                }
                // selector attribute
                if( array_key_exists('selector', $value) &&
                    array_key_exists('attribute', $value['selector']) &&
                    array_key_exists('values', $value)){
                    if(count($addr) <= $value['selector']['attribute']){
                        if(!array_key_exists('*',$value)){
                            die('No Default Value found for "'.$key.'" - required on "'.$to.'" - dieing!');}
                        $replace[$key] = $value['*'];
                    } else {
                        $replace[$key] = $value['values'][$addr[$value['selector']['attribute']]];
                    }
                    continue;
                }
            }

            //Replace
            $preg_search = array();
            $preg_replace = array();
            foreach($replace as $key=>$value){
                $preg_search[] = '/\${'.$key.'}/';
                $preg_replace[] = $value;
            }
            $text = @preg_replace($preg_search, $preg_replace, $text);
            $html = @preg_replace($preg_search, $preg_replace, $html);
            
            self::send($smtp,$from,$to,$from,$subject,$text,$html,$images,$attachments);
            $count += 1;
            sleep($delay);
        }
    }
    
    /**
     * @see http://www.jwz.org/doc/mid.html
     */
    public static function generateMessageID($domain)
    {
        return sprintf(
            "<%s.%s@%s>",
            base_convert(microtime(), 10, 36),
            base_convert(bin2hex(openssl_random_pseudo_bytes(8)), 16, 36),
            $domain
        );
    }
}