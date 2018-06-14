<?php
namespace SQL;

class EMAIL_IMAGE_CLONE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO email_image (`email`,`name`,`file`,`mime`)
(SELECT ? as email, name, file, mime FROM email_image WHERE email = ?);';
    }
}