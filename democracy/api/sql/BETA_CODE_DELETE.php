<?php
namespace SQL;

class BETA_CODE_DELETE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM `alpha_code` WHERE code = ?;';
    }
}
