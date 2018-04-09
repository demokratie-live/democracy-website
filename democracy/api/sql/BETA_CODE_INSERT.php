<?php
namespace SQL;

class BETA_CODE_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO `beta_code`(`code`, `comment`) VALUES (UPPER(?),?);';
    }
}
