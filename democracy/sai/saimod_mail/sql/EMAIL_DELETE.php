<?php
namespace SQL;

class BETA_CODES_COUNT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT COUNT(code) as count FROM beta_code;';
    }
}