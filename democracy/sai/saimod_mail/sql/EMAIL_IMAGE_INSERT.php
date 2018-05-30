<?php
namespace SQL;

class EMAIL_IMAGE_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO email_image (`id`,`email`,`name`,`file`,`mime`)VALUES(?,?,?,?,?);';
    }
}