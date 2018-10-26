<?php
namespace SQL;

class BETA_MAIL_FIND extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT alpha.code as used_code, alpha_code.code, email, comment, createdAt, emailedAt, android, ios, redeemedAt, storedAt'.
' FROM alpha LEFT JOIN alpha_code ON alpha.code = alpha_code.code'.
' WHERE storedAt IS NOT NULL ORDER BY emailedAt;';
    }
}
