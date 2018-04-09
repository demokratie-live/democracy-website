<?php
namespace SQL;

class BETA_CODE_VALIDATE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT count(*) as count FROM beta_code WHERE UPPER(`code`) = UPPER(?);';
    }
}
