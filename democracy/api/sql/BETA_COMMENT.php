<?php
namespace SQL;

class BETA_COMMENT extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'UPDATE `alpha_code` SET `comment` = ? WHERE UPPER(`code`) = UPPER(?);';
    }
}
