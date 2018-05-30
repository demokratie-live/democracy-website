<?php
namespace SQL;

class EMAIL_IMAGE_UPDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE email_image SET `name`=?,`file`=?,`mime`=? WHERE `email` = ? AND `id` = ?;';
    }
}