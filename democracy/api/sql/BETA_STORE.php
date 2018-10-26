<?php
namespace SQL;

class BETA_STORE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE `alpha` SET `storedAt` = NOW() WHERE LOWER(`email`) = LOWER(?);';
    }
}
