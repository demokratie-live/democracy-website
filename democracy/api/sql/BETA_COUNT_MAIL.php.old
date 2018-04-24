<?php
namespace SQL;

class BETA_COUNT_MAIL extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT COUNT(*) as count FROM `beta`'.
' WHERE emailedAt IS NULL AND storedAt IS NOT NULL;';
    }
}
