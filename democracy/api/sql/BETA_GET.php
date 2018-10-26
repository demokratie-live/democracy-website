<?php
namespace SQL;

class BETA_GET extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT alpha.code as used_code, alpha_code.code, comment,'.
' email, android, ios,'.
' redeemedAt, createdAt, storedAt, emailedAt'.
' FROM alpha LEFT JOIN alpha_code ON alpha.code = alpha_code.code;';
    }
}
