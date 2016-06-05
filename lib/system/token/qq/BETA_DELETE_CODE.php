<?php
namespace SQL;
class BETA_DELETE_CODE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM `mojotrollz_beta`'.
' WHERE code = ?;';    
    }
}