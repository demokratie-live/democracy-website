<?php
namespace SQL;

class BETA_COUNT_STORE_IOS extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT COUNT(*) as count FROM `beta`'.
' WHERE storedAt IS NULL AND ios = 1;';
    }
}
