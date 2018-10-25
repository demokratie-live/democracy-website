<?php
namespace SQL;

class BETA_STORE_IOS_FIND extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT alpha.code as used_code, alpha_code.code, email, comment, createdAt, android, ios, redeemedAt, storedAt'.
' FROM alpha LEFT JOIN alpha_code ON alpha.code = alpha_code.code'.
' WHERE ios = 1 AND redeemedAt IS NOT NULL ORDER BY storedAt;';
    }
}
