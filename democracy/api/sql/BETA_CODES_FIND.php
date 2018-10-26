<?php
namespace SQL;

class BETA_CODES_FIND extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT alpha_code.code, COUNT(alpha.code) as count, comment, createdAt FROM `alpha_code`'.
' LEFT JOIN alpha ON alpha_code.code = alpha.code'.
' GROUP BY alpha_code.code'.
' ORDER BY createdAt;';
    }
}
