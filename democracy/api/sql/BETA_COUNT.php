<?php
namespace SQL;

class BETA_COUNT extends \SYSTEM\DB\QQ {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'SELECT COUNT(redeemedAt) as count, COUNT(redeemedAt) - COUNT(storedAt) as store FROM beta;';
    }
}