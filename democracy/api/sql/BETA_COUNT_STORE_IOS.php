<?php
namespace SQL;

class BETA_COUNT_STORE_IOS extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT COUNT(*) as count FROM `alpha`'.
' WHERE storedAt IS NULL AND ios = 1;';
    }
}
