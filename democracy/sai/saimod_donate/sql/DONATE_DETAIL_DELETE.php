<?php
namespace SQL;

class DONATE_DETAIL_DELETE extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'DELETE FROM donate WHERE id=?;';
    }
}