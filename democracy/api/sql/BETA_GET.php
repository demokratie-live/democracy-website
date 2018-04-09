<?php
namespace SQL;

class BETA_GET extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT beta.code as used_code, beta_code.code, comment,'.
' email, android, ios,'.
' redeemedAt, createdAt, storedAt, emailedAt'.
' FROM beta LEFT JOIN beta_code ON beta.code = beta_code.code;';
    }
}
