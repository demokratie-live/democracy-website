<?php
namespace SQL;

class EMAIL_CLONE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO email (name,account,sender,subject,template_text,template_html)
(SELECT CONCAT("Clone:",name) as name,account,sender,subject,template_text,template_html FROM email WHERE id = ?);';
    }
}