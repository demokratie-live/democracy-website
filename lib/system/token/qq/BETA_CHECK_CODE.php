<?php
namespace SQL;
class BETA_CHECK_CODE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT COUNT(*) as count FROM mojotrollz_beta WHERE code = ? AND user_new IS NULL';
    }
}