<?php
namespace SQL;

class SUBSCRIBE_ADD extends \SYSTEM\DB\QP {
    public static function get_class(){return \get_class();}
    public static function mysql(){return
'INSERT INTO subscribe (`email`, `beta`, `android`, `ios`) VALUES (?, ?, ?, ?)'.
' ON DUPLICATE KEY UPDATE beta=?, android=?, ios=?;';
    }
}
