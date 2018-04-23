<?php
error_reporting(E_ALL);
require_once(dirname(__FILE__).'/mailcannon.php');

$file = $argv[1];
if(!is_file($file)){
    throw new Exception('No json config file provided.');}

$input = json_decode(file_get_contents($file),true);
    
mailcannon::fire(   $input['bcc'], $input['delay'], $input['from'], $input['subject'],
                    array_key_exists('html_file', $input) ? $input['html_file'] : NULL, $input['text_file'], $input['member_list'],
                    $input['unsubscribe_list'], $input['images'], $input['attachments'], $input['replacements'], $input['smtp']);