<?php
namespace SQL;

class BETA_STORE_ANDROID_FIND extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT beta.code as used_code, beta_code.code, email, comment, createdAt, android, ios, redeemedAt, storedAt FROM beta LEFT JOIN beta_code ON beta.code = beta_code.code'.
' WHERE android = 1 AND redeemedAt IS NOT NULL ORDER BY storedAt;';
    }
}
