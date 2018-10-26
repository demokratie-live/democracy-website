<?php
namespace SQL;

class BETA_MAIL extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE `alpha` SET `emailedAt` = NOW() WHERE LOWER(`email`) = LOWER(?);';
    }
}
