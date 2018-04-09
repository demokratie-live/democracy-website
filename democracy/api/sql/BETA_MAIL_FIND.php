<?php
namespace SQL;

class BETA_MAIL_FIND extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT beta.code as used_code, beta_code.code, email, comment, createdAt, emailedAt, android, ios, redeemedAt, storedAt FROM beta LEFT JOIN beta_code ON beta.code = beta_code.code'.
' WHERE storedAt IS NOT NULL ORDER BY emailedAt;';
    }
}
