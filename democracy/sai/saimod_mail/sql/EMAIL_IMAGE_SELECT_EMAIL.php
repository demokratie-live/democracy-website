<?php
namespace SQL;

class EMAIL_IMAGE_SELECT_EMAIL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM email_image WHERE email = ?;';
    }
}