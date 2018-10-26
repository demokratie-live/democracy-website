<?php
namespace SQL;

class BETA_INSERT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO `alpha`(`code`, `email`, `android`, `ios`, `redeemedAt`) VALUES (UPPER(?),LOWER(?),?,?,NOW());';
    }
}
