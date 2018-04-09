<?php
namespace SQL;

class BETA_CODES_FIND extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT beta_code.code, COUNT(beta.code) as count, comment, createdAt FROM `beta_code`'.
' LEFT JOIN beta ON beta_code.code = beta.code'.
' GROUP BY beta_code.code'.
' ORDER BY createdAt;';
    }
}
