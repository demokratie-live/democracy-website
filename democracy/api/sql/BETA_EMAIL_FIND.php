<?php
namespace SQL;

class BETA_EMAIL_FIND extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT * FROM `beta` WHERE LOWER(email) = LOWER(?) LIMIT 1;';
    }
}
